from flask import Flask, request
from flask_cors import CORS
from json import loads

import account_service
import trade_service
from constants import ACCOUNTS, USER, TRADE

app = Flask(__name__)
CORS(app)

# accounts
@app.route('/accounts/get/<user>')
def getAccounts(user):
    return account_service.getAccounts(user)

@app.route('/accounts/update', methods=['POST'])
def updateAccounts():
    data = loads(request.data)
    accounts = data[ACCOUNTS]
    user = data[USER]
    return account_service.updateAccounts(user, accounts)

# trades
@app.route('/trades/get/<user>')
def getTrades(user):
    return trade_service.getTrades(user)

@app.route('/trade/add', methods=['POST'])
def addTrade():
    data = loads(request.data)
    trade = data[TRADE]
    user = data[USER]
    return trade_service.addTrade(user, trade)

app.run(host='0.0.0.0', port=5000)