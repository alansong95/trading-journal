from json import dumps
from constants import RESP, SUCCESS, DATA, ACCOUNTS

_accounts = []

def getAccounts():
    return dumps({RESP: SUCCESS, DATA: {ACCOUNTS: _accounts}})

def saveAccounts(accounts):
    _accounts = accounts
    return dumps({RESP: SUCCESS, DATA: {ACCOUNTS: _accounts}})