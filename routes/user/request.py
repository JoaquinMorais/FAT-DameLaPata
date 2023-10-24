from flask import Blueprint,json,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User, Adopter, RelationShipPetColor, RelationShipPetCharacteristics, Pet, RequestPetAdopter
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.encrypt import Encrypt
from methods.response import Response
from methods.requests import Request, RequestList, getRequestSession
from datetime import datetime
import pytz
import requests
from sqlalchemy import or_,and_, extract, func

UserRequest = Blueprint("UserRequest",__name__)


@UserRequest.route("/user/requests",methods=['GET'],endpoint = 'get_requests')
@login_is_required(session, accepted_users=['adopter','shelter','volunteer'])
def get_requests():
    user = User.query.get(session['user_id'])
    data = {
        **RequestList('id_pet','not_id_pet','id_shelter','not_id_shelter','color','characteristic','birth_date','weight','size',),
        **Request('gender','more_id_pet','less_id_pet','more_birth_date','less_birth_date','more_weight','less_weight','limit'),
        
        **RequestList('id_state','not_id_state','request_date','edition_date'),
        **Request('more_request_date','less_request_date','more_edition_date','less_edition_date','limit','id_only'),

        **RequestList('id_adopter','not_id_adopter'),
        **RequestList('id_shelter','not_id_shelter'),
    }

    
    if not user:
        return Response(
            'Error: User Not Found',
            404
        )
    
    if user.type == 'adopter':
        response = getRequestSession().get(
            url_for(
                'AdopterRequest.get_requests',
                **data,
                _external=True
            ), cookies=request.cookies
        ).json()
    elif user.type == 'shelter':

        response = getRequestSession().get(
        url_for(
            'ShelterRequest.get_requests',
            **data,
            _external=True
        ), cookies=request.cookies
    ).json()
    else:
        response = 'en proceso'
    return response

        
