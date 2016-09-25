import data

def init():
	data.init()

def handle_ping(params):
	return 0

def handle_get_user(params):
	user_email = params["user_email"]
	return data.get_user_info(
		user_email
	)

def handle_get_listings(params):
	listing_timestamp = params["listing_timestamp"]
	seller_email = params["seller_email"]
	listing_type = params["listing_type"]
	listing_price_min = params["listing_price_min"]
	listing_price_max = params["listing_price_max"]
	return data.get_listings(
		listing_timestamp,
		seller_email,
		listing_type,
		listing_price_max,
		listing_price_min,
	)

def handle_get_request(params):
	user_email = params["user_email"]
	return data.get_requests(
		user_email
	)

def handle_create_listing(params):
	seller_email = params["seller_email"]
	listing_name = params["listing_name"]
	listing_description = params["listing_description"]
	listing_price = params["listing_price"]
	listing_image = params["listing_image"]
	listing_type = params["listing_type"]
	return data.add_listing(
		seller_email,
		listing_name,
		listing_description,
		listing_price,
		listing_image,
		listing_type
	)

def handle_create_request(params):
	listing_timestamp = params["listing_timestamp"]
	buyer_email = params["buyer_email"]
	return data.add_request(
		listing_timestamp,
		buyer_email
	)

def handle_approve_request(params):
	request_timestamp = params["request_timestamp"]
	data.approve_request(
		request_timestamp
	)

	return 0