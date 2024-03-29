import os
import pathlib

import requests
from flask import Blueprint, session, abort, redirect, request,url_for,jsonify,render_template
from flask_login import (UserMixin, login_required, login_user, logout_user, current_user)
from google.oauth2 import id_token
from google_auth_oauthlib.flow import Flow
from pip._vendor import cachecontrol
import google.auth.transport.requests

from models.models import User,Address,Credencial
from utils.db import db
from methods.requests import Request
from decorators.flask_decorators import login_is_required

GOOGLE_CLIENT_ID = "191643232132-e96g0rrr3soareb2fda05hep1db4ru6p.apps.googleusercontent.com"
client_secrets_file = os.path.join(pathlib.Path(__file__).parent, "../client_secret.json")

os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

flow = Flow.from_client_secrets_file(
    client_secrets_file=client_secrets_file,
    scopes = ["https://www.googleapis.com/auth/userinfo.profile","https://www.googleapis.com/auth/userinfo.email","openid"],
    redirect_uri = 'http://127.0.0.1:5000/callback',
)


Login_Google = Blueprint("Login_Google",__name__)







@Login_Google.route("/protected_area",endpoint = 'ProtectedArea')
@login_is_required(session)
def ProtectedArea():
    return f"Hello {session['name']}! <br/> <a href='/logout'><button>Logout</button></a>"


@Login_Google.route("/google_login")
def Login():
    autorization_url,state = flow.authorization_url()
    session['state'] = state
    return redirect(autorization_url)




@Login_Google.route("/callback")
def callback():
    flow.fetch_token(authorization_response=request.url)

    try:
        if not session["state"] == request.args["state"]:
            abort(500)  # State does not match!
    except:
        pass

    credentials = flow.credentials
    request_session = requests.session()
    cached_session = cachecontrol.CacheControl(request_session)
    token_request = google.auth.transport.requests.Request(session=cached_session)

    id_info = id_token.verify_oauth2_token(
        id_token=credentials._id_token,
        request=token_request,
        audience=GOOGLE_CLIENT_ID
    )

    user_google_id = Credencial.query.filter_by(campo = id_info.get("sub")).first()

    print(user_google_id)
    if user_google_id:
        user = User.query.filter_by(id_user = user_google_id.id_user).first()
        session['user_id'] = user.getId()
        return redirect(url_for('Login.profile'))
    else: 
        

        user = User(id_info.get("name"),id_info.get("email"),None)
            
        db.session.add(user)
        db.session.commit()
            
        google_id = Credencial('google_id',id_info.get("sub"),'google',user.getId())
        db.session.add(google_id)

        db.session.commit()

        session['user_id'] = user.getId()
    
        return redirect(url_for('Login_Google.googleAddress'))


@Login_Google.route("/google_login/register-address",methods=['GET','POST'])
def googleAddress():
    if request.method == 'POST':
        form = Request('province','city','district')

        address = Address(form['province'],form['city'],form['district'],'1','1')
        db.session.add(address)
        db.session.commit()

        user = User.query.filter_by(id_user = session['user_id']).first()
        user.id_address = address.id_address
        db.session.commit()
        return redirect(url_for('Login.profile'))
        
    return render_template('login/address.html')