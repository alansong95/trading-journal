from json import dumps
from constants import RESP, SUCCESS, DATA, ACCOUNTS
accounts = []

def getAccounts():
    return dumps({RESP: SUCCESS, DATA: {ACCOUNTS: accounts}})