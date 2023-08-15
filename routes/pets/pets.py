from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import *
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request


Pets = Blueprint("Pets",__name__)

@Pets.route("/pets",methods=['GET'])
#@login_is_required(session)
def getPets():
    limit = Request('limit')
    if limit:
        pets = Pet.query.limit(int(limit)).all()
    else:
        pets = Pet.query.all()
    if not pets:
        return Response(
            'Error: Pet Not Found',
            404
        )


    return Response(
        [pet.json() for pet in pets],
        200
    )



@Pets.route("/pets/all",methods=['GET'])
def getPetsAll():
    limit = Request('limit')
    if limit:
        pets = Pet.query.limit(int(limit)).all()
    else:
        pets = Pet.query.all()
    if not pets:
        return Response(
            'Error: Pets Not Found',
            404
        )


    return Response(
        [pet.json() for pet in pets],
        200
    )



@Pets.route("/pets/filterby",methods=['GET'])
def getPetsFilterby():
    
    return Response(
        'In progress',
        200
    )