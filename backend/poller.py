import gevent

def poller_function(username, my_queue):
	while True:
		gevent.sleep(1)
		my_queue.put('{"jsonrpc": "2.0","method": "hey_test", "params": {"user_email": "'+username+'"}}')