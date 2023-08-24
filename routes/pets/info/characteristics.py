from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import *
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.response import Response

PetInfoCharacteristics = Blueprint("PetInfoCharacteristics",__name__)

    



@PetInfoCharacteristics.route("/pets/info/characteristics",methods=['GET'])
def getCharacteristics():
    characteristics = Characteristics.query.all()
    
    if not characteristics:
        return Response(
            'Error: Server Internal Error',
            404
        ) 
    
    return Response(
        [characteristic.json() for characteristic in characteristics],
        200
    )