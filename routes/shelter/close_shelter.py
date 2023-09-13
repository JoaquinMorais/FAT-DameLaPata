from flask import Blueprint
from models.models import Shelter
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.encrypt import Encrypt
from methods.response import Response

Close_shelter = Blueprint("Close_shelter",__name__)

@Close_shelter.route("/closeshelter/<int:id_shelter>",methods=['POST'])
#@login_is_required(session)

def close_shelter(id_shelter):
    shelter = User.query.filter(Shelter.id_shelter == id_shelter).first()
    if shelter: 
        if shelter.id_status != 2:
            shelter.id_status = 2
            db.session.commit()
            return 'sos el mas dou'
        else:
            return 'La cuenta ya ha sido cerrada...'
    else:
        return Response(
            'Error: bad Request',
            400
        )