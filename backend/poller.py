import gevent
import logic
import json

def poller_function(username, my_queue):
	while True:
        #my_queue.put('data: {"jsonrpc": "2.0","method": "hey_test", "params": {"user_email": "'+username+'"}}\n\n')
		gevent.sleep(0.5)
		requests = logic.update_status(username)

		for request in requests:
			my_queue.put("data: " + json.dumps({
					"jsonrpc": "2.0",
					"method": "hey_request",
					"params": request
				}) + "\n\n")