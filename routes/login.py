from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User, Adoptante, Address, Credencial
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.encrypt import Encrypt



Login = Blueprint("Login",__name__)




  
@Login.route("/register",methods=['POST'],endpoint = 'register_user')
def register_user():
    session.pop('user_id',None)
    
    data = Request('username','password','province','city','district')

    users = User.query.filter_by(username = data['username']).all()
        
    if users:
        return jsonify({"error":"User already exists"}), 409
        
    address = Address(data['province'],data['city'],data['district'],'1','1')
    db.session.add(address)
    db.session.commit()
    
    user = User(data['username'],f'{ data["username"] }@gmail.com',address.id_address)
            
    db.session.add(user)
    db.session.commit()
            
    user_password = Credencial('password',Encrypt(data['password']) ,'normal',user.getId())
    db.session.add(user_password)

    db.session.commit()

    session['user_id'] = user.getId()
    
    return jsonify({
        'id':session['user_id'],
        'email' : user.email,
    })
        

@Login.route("/login",methods=['GET','POST'])
def login():
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
        

@Login.route("/profile",methods=['POST'], endpoint = 'profile')
@login_is_required
def profile():
    user = User.query.filter_by(id_user = session['user_id']).first()
    
    if not user:
        return jsonify({"error":"User dont exists"}), 409
    
    return jsonify({
        'id' : user.id_user,
        'username' : user.username
    })


@Login.route("/logout")
def Logout():
    if 'user_id' in session:
        return jsonify({"error":"User dont exists"}), 409 

    session.pop('user_id',None)
    #return redirect(f"https://accounts.google.com/o/oauth2/v2.0/logout?post_logout_redirect_uri={url_for('Login_Google.Home')}")

    return 