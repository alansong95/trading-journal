from bson.json_util import dumps
from bson.objectid import ObjectId
import uuid

from constants import RESP, SUCCESS, FAIL, DATA, ACCOUNTS, MESSAGE, USER, TRADES, TRADE, ID, OID
import db_service
import util_service

db = db_service.get_db()

def getTrades(user):
    try:
        trades = list(db.trades.find({USER: user}))
        print(trades)
        if trades:
            return dumps({RESP: SUCCESS, DATA: {TRADES: trades}})
        return dumps({RESP: SUCCESS, DATA: {TRADES: []}})
    except Exception as e:
        return dumps({RESP: FAIL, DATA: {MESSAGE: e}})

def addTrade(user, trade):
    try:
        trade[USER] = user
        trade[ID] = util_service.generateId()
        db.trades.insert_one(trade)
        return dumps({RESP: SUCCESS})
    except Exception as e:
        return dumps({RESP: FAIL, DATA: {MESSAGE: e}})

def updateTrade(user, trade):
    try:
        db.trades.replace_one({ID: trade[ID]}, trade)
        return dumps({RESP: SUCCESS})
    except Exception as e:
        return dumps({RESP: FAIL, DATA: {MESSAGE: e}})

