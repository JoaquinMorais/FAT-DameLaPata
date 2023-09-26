from flask import Blueprint,json,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User,State, Adopter, RelationShipPetColor, RelationShipPetCharacteristics, Pet, RequestPetAdopter
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
    

    pet = Pet.query.get(data['id_pet'])

    if not pet:
        return Response(
            'Bad Request pet doesnt exists',
            400
        )
    
    state = State.query.get(data['id_state'])

    if not state:
        return Response(
            'Bad Request state doesnt exists',
            400
        )
    

    actual_hour = datetime.now(pytz.timezone('America/Argentina/Buenos_Aires'))
    
    beforeRequest = RequestPetAdopter.query.filter(
        RequestPetAdopter.id_pet == int(data['id_pet']),
        RequestPetAdopter.id_user == int(session['user_id'])
    ).first()

    if beforeRequest:
        if beforeRequest.id_state == 2 and int(data['id_state']) != 3:
            befores_requests = RequestPetAdopter.query.filter(
                RequestPetAdopter.id_pet == int(data['id_pet']),
                RequestPetAdopter.id_user != int(session['user_id']),
                RequestPetAdopter.id_state == 6,
            ).all()
            for x in befores_requests:     
                x.id_state = 3
                x.edition_date = actual_hour
            
            
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

    if int(data['id_state']) == 1:
        befores_requests = RequestPetAdopter.query.filter(
            RequestPetAdopter.id_pet == int(data['id_pet']),
            RequestPetAdopter.id_user != int(session['user_id']),
            or_(
                RequestPetAdopter.id_state == 2,
                RequestPetAdopter.id_state == 3,
                RequestPetAdopter.id_state == 6,
            )
        ).all()
        for x in befores_requests:     
            x.id_state = 5
            x.edition_date = actual_hour

    elif int(data['id_state']) == 2:
        befores_requests = RequestPetAdopter.query.filter(
            RequestPetAdopter.id_pet == int(data['id_pet']),
            RequestPetAdopter.id_user != int(session['user_id']),
            RequestPetAdopter.id_state == 3
        ).all()

        for x in befores_requests:
            x.id_state = 6
            x.edition_date = actual_hour
    
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
        ),
        RequestPetAdopter.id_user == session['user_id']
    )

    data = {
        #**RequestList('id_user','not_id_user','id_state','not_id_state'),
        **RequestList('id_state','not_id_state','request_date','edition_date'),
        **Request('more_request_date','less_request_date','more_edition_date','less_edition_date','limit','id_only')
    }

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