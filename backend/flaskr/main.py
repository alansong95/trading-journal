from flask import Flask
from flask_cors import CORS

import account

app = Flask(__name__)
CORS(app)

@app.route('/accounts/get')
def getAccounts():
    return account.getAccounts()


app.run(host='0.0.0.0', port=5000)