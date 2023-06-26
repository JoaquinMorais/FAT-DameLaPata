from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User, Adoptante, Address, Credencial, Pet
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request

Adoptante_getPets = Blueprint("Adoptante_getPets",__name__)

 
@Adoptante_getPets.route("/adoptante/getpets",methods=['POST'], endpoint = 'getPets')
@login_is_required
def getPets():
    pets = Pet.query.all()
    
    return jsonify(
        [
            {
                'id':pet.id_pet,
                'name' : pet.name,
                'birthdate' : pet.birth_date,
                'size' : pet.pet_size.title,
                'colors' : [
                    x.getTitleColor() for x in pet.pet_colors
                ],
                'characteristics' : [
                    {
                        'title':x.getTitleCharacteristics(),
                        'description' : x.getDescriptionCharacteristics()
                    } for x in pet.pet_characteristics
                ]
                
            }
        for pet in pets]
    )




"""
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
    """