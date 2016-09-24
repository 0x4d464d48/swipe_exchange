from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.test_database
posts = db.posts
import datetime
post = {"author": "Mike",
        "text": "My first blog post!",
        "tags": ["mongodb", "python", "pymongo"],
        "date": datetime.datetime.utcnow()}

post_id = posts.insert_one(post).inserted_id
db.collection_names(include_system_collections=False)
print posts.find_one()

