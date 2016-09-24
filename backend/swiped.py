from flask import Flask, request, send_from_directory
from service import handle_json
app = Flask(__name__)

@app.route("/<path:path>")
def send_file(path):
    return send_from_directory("../public", path)

@app.route("/")
def send_index():
    return send_from_directory("../public", "index.html")


@app.route('/jsonrpc', methods=['POST'])
def jsonrpc():
    json_from_client = request.form["json"]
    return service.handle_json(json_from_client)

if __name__ == "__main__":

    app.run(host="0.0.0.0", port=int("80"))