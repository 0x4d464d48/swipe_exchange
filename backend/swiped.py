from flask import Flask, Response, request, send_from_directory
import gevent
from gevent import queue, greenlet
from gevent.wsgi import WSGIServer
import poller
import service

pollers = {}
app = Flask(__name__)

@app.route("/<path:path>")
def send_file(path):
    return send_from_directory("../public", path)

@app.route("/")
def send_index():
    return send_from_directory("../public", "index.html")


@app.route("/jsonrpc", methods=["POST"])
def jsonrpc():
    json_from_client = request.form["json"]
    return (service.handle_json(json_from_client), None)

@app.route("/sse", methods=["GET"])
def sse():
	def gen(username):
		if username in pollers:
			del pollers[username]

		my_queue = gevent.queue.Queue()
		my_poller = greenlet.Greenlet.spawn(poller.poller_function, username, my_queue)
		pollers[username] = my_poller

		try:
			while True:
				yield str(my_queue.get())
		except GeneratorExit: # Or maybe use flask signals
			gevent.kill(my_poller)
			del pollers[username]

	return Response(gen(request.args.get("username")), mimetype="text/event-stream")

if __name__ == "__main__":
	pollers = {}
	service.init()
	server = WSGIServer(("", 80), app)

	server.serve_forever()