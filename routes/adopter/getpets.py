from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User, Adopter, Address, Credencial, Pet
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request

Adopter_getPets = Blueprint("Adopter_getPets",__name__)

 
@Adopter_getPets.route("/adopter/getpets",methods=['GET','POST'], endpoint = 'getPets')
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


@Adopter_getPets.route("/adopter/getpet/<int:n>",methods=['GET','POST'], endpoint = 'getPet')
@login_is_required
def getPet(n):
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
