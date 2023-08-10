from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import *
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.response import Response


OnePet = Blueprint("OnePet",__name__)



@OnePet.route("/pet",methods=['PUT'])
#@login_is_required(session)
def addPet():
    form = Request('name','size','weight','birthdate')

    pet = Pet(form['name'],form['birthdate'],int(form['size']),int(form['weight']))
    db.session.add(pet)
    db.session.commit()

    return Response(
        pet.json(),
        200
    )
        

@OnePet.route("/pet/<int:id>",methods=['GET'])
#@login_is_required(session)
def getPet(id):
    pet = Pet.query.filter_by(id_pet = id).first()
    
    return pet.name


@OnePet.route("/sizes",methods=['GET','POST'])
def sizes():
    
    db.session.add(Size('Chico',1,2,3,4))
    db.session.add(Size('Mediano',1,2,3,4))
    db.session.add(Size('Grande',1,2,3,4))
    db.session.add(Color('golden', 'qsy dorado'))
    db.session.add(Characteristics('bonito', 'bonituwu'))
    db.session.commit()
    
    db.session.add(Pet('muchi',  datetime.strptime('7/11/2011', '%m/%d/%Y'), 3))
    db.session.commit()
    
    db.session.add(RelationShipPetColor(1, 1))
    db.session.add(RelationShipPetCharacteristics(1, 1))
    db.session.commit()

    db.session.add(DocumentType('dni','soy un dni'))
    db.session.commit()

    return 'a'



        
    
