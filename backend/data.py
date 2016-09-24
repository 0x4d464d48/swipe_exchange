
import pymongo as pm 
from constants import *

#module initialization function
def init():
    global client
    global db 
    client = pm.MongoClient(MONGOD_IP,MONGOD_PORT)
    db = client.db[DB_NAME]

def populate_db():
    requests = db["requests"]
    listings = db["listings"]
    users = db["users"]

def add_listing(email,name,description,price,image,listing_type):
    """Returns the unix timestamp of the listing"""


def add_request(timestamp,email):
    """Returns the unix timestamp of the listing"""

def get_user_info(email):
    """Returns a python dict with a user's information"""
    

def get_listings(timestamp,seller_email,listing_type,max_price,min_price):
    """Returns a python list of dictionarys with 
    keys for all entries in a listing"""

def get_requests(email):
    """Returns a python list of dictionarys with 
    keys for all entries in a listing"""

    


def nuke_db():
    
    












if __name__ == "__main__":
    init()
