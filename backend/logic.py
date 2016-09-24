import data

def init():
	data.init()

def handle_ping(params):
	return 0

def handle_get_user(params):
	user_email = params["user_email"]
	return data.get_user_info(user_email)

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