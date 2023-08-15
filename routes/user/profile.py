from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User, Adopter, Shelter, Address, Credencial
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.encrypt import Encrypt
from methods.response import Response

Profile = Blueprint("Profile",__name__)



@Profile.route("/profile",methods=['POST'], endpoint = 'profile')
@login_is_required(session)
def profile():
    user = User.query.filter_by(id_user = session['user_id']).first()
    
    if not user:
        return Response(
            'Error: User Not Found',
            404
        )
    
    return Response(
        user.json(),
        200
    )
