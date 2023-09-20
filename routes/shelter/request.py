from flask import Blueprint,json,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User,State, Adopter, RelationShipPetColor, RelationShipPetCharacteristics, Pet, RequestPetAdopter
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

ShelterRequest = Blueprint("ShelterRequest",__name__)



@ShelterRequest.route("/shelter/requests",methods=['GET'],endpoint = 'get_requests')
@login_is_required(session, accepted_users=['shelter'])
def get_requests():
    data = {
        **RequestList('id_pet','not_id_pet','color','characteristic','birth_date','weight','size',),
        **Request('gender','more_id_pet','less_id_pet','more_birth_date','less_birth_date','more_weight','less_weight','limit')
    }

    response_my_session = getRequestSession().get(
        url_for(
            'Pets.getPets',
            limit = data['limit'],
            id_only= True,
            _external=True
        ), cookies=request.cookies
    ).json()
    
    if not data['id_pet']:
        data['id_pet'] =  response_my_session['response']
    else:
        news_ids = []
        for i in data['id_pet']:
            if int(i) in response_my_session['response']:
                news_ids.append(i)
        if not news_ids:
            data['id_pet'] =  response_my_session['response']
        else:
            data['id_pet'] = news_ids

    response = getRequestSession().get(
        url_for(
            'Pets.getPetsFilterby',
            id_only= True,
            **data,
            _external=True
        ), cookies=request.cookies
    ).json()
    return response

    pets = response['response']   
    return pets
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