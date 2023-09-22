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
    data = Request('username','password', nullable=True)
    if not data:
        user = User.query.get(session['user_id'])
        if not user:
            return Response(
                'Error: User Not Found',
                404
            )
        return Response(
            user.json(),
            200
        ) 
    
    data = Request('username','password')
    user = User.query.filter_by(username = data['username']).first()
    if not user:
        return Response(
            'Error: User Not Found',
            404
        )
    user_password = Credencial.query.filter_by(id_user = user.getId()).first()
    if user_password.campo != Encrypt(data['password']): 
        return Response(
            f"Error: Unauthorized {user_password.campo} != {Encrypt(data['password'])}",
            401
        )
    session['user_id'] = user.id_user
    session.modified = True 
    print(session)
    return Response(
        user.json(),
        200
    )        

