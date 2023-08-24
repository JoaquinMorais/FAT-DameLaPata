from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import *
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.response import Response

OnePet = Blueprint("OnePet",__name__)

    

@OnePet.route("/pet/<int:id>",methods=['GET'])
#@login_is_required(session)
def getPet(id):
    pet = Pet.query.get(id)
    if not pet:
        return Response(
            'Error: Bad Request (Pet Not Found)',
            400
        )


    return Response(
        pet.json(),
        200
    )


@OnePet.route("/pet",methods=['PUT'])
#@login_is_required(session)
def putPet():
    form = Request('name','size','weight','birthdate','id_shelter','image_path')
    for x in form:
        if form[x] == None:
            return Response(
                'Error: Bad Request',
                400
            ) 
    pet = Pet(form['name'],form['birthdate'],int(form['size']),int(form['weight']),int(form['id_shelter']),form['image_path'])
    if pet == None:
        return Response(
            'Error: Bad Request (Pet Not Found)',
            400
        ) 
    
    db.session.add(pet)
    db.session.commit()


    return Response(
        pet.json(),
        200
    )
    
@OnePet.route("/pet/<int:id>",methods=['DELETE'])
#@login_is_required(session)
def deletePet(id):
    pet = Pet.query.filter_by(id_pet = id).first()
    if not pet:
        return Response(
            'Error: Bad Request (Pet Not Found)',
            400
        )
    db.session.delete(pet)
    db.session.commit()

    return Response(
        'Successful',
        200
    )





@OnePet.route("/db/populate",methods=['GET','POST'])
def sizes():
    
    db.session.add(Size('Chico',3,4))
    db.session.add(Size('Mediano',3,4))
    db.session.add(Size('Grande',3,4))
    db.session.add(Color('golden', 'qsy dorado'))
    db.session.add(Characteristics('bonito', 'bonituwu'))
    
    db.session.commit()
    
    db.session.add(Pet('muchi',  datetime.strptime('7/11/2011', '%m/%d/%Y'), 3,11,1,'https://img.freepik.com/vector-gratis/lindo-personaje-dibujos-animados-perro-sentado_1308-135528.jpg'))
    db.session.commit()
    
    db.session.add(RelationShipPetColor(1, 1))
    db.session.add(RelationShipPetCharacteristics(1, 1))
    db.session.commit()
    


    db.session.add(DocumentType('dni','soy un dni'))
    db.session.commit()

    return 'a'



        
    
