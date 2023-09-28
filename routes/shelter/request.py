from flask import Blueprint,json,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User,State, Adopter, RelationShipPetColor, RelationShipPetCharacteristics, Pet, RequestPetAdopter
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.encrypt import Encrypt
from methods.response import Response
from methods.requests import Request, RequestList, getRequestSession
from datetime import datetime
from flask_mail import Message
from utils.mail import sendmessage
import pytz
import requests
from sqlalchemy import or_,and_, extract, func

ShelterRequest = Blueprint("ShelterRequest",__name__)


@ShelterRequest.route("/shelter/match",methods=['PUT'],endpoint = 'shelter_request_pet_adopter')
@login_is_required(session, accepted_users=['shelter'])
def shelter_request_pet_adopter():
    data = Request('id_state','id_pet','id_adopter',nullable=True)

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
    
    adopter = Adopter.query.get(data['id_adopter'])

    if not adopter:
        return Response(
            'Bad Request adopter doesnt exists',
            400
        )
    
    if state.id_state in [3,4,7]:
        return Response(
            'Shelter cant do this',
            400
        )


    shelter = Shelter.query.get(pet.id_shelter)

    actual_hour = datetime.now(pytz.timezone('America/Argentina/Buenos_Aires'))
    
    beforeRequest = RequestPetAdopter.query.filter(
        RequestPetAdopter.id_pet == int(data['id_pet']),
        RequestPetAdopter.id_user == int(data['id_adopter'])
    ).first()

    if beforeRequest:
        if beforeRequest.id_state == 2 and int(data['id_state']) != 3:
            befores_requests = RequestPetAdopter.query.filter(
                RequestPetAdopter.id_pet == int(data['id_pet']),
                RequestPetAdopter.id_user != int(data['id_adopter']),
                RequestPetAdopter.id_state == 6,
            ).all()
            for x in befores_requests:     
                x.id_state = 3
                x.edition_date = actual_hour
            
            
        beforeRequest.edition_date = actual_hour
        beforeRequest.id_state = data['id_state']
        request = beforeRequest
        
    else:
        request = RequestPetAdopter(actual_hour,actual_hour,data['id_state'],data['id_adopter'],data['id_pet'])

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
            RequestPetAdopter.id_user != int(data['id_adopter']),
            or_(
                RequestPetAdopter.id_state == 2,
                RequestPetAdopter.id_state == 3,
                RequestPetAdopter.id_state == 6,
            )
        ).all()
        for x in befores_requests:     
            x.id_state = 5
            x.edition_date = actual_hour
        
        message = Message(
            '¡Mascota Adoptada!',
            recipients = [
                adopter.email,
                shelter.email
            ] 
        )
        message.body = '¡Mascota Adoptada!'
        message.html = f"¡¡La mascota {pet.name} fue adoptada con exito!!"
            
        final_message = sendmessage(message)

    elif int(data['id_state']) == 2:
        befores_requests = RequestPetAdopter.query.filter(
            RequestPetAdopter.id_pet == int(data['id_pet']),
            RequestPetAdopter.id_user != int(data['id_adopter']),
            RequestPetAdopter.id_state == 3
        ).all()

        for x in befores_requests:
            x.id_state = 6
            x.edition_date = actual_hour

        message = Message(
            '¡Tu solicitud de Mascota fue aceptada!',
            recipients = [adopter.email] 
        )
        message.body = '¡Tu solicitud de Mascota fue aceptada!'
        message.html = f"Fue aprobada la solicitud de la mascota {pet.name}. Estas a un paso de terminar la adopcion"
            
        final_message = sendmessage(message)

    db.session.commit()

    return Response(
        request.json(),
        200
    )



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
    
    