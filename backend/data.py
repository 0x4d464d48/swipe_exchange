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
    t = int(time.time())
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

    t = time.time()
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
    pass
    user = db.listings.find_one({"timestamp": listing_timestamp})
    

def get_listings(listing_timestamp,seller_email,listing_type,max_price,min_price):
    """Returns a python list of dictionarys with 
    keys for all entries in a listing"""
    pass

def get_requests(user_email):
    """Returns a python list of dictionarys with 
    keys for all entries in a listing"""
    pass

    
def nuke_db():
    for collection_name in COLLECTIONS:
        db.drop_collection(collection_name)
    
    












if __name__ == "__main__":
    init()
    add_listing("mathcurt@gmail.com","My soul","I'm selling my soul",1000,"soul.jpg","personal items")
    add_request(1474746464,"mathcurt@gmail.com")
    nuke_db()
