import json
import pymongo as pm 
import time
from constants import *

#module initialization function
def init():
    global client
    global db 
    client = pm.MongoClient(MONGOD_IP,MONGOD_PORT)
    db = client[DB_NAME]
    nuke_db()
    populate_db()

def populate_db():
    files = []
    for collection_name in COLLECTIONS:
        f = open(collection_name+".json")
        json_data = json.load(f)

        collection = db[collection_name]

        result = collection.insert_many(json_data)
        f.close()
    
def add_listing(seller_email,product_name,description,price,image,listing_type):
    """Returns the unix timestamp of the listing"""
    #TODO: Add check for identical timestamps
    t = int(time.time()*1000)
    listing = {
                "timestamp": t,
                "seller": seller_email,
                "name": product_name,
                "description": description,
                "price": price, 
                "image": image,
                "type": listing_type,
                "buyer": None
            }
    db.listings.insert_one(listing)
    return t

def add_request(listing_timestamp,buyer_email):
    """Returns the unix timestamp of the listing"""
    #TODO: Add check for identical timestamps
    
    listing = db.listings.find_one({"timestamp": listing_timestamp})
    if listing is not None:
        seller_email = listing["seller"]
    else:
        raise Exception("Corresponding listing not found")

    t = int(time.time()*1000)
    request = {
                "request_timestamp": t,
                "listing_timestamp": listing_timestamp,
                "seller_email": t,
                "buyer_email": buyer_email,
                "status": 0
            }
    db.requests.insert_one(request)
    return t

def get_user_info(user_email):
    """Returns a python dict with a user's information"""
    user = db.users.find_one({"email": user_email})
    rating = user["aggregate_rating"] / user["number_of_ratings"]

    return {
            "user_email": user["email"],
            "user_first_name": user["first_name"],
            "user_last_name": user["last_name"],
            "user_image": user["image"],
            "user_location": user["location"],
            "user_rating": rating
    }
    
    

def get_listings(listing_timestamp,seller_email,listing_type,max_price,min_price):
    """Returns a python list of dictionarys with 
    keys for all entries in a listing"""
    listing_cursor = db.listings.find()

    listings = []
    for listing in listing_cursor:
        listings.append(listing)

    listing_cursor.close()

    filtered_listings = filter_listings(listings,
            listing_timestamp,seller_email,listing_type,max_price,min_price)

    return process_listings(listings)

#helper for get_listings
def filter_listings(listings,listing_timestamp,seller_email,listing_type,max_price,min_price):
    filtered_listings = []
    for listing in listings:
        if listing["buyer"] is not None:
            continue

        if not (listing_timestamp is None) or (listing["timestamp"] == listing_timestamp):
            continue

        if not (seller_email is None) or (listing["seller"] == seller_email):
            continue

        if not (listing_type is None) or (listing["type"] == listing_type):
            continue

        if not (max_price is None) or (min_price is None) \
                or listing["price"] > max_price or listing["price"] < min_price["price"]:
            continue

        filtered_listings.append(listings)

    return filtered_listings


def process_listings(listings):
    processed_listings = []
    for listing in listings:
        processed_listings.append({
            "listing_timestamp": listing["timestamp"],
            "listing_seller": listing["seller"],
            "listing_name": listing["description"],
            "listing_description": listing["description"],
            "listing_price": listing["price"],
            "listing_image": listing["image"],
            "listing_type": listing["type"],
            "listing_buyer": None
            })

    return processed_listings

def get_requests(user_email):
    """Returns a python list of dictionarys with 
    keys for all entries in a listing"""
    request_cursor = db.requests.find({"seller_email": user_email})

    requests = []
    for request in request_cursor:
        requests.append(request)

    request_cursor.close()
    
    for request in requests:
        del request["_id"]
        status = request["status"]
        del request["status"]
        request["request_is_read"] = (status == 2)
        

    return requests

    
def nuke_db():
    for collection_name in COLLECTIONS:
        db.drop_collection(collection_name)
    

if __name__ == "__main__":
    init()
    add_listing("mathcurt@gmail.com","My soul","I'm selling my soul",1000,"soul.jpg","personal items")
    add_request(1474746464,"mathcurt@gmail.com")
    #print(get_user_info("jeremy.quicklearner@gmail.com"))
    #print(get_requests("jeremy.quicklearner@gmail.com"))
    print(get_listings(None,None,None,None,None))
