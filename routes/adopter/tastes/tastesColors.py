from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import *
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request, RequestList
from methods.response import Response
import requests
AdopterTastesColors = Blueprint("AdopterTastesColors",__name__)



@AdopterTastesColors.route("/adopter/tastes/colors",methods=['GET'],endpoint = 'getTasteColors')
@login_is_required(session)
def getTasteColors():
    
    
    tastesColors = RelationShipUserColor.query.filter(
        RelationShipUserColor.id_user == session['user_id']
    )
    
    
    return Response(
        [tasteColor.color() for tasteColor in tastesColors],
        200
    )


@AdopterTastesColors.route("/adopter/tastes/colors",methods=['PUT'],endpoint = 'putTasteColors')
@login_is_required(session)
def putTasteColors():
    id_colors = RequestList('id_color')
    
    if not id_colors:
        return Response(
                'Bad Request color not found',
                400
            )
    
    if len(id_colors) == 1:
        id_colors = [id_colors]
    response = [

    ]
    for id_color in id_colors:
        color = Color.query.get(id_color)
        if not color:
            
            response.append(f'Bad Request color not found {id_color}')
            
    
        before_tasteColor = RelationShipUserColor.query.filter(
            RelationShipUserColor.id_color == id_color,
            RelationShipUserColor.id_user == session['user_id']
        ).first()
        if before_tasteColor:
            response.append('This color had already been added previously ')
        
        tasteColor = RelationShipUserColor(session['user_id'],id_color)
        if not tasteColor:
            response.append('Bad Request cant create taste color')
        db.session.add(
            tasteColor
        )
    db.session.commit()


    return Response(
        tasteColor.json(),
        200
    )

@AdopterTastesColors.route("/adopter/tastes/colors",methods=['DELETE'],endpoint = 'deleteTasteColors')
@login_is_required(session)
def deleteTasteColors():
    id_color = Request('id_color')
    
    color = Color.query.get(id_color)
    if not color:
        return Response(
            'Bad Request color not found',
            400
        )
    
    tasteColor = RelationShipUserColor.query.filter(
        RelationShipUserColor.id_color == id_color,
        RelationShipUserColor.id_user == session['user_id']
    ).first()

    if not tasteColor:
        return Response(
            'Bad Request. This taste doesnt exists',
            400
        )
    
    db.session.delete(tasteColor)
    db.session.commit()

    return Response(
        'Successful',
        200
    )
