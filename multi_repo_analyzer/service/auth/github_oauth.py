import os
import requests
from urllib.parse import urlencode

GITHUB_CLIENT_ID = os.environ.get("GITHUB_CLIENT_ID")
GITHUB_CLIENT_SECRET = os.environ.get("GITHUB_CLIENT_SECRET")
GITHUB_REDIRECT_URI = os.environ.get("GITHUB_REDIRECT_URI", "http://localhost:5173/auth/callback")

def get_auth_url(state: str):
    params = {
        "client_id": GITHUB_CLIENT_ID,
        "redirect_uri": GITHUB_REDIRECT_URI,
        "scope": "read:user user:email repo",
        "state": state,
    }
    return f"https://github.com/login/oauth/authorize?{urlencode(params)}"

def get_token(code: str):
    data = {
        "client_id": GITHUB_CLIENT_ID,
        "client_secret": GITHUB_CLIENT_SECRET,
        "code": code,
        "redirect_uri": GITHUB_REDIRECT_URI,
    }
    headers = {"Accept": "application/json"}
    response = requests.post("https://github.com/login/oauth/access_token", data=data, headers=headers)
    response.raise_for_status()
    return response.json()

def get_user_info(access_token: str):
    headers = {
        "Authorization": f"token {access_token}",
        "Accept": "application/json",
    }
    response = requests.get("https://api.github.com/user", headers=headers)
    response.raise_for_status()
    return response.json()
