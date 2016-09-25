import json
import logic

handlers = {
	"ping":				logic.handle_ping,
	"get_users":		logic.handle_get_user,
	"get_listings":		logic.handle_get_listings,
	"get_requests":		logic.handle_get_request,
	"create_listing":	logic.handle_create_listing,
	"create_request":	logic.handle_create_request,
	"approve_request":	logic.handle_approve_request
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