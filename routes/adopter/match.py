from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User, Adopter, Shelter, Address, Credencial, RequestPetAdopter
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.encrypt import Encrypt
from methods.response import Response
from methods.requests import Request, RequestList
from datetime import datetime
import pytz

AdopterMatch = Blueprint("AdopterMatch",__name__)



@AdopterMatch.route("/adopter/match",methods=['PUT'],endpoint = 'register_adopter')
@login_is_required(session, accepted_users=['adopter'])
def register_adopter():
    data = Request('id_state','id_pet')
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
        