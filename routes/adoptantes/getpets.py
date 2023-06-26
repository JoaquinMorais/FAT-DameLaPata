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
    data = []
    for i in pets:
        size_json = {
            'title':i.pet_size.title,
        }
        characteristics = []
        colors = []
        for x in i.pet_characteristics:
            characteristics.append(
                {
                    'titulo':x.characteristics_value.title,
                    'valor':x.characteristics_value.description
                }
            )
        for x in i.pet_colors:
            colors.append(
                {
                    'titulo':x.color_value.title,
                    'valor':x.color_value.description
                }
            )


        data.append(
            {
                'id':i.id_pet,
                'name':i.name,
                'birthdate':i.birth_date,
                'size':size_json,
                'caracteristics':characteristics,
                'colors':colors
            }
        )

    return jsonify(data)


