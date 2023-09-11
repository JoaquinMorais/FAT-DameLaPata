from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import *
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request, RequestList
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
    data = {
        **RequestList('colors','characteristics'),
        **Request('name','size','weight','birthdate','image_path','category','gender')
    }

    id_shelter = Request('id_shelter')
    """
    if not id_shelter:
        user = User.query.get(session['user_id'])
        if not user:
            return Response(
                'Error: User Not Found',
                404
            )
        if user.type != 'shelter':
           return Response(
                'Error: Permission Error',
                404
            )
        id_shelter = user.id_user
        """
        
    for x in data:
        if data[x] == None:
            return Response(
                'Error: Bad Request',
                400
            )
    shelter = Shelter.query.get(id_shelter)
    if not shelter:
        return Response(
            'Error: Shelter Not Found',
            404
        )
    
    pet = Pet(data['name'],data['birthdate'],int(data['size']),int(data['weight']),int(id_shelter),data['image_path'])
    if pet == None:
        return Response(
            'Error: Bad Request (Pet Not Found)',
            400
        ) 
    
    db.session.add(pet)
    db.session.commit()

    for color in data['colors']:
        pet_color  = RelationShipPetColor(pet.id_pet,color)
        db.session.add(pet_color)

    for characteristic in data['characteristics']:
        pet_characteristic  = RelationShipPetCharacteristics(pet.id_pet,characteristic)
        db.session.add(pet_characteristic)

    
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




    db.session.commit() 
        

    db.session.add(DocumentType('dni','soy un dni'))
    db.session.add(DocumentType('cuit','soy un cuit'))
    db.session.commit()

    db.session.add(State('adoptado','¡match completado!'))
    db.session.add(State('aceptado','¡match!'))
    db.session.add(State('pendiente','estado pendiente'))
    db.session.add(State('rechazado','estado rechazado'))
    db.session.add(State('cancelado','estado cancelado'))

    return 'a'



        
    
