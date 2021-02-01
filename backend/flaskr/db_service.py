from flask import Flask
from pymongo import MongoClient
import json

db_name = 'trading_journal'
url = ''

with open('env.json') as f:
    data = json.load(f)
    url = data['url']  

def get_db():
    return MongoClient(url)[db_name]
