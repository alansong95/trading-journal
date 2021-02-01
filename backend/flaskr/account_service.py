from bson.json_util import dumps
from constants import RESP, SUCCESS, FAIL, DATA, ACCOUNTS, MESSAGE, USER
import db_service

db = db_service.get_db()

def getAccounts(user):
    try:
        accounts = db.accounts.find_one({USER: user})
        if accounts:
            return dumps({RESP: SUCCESS, DATA: {ACCOUNTS: accounts[ACCOUNTS]}})
        return dumps({RESP: SUCCESS, DATA: {ACCOUNTS: []}})
    except Exception as e:
        return dumps({RESP: FAIL, DATA: {MESSAGE: e}})

def updateAccounts(user, accounts):
    try:
        db.accounts.update_one({USER: user}, {"$set": {ACCOUNTS: accounts}}, upsert=True)
        return dumps({RESP: SUCCESS, DATA: {ACCOUNTS: accounts}})
    except Exception as e:
        return dumps({RESP: FAIL, DATA: {MESSAGE: e}})