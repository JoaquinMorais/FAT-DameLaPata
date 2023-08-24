from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import *
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.response import Response

PetInfoColors = Blueprint("PetInfoColors",__name__)

    



@PetInfoColors.route("/pets/info/colors",methods=['GET'])
def getColors():
    colors = Color.query.all()
    
    if not colors:
        return Response(
            'Error: Server Internal Error',
            404
        ) 
    
    return Response(
        [color.json() for color in colors],
        200
    )
    

