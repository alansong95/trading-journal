from flask import Flask, request
from flask_cors import CORS
from json import loads

import account
from constants import ACCOUNTS

app = Flask(__name__)
CORS(app)

# accounts
@app.route('/accounts/get')
def getAccounts():
    return account.getAccounts()

@app.route('/accounts/save', methods=['POST'])
def saveAccounts():
    data = loads(request.data)
    accounts = data[ACCOUNTS]
    return account.saveAccounts(accounts)

app.run(host='0.0.0.0', port=5000)