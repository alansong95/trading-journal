from flask import Flask, request
from flask_cors import CORS
from json import loads

import account
from constants import ACCOUNTS, USER

app = Flask(__name__)
CORS(app)

# accounts
@app.route('/accounts/get/<user>')
def getAccounts(user):
    return account.getAccounts(user)

@app.route('/accounts/save', methods=['POST'])
def saveAccounts():
    data = loads(request.data)
    accounts = data[ACCOUNTS]
    user = data[USER]
    return account.saveAccounts(user,accounts)

app.run(host='0.0.0.0', port=5000)