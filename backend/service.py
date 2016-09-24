import json
import logic

handlers = {
	"ping":				logic.handle_ping,
	"create_listing":	logic.handle_create_listing
}

def init():
	logic.init()

def handle_json(json_request):
	request = json.loads(json_request)
	method = request["method"]
	reqid = request["id"]
	handler = handlers[method]

	if ("params" in request):
		params = request["params"]
	else:
		params = None

	result = handler(params)

	response = {
		"jsonrpc": "2.0",
		"id": reqid,
		"result": result
	}

	return json.dumps(response)