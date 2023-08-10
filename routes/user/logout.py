from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User, Adopter, Shelter, Address, Credencial
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.encrypt import Encrypt

Logout = Blueprint("Logout",__name__)


@Logout.route("/logout",methods=['POST'])
def logout():
    session.pop('user_id',None)
    #return redirect(f"https://accounts.google.com/o/oauth2/v2.0/logout?post_logout_redirect_uri={url_for('Login_Google.Home')}")

    return "200"