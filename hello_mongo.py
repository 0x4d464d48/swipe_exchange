from pymongo import MongoClient
c = MongoClient("mongodb://localhost:27017")
c['test-database']

