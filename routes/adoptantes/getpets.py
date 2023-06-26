from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User, Adoptante, Address, Credencial, Pet
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request




Adoptante_getPets = Blueprint("Adoptante_getPets",__name__)




  
@Adoptante_getPets.route("/adoptante/getPet",methods=['POST'], endpoint = 'profile')
@login_is_required
def getPets():
    pets = Pet.query.all()


    return jsonify({
        'data' : [{
            'id_pet' : x.id_pet,
            'name' : x.name,
            'birthdate' : x.birth_date,
            'pet_size' : None,
            'pet_color':[z for z in [
                #PONER TODAS LOS COLORES QUE TENGA
            ]],
        } for x in pets]
    })


