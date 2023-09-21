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
    
    id_pets = response['response']   

    pets = Pet.query.filter(
        Pet.id_pet.in_(
            id_pets
        )
    )
    data = {
        **RequestList('id_adopter','not_id_adopter'),
        **RequestList('id_state','not_id_state','request_date','edition_date'),
        **Request('more_request_date','less_request_date','more_edition_date','less_edition_date','limit','id_only')
    }

    return Response(
        [pet.requests(data = data) for pet in pets.all()],
        200
    )
    
    