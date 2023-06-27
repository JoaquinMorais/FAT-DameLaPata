from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import *
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request


Refugio_AddPet = Blueprint("Refugio_AddPet",__name__)

@Refugio_AddPet.route("/sizes",methods=['GET','POST'])
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

    return redirect(url_for('Refugio_AddPet.addPet'))


@Refugio_AddPet.route("/refugios/añadir-mascota",methods=['POST'])
def addPet():
    form = Request('name','size','birthdate')

    pet = Pet(form['name'],form['birthdate'],int(form['size']))

    db.session.add(pet)
    db.session.commit()

    return form
        
        
    















