from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User, Adopter, Shelter, Address, Credencial
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.encrypt import Encrypt
from methods.response import Response
from methods.requests import Request, RequestList

AdopterMatch = Blueprint("AdopterMatch",__name__)



@AdopterMatch.route("/adopter/match",methods=['PUT'],endpoint = 'register_adopter')
@login_is_required(session, accepted_users=['adopter'])
def register_adopter():
    
    adopter = Adopter.query.get(session['user_id'])
    return Response(
        adopter.json(),
        200
    )
        