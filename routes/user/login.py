from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User, Adopter, Shelter, Address, Credencial
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.encrypt import Encrypt
from methods.response import Response

Login = Blueprint("Login",__name__)



@Login.route("/login",methods=['POST'])
def login_user():
    session.pop('user_id',None)
    data = Request('username','password')

    user = User.query.filter_by(username = data['username']).first()

    if not user:
        return Response(
            'Error: Unauthorized',
            401
        )
    
    user_password = Credencial.query.filter_by(id_user = user.getId()).first()
        
    if user_password.campo != Encrypt(data['password']): 
        return Response(
            'Error: Unauthorized',
            401
        )
    
    session['user_id'] = user.id_user
    return Response(
        user.json(),
        200
    )

