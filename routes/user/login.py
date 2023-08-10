from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User, Adopter, Shelter, Address, Credencial
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.encrypt import Encrypt

Login = Blueprint("Login",__name__)



@Login.route("/login",methods=['POST'])
def login_user():
    session.pop('user_id',None)
    data = Request('username','password')

    user = User.query.filter_by(username = data['username']).first()

    if not user:
        return jsonify({"error":"Unauthorized"}),401
    
    user_password = Credencial.query.filter_by(id_user = user.getId()).first()
        
    if user_password.campo != Encrypt(data['password']): 
        return jsonify({"error":"Unauthorized"}),401
    
    session['user_id'] = user.id_user
    return jsonify({
        'user_id' : session['user_id'],
        'username' : user.username,
        'password' : user_password.campo,
        'email' : user.email,

    })


@Login.route("/logout",methods=['POST'])
def logout():
    session.pop('user_id',None)
    #return redirect(f"https://accounts.google.com/o/oauth2/v2.0/logout?post_logout_redirect_uri={url_for('Login_Google.Home')}")

    return "200"