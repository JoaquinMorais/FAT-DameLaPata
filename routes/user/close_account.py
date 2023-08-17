from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User, Adopter, Shelter, Address, Credencial
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.encrypt import Encrypt
from methods.response import Response

Close_account = Blueprint("Close_account",__name__)

@Close_account.route("/closeaccount/<int:id_user>",methods=['POST'])
#@login_is_required(session)
def close_account(id_user):
    user = User.query.filter(User.id_user == id_user).first()
    if user: 
        if user.id_status != 2:
            user.id_status = 2
            db.session.commit()
            return 'sos el mas dou'
        else:
            return 'La cuenta ya ha sido cerrada...'
    else:
        return Response(
            'Error: bad Request',
            400
        )
    
