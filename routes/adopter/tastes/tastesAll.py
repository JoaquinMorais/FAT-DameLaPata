from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import *
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request, RequestList
from methods.response import Response
from utils.requests_flask import requests_flask
import requests

AdopterTastesAll = Blueprint("AdopterTastesAll",__name__)

@AdopterTastesAll.route("/session",methods=['GET'],endpoint = 'getSession')
def getSession():
    
    return Response(
        {x:session[x] for x in session},
        200
    )

@AdopterTastesAll.route("/adopter/tastes",methods=['GET'],endpoint = 'getTaste')
@login_is_required(session)
def getTaste():
    session_requests = requests.Session()

    tastesSizes = RelationShipUserSize.query.filter(
        RelationShipUserSize.id_user == session['user_id']
    )
    """
    response = requests.get(url_for(
            'Pets.getPetsFilterby', 
            **data,
            id_only = 'true',
            _external=True             
        )
    )"""
    responseColors = session_requests.get(
        url_for(
            'AdopterTastesColors.getTasteColors',
            _external=True
        ), cookies=request.cookies
    ).json()
    
    responseSizes = session_requests.get(
        url_for(
            'AdopterTastesSizes.getTasteSizes',
            _external=True
        ), cookies=request.cookies
    ).json()

    if responseColors['status'] != 200 or responseSizes['status'] != 200:
        return Response(
            f"error {responseColors['status']} or {responseSizes['status']}",
            404
        )

    return Response(
        {
            'colors':responseColors['response'],
            'sizes':responseSizes['response']
        },
        200
    )


@AdopterTastesAll.route("/adopter/tastes",methods=['PUT'],endpoint = 'putTaste')
@login_is_required(session)
def putTaste():
    id_size = Request('id_size')
    
    size = Size.query.get(id_size)
    if not size:
        return Response(
            'Bad Request size not found',
            400
        )
    
    before_tasteSize = RelationShipUserSize.query.filter(
        RelationShipUserSize.id_size == id_size,
        RelationShipUserSize.id_user == session['user_id']
    ).first()
    if before_tasteSize:
        return Response(
            'This size had already been added previously ',
            200
        )
    
    tasteSize = RelationShipUserSize(session['user_id'],id_size)
    if not tasteSize:
        return Response(
            'Bad Request cant create taste size',
            404
        )
    db.session.add(
        tasteSize
    )
    db.session.commit()


    return Response(
        tasteSize.size(),
        200
    )

@AdopterTastesAll.route("/adopter/tastes",methods=['DELETE'],endpoint = 'deleteTaste')
@login_is_required(session)
def deleteTaste():
    id_size = Request('id_size')
    
    size = Size.query.get(id_size)
    if not size:
        return Response(
            'Bad Request size not found',
            400
        )
    
    tasteSize = RelationShipUserSize.query.filter(
        RelationShipUserSize.id_size == id_size,
        RelationShipUserSize.id_user == session['user_id']
    ).first()

    if not tasteSize:
        return Response(
            'Bad Request. This taste doesnt exists',
            400
        )
    
    db.session.delete(tasteSize)
    db.session.commit()

    return Response(
        'Successful',
        200
    )
