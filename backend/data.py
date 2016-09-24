
import pymongo as pm 
from constants import *

#module initialization function
def init():
    global client
    global db 
    client = pm.MongoClient(MONGOD_IP,MONGOD_PORT)
    db = client.db[DB_NAME]

def populate_db():

    #for f,col in FILES

    requests_file = open(REQUESTS)
    listings_file = open(LISTINGS)
    users_file  = open(USERS)

    requests_json = json.load(requests_file)
    listings_json = json.load(listings_file)
    users_json = json.load(users_file)
    

    requests_col = db["requests"]
    listings_col = db["listings"]
    users_col = db["users"]

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
