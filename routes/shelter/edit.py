from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User, Adopter, Shelter, Address, Credencial
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.encrypt import Encrypt
from methods.response import Response
from methods.requests import Request

ShelterEdit = Blueprint("ShelterEdit",__name__)
  
@ShelterEdit.route("/shelter/edit",methods=['POST'],endpoint = 'edit_shelter')
@login_is_required(session, accepted_users=['shelter'])
def edit_shelter():
    
    data_shelter = Request('username',"email",'name')
    data_address = Request('province','city','district','street')
    data_password = Request('password')



    user = Shelter.query.get(session['user_id'])
    address = Address.query.get(user.id_address)
    credetials = Credencial.query.filter_by(
        id_user = user.id_user,
        campo = 'password'
    ).first()
    
    for index, value in data_shelter.items():
        if value:
            setattr(user, index, value)

    for index, value in data_address.items():
        if value:
            setattr(address, index, value)

    if credetials and data_password:
        credetials.campo = Encrypt(data_password)
    
    db.session.commit()

    return Response(
        user.json(),
        200
    )
        