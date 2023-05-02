import os
import pathlib

import requests
from flask import Blueprint, session, abort, redirect, request,url_for
from google.oauth2 import id_token
from google_auth_oauthlib.flow import Flow
from pip._vendor import cachecontrol
import google.auth.transport.requests

from models.users import User
from utils.db import db

GOOGLE_CLIENT_ID = "191643232132-e96g0rrr3soareb2fda05hep1db4ru6p.apps.googleusercontent.com"
client_secrets_file = os.path.join(pathlib.Path(__file__).parent, "../client_secret.json")

os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

flow = Flow.from_client_secrets_file(
    client_secrets_file=client_secrets_file,
    scopes = ["https://www.googleapis.com/auth/userinfo.profile","https://www.googleapis.com/auth/userinfo.email","openid"],
    redirect_uri = 'http://127.0.0.1:5000/callback',
)


Login_Google = Blueprint("Login_Google",__name__)

def login_is_required(function):
    def wrapper(*args, **kwargs):
        if "google_id" not in session:
            return abort(401) #Autorization Required
        else:
            return function()
    return wrapper



@Login_Google.route("/")
def Home():
    return "Home <a href='/login'><button>Login</button></a>"


@Login_Google.route("/protected_area",endpoint = 'ProtectedArea')
@login_is_required
def ProtectedArea():
    return f"Hello {session['name']}! <br/> <a href='/logout'><button>Logout</button></a>"


@Login_Google.route("/login")
def Login():
    autorization_url,state = flow.authorization_url()
    session['state'] = state
    return redirect(autorization_url)


@Login_Google.route("/logout")
def Logout():
    session.clear()
    return redirect(url_for('Login_Google.Home'))

@Login_Google.route("/callback")
def callback():
    flow.fetch_token(authorization_response=request.url)

    if not session["state"] == request.args["state"]:
        abort(500)  # State does not match!

    credentials = flow.credentials
    request_session = requests.session()
    cached_session = cachecontrol.CacheControl(request_session)
    token_request = google.auth.transport.requests.Request(session=cached_session)

    id_info = id_token.verify_oauth2_token(
        id_token=credentials._id_token,
        request=token_request,
        audience=GOOGLE_CLIENT_ID
    )
    session["google_id"] = id_info.get("sub")
    session["name"] = id_info.get("name")
    return redirect("/protected_area")


