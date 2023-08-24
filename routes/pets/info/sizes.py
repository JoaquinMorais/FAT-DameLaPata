from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import *
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.response import Response

PetInfoSizes = Blueprint("PetInfoSizes",__name__)

    



@PetInfoSizes.route("/pets/info/sizes",methods=['GET'])
def getSizes():
    sizes = Size.query.all()
    
    if not sizes:
        return Response(
            'Error: Server Internal Error',
            404
        ) 
    
    return Response(
        [size.json() for size in sizes],
        200
    )
    

