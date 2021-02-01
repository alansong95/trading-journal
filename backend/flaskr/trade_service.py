from bson.json_util import dumps
from constants import RESP, SUCCESS, FAIL, DATA, ACCOUNTS, MESSAGE, USER, TRADES, TRADE
import db_service

db = db_service.get_db()

def getTrades(user):
    try:
        trades = list(db.trades.find({USER: user}, {'_id': 0, USER: 0}))
        print(trades)
        if trades:
            return dumps({RESP: SUCCESS, DATA: {TRADES: trades}})
        return dumps({RESP: SUCCESS, DATA: {TRADES: []}})
    except Exception as e:
        return dumps({RESP: FAIL, DATA: {MESSAGE: e}})

def addTrade(user, trade):
    try:
        trade[USER] = user
        db.trades.insert_one(trade)
        return dumps({RESP: SUCCESS})
    except Exception as e:
        return dumps({RESP: FAIL, DATA: {MESSAGE: e}})