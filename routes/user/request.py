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
from sqlalchemy import or_,and_, extract, func

UserRequest = Blueprint("UserRequest",__name__)


@UserRequest.route("/user/requests",methods=['GET'],endpoint = 'get_requests')
@login_is_required(session, accepted_users=['adopter','shelter','volunteer'])
def get_requests():
    user = User.query.get(session['user_id'])
    data = {
        **RequestList('id_pet','not_id_pet','id_shelter','not_id_shelter','color','characteristic','birth_date','weight','size',),
        **Request('gender','more_id_pet','less_id_pet','more_birth_date','less_birth_date','more_weight','less_weight','limit')
    }
    if not user:
        return Response(
            'Error: User Not Found',
            404
        )
    
    pets_requests = RequestPetAdopter.query

    if user.type == 'adopter':
        data['id_adopter'] = None
        data['not_id_adopter'] = None

        response = requests.get(url_for(
                'Pets.getPetsFilterby', 
                **data,
                id_only = 'true',
                _external=True             
            )
        )
        filters = [RequestPetAdopter.id_user == session['user_id']]
        
    else:
        data['id_shelter'] = session['user_id']
        data['not_id_shelter'] = None
        response = requests.get(url_for(
                'Pets.getPetsFilterby', 
                **data,
                id_only = 'true',
                _external=True             
            )
        )
        filters = []

    pets = response.json()['response']   
    
    pets_requests = pets_requests.filter(
        RequestPetAdopter.id_pet.in_(
            pets  
        ),
        
    )
    pets_requests = pets_requests.filter(
        *filters
    ) 

    
    data = {
        **RequestList('id_adopter','not_id_adopter'),
        **RequestList('id_state','not_id_state','request_date','edition_date'),
        **Request('more_request_date','less_request_date','more_edition_date','less_edition_date','limit','id_only')
    }

    if user.type == 'adopter':
        data['id_adopter'] = None
        data['not_id_adopter'] = None

    if data['id_adopter']:
        if len(data['id_adopter']) == 1:
            pets_requests = pets_requests.filter(
                RequestPetAdopter.id_user == data['id_adopter']
            )
        else:
            id_filters = [RequestPetAdopter.id_user == id for id in data['id_adopter']]
            pets_requests = pets_requests.filter(or_(*id_filters))  # Aplicar condiciones OR
    
    if data['not_id_adopter']:
        if len(data['not_id_adopter']) == 1:
            pets_requests = pets_requests.filter(
                RequestPetAdopter.id_user != data['not_id_adopter']
            )
        else:
            id_filters = [RequestPetAdopter.id_user != id for id in data['not_id_adopter']]
            pets_requests = pets_requests.filter(*id_filters)  # Aplicar condiciones OR
    

    if data['id_state']:
        if len(data['id_state']) == 1:
            pets_requests = pets_requests.filter(
                RequestPetAdopter.id_state == data['id_state']
            )
        else:
            id_filters = [RequestPetAdopter.id_state == id for id in data['id_state']]
            pets_requests = pets_requests.filter(or_(*id_filters))  # Aplicar condiciones OR
    
    if data['not_id_state']:
        if len(data['not_id_state']) == 1:
            pets_requests = pets_requests.filter(
                RequestPetAdopter.id_state != data['not_id_state']
            )
        else:
            id_filters = [RequestPetAdopter.id_state != id for id in data['not_id_state']]
            pets_requests = pets_requests.filter(*id_filters)  # Aplicar condiciones OR
    


    if data['request_date']:
        date = data['request_date']
        if len(data['request_date']) == 1:
            pets_requests = pets_requests.filter(
                func.date(RequestPetAdopter.request_date) == data['request_date']
            )
        else:
            dates = [func.date(RequestPetAdopter.request_date) == date for date in data['request_date']]
            pets_requests = pets_requests.filter(or_(*dates))  # Aplicar condiciones OR
    

    if data['more_request_date']:
        pets_requests = pets_requests.filter(
            func.date(RequestPetAdopter.request_date) >= data['more_request_date']
        )
    
    if data['less_request_date']:
        pets_requests = pets_requests.filter(
            func.date(RequestPetAdopter.request_date) <= data['less_request_date']
        )
    

    
    if data['edition_date']:
        date = data['edition_date']
        if len(data['edition_date']) == 1:
            pets_requests = pets_requests.filter(
                func.date(RequestPetAdopter.edition_date) == data['edition_date']
            )
        else:
            dates = [func.date(RequestPetAdopter.edition_date) == date for date in data['edition_date']]
            pets_requests = pets_requests.filter(or_(*dates))  # Aplicar condiciones OR
    

    if data['more_edition_date']:
        pets_requests = pets_requests.filter(
            func.date(RequestPetAdopter.edition_date) >= data['more_edition_date']
        )
    
    if data['less_edition_date']:
        pets_requests = pets_requests.filter(
            func.date(RequestPetAdopter.edition_date) <= data['less_edition_date']
        )

    if data['id_only'] == 'true':
        return Response(
            [request.id_request for request in pets_requests.all()],
            200
        )
    return Response(
        [request.json() for request in pets_requests.all()],
        200
    )