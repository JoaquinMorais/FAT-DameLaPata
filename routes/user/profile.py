from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User, Adopter, Shelter, Address, Credencial, Volunteer
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.encrypt import Encrypt
from methods.response import Response

Profile = Blueprint("Profile",__name__)



@Profile.route("/profile",methods=['POST'], endpoint = 'profile')
@login_is_required(session)
def profile():
    user = User.query.get(session['user_id'])
    address_is_required = Request('address_is_required')
    
    if not user:
        return Response(
            'Error: User Not Found',
            404
        )
    
    if user.type == 'adopter':
        user = Adopter.query.get(user.id_user)
        return Response(
            user.json_location(),
            200
        )
    elif user.type == 'shelter':
        user = Shelter.query.get(user.id_user)
    elif user.type == 'volunteer':
        user = Volunteer.query.get(user.id_user)
    else:
        return Response(
            'Error: Type user doesnt exists',
            404
        )
    
    if not user:
        return Response(
            'Error: User Not Found',
            404
        )

    return Response(
        user.json_location(),
        200
    )
