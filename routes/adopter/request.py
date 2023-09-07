from flask import Blueprint,json,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User, Adopter, RelationShipPetColor, RelationShipPetCharacteristics, Pet, RequestPetAdopter
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.encrypt import Encrypt
from methods.response import Response
from methods.requests import Request, RequestList
from datetime import datetime
import pytz
import requests
from sqlalchemy import or_

AdopterRequest = Blueprint("AdopterRequest",__name__)



@AdopterRequest.route("/adopter/match",methods=['PUT'],endpoint = 'register_adopter')
@login_is_required(session, accepted_users=['adopter'])
def register_adopter():
    data = Request('id_state','id_pet',nullable=True)

    if not data:
        return Response(
            'Bad Request',
            400
        )

    actual_hour = datetime.now(pytz.timezone('America/Argentina/Buenos_Aires'))
    
    beforeRequest = RequestPetAdopter.query.filter(
        RequestPetAdopter.id_pet == int(data['id_pet']),
        RequestPetAdopter.id_user == int(session['user_id'])
    ).first()

    if beforeRequest:
        beforeRequest.edition_date = actual_hour
        beforeRequest.id_state = data['id_state']
        request = beforeRequest
    else:
        request = RequestPetAdopter(actual_hour,actual_hour,data['id_state'],session['user_id'],data['id_pet'])

        if not request:
            return Response(
                'Bad Request',
                400
            )
        db.session.add(request)

    db.session.commit()


    return Response(
        request.json(),
        200
    )



@AdopterRequest.route("/adopter/requests",methods=['GET'],endpoint = 'get_requests')
@login_is_required(session, accepted_users=['adopter'])
def get_requests():
    data = {
        **RequestList('id_pet','not_id_pet','id_shelter','not_id_shelter','color','characteristic','birth_date','weight','size',),
        **Request('gender','more_id_pet','less_id_pet','more_birth_date','less_birth_date','more_weight','less_weight','limit')
    }
    data_json = json.dumps(data)

    response = requests.get(url_for(
            'Pets.getPetsFilterby', 
            **data,
            id_only = 'true',
            _external=True             
        )
    )

    pets = response.json()['response']   
    
    pets_requests = RequestPetAdopter.query.filter(
        RequestPetAdopter.id_pet.in_(
            pets  
        )
    )
    
    
    return Response(
        [request.json() for request in pets_requests.all()],
        200
    )