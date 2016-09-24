import json
import pymongo as pm 
from constants import *

#module initialization function
def init():
    global client
    global db 
    client = pm.MongoClient(MONGOD_IP,MONGOD_PORT)
    db = client.db[DB_NAME]
    populate_db()

def populate_db():
    files = []
    for collection_name in COLLECTIONS:
        f = open(collection_name+".json")
        json_data = json.load(f)

        collection = db[collection_name]

        result = collection.insert_many(json_data)
        print(result.inserted_ids)

        f.close()
    
def add_listing(email,name,description,price,image,listing_type):
    """Returns the unix timestamp of the listing"""
    pass


def add_request(timestamp,email):
    """Returns the unix timestamp of the listing"""
    pass

def get_user_info(email):
    """Returns a python dict with a user's information"""
    pass
    

def get_listings(timestamp,seller_email,listing_type,max_price,min_price):
    """Returns a python list of dictionarys with 
    keys for all entries in a listing"""
    pass

def get_requests(email):
    """Returns a python list of dictionarys with 
    keys for all entries in a listing"""
    pass

    


def nuke_db():
    pass
    
    












if __name__ == "__main__":
    init()
