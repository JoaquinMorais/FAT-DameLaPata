from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import *
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request, RequestList
from sqlalchemy import or_

Pets = Blueprint("Pets",__name__)




@Pets.route("/pets",methods=['GET'])
#@login_is_required(session)
def getPets():
    limit = Request('limit')
    if limit:
        pets = Pet.query.limit(int(limit)).all()
    else:
        pets = Pet.query.all()
    if not pets:
        return Response(
            'Error: Pet Not Found',
            401
        )


    return Response(
        [pet.json() for pet in pets],
        200
    )



@Pets.route("/pets/all",methods=['GET'])
def getPetsAll():
    limit = Request('limit')
    if limit:
        pets = Pet.query.limit(int(limit)).all()
    else:
        pets = Pet.query.all()
    if not pets:
        return Response(
            'Error: Pets Not Found',
            401
        )


    return Response(
        [pet.json() for pet in pets],
        200
    )
"""

SELECT p.name
FROM pet p
WHERE EXISTS (
    SELECT 1
    FROM relationshippetcolor rpc1
    WHERE rpc1.id_pet = p.id_pet AND rpc1.id_color = 1
)
AND EXISTS (
    SELECT 1
    FROM relationshippetcolor rpc2
    WHERE rpc2.id_pet = p.id_pet AND rpc2.id_color = 2
);



"""





@Pets.route("/pets/filterby",methods=['GET'])
def getPetsFilterby():
    #RelationShipPetCharacteristics()
    #RelationShipPetColor()
    data = {
        **RequestList('color','characteristic','birth_date','weight','size'),
        **Request('more_birth_date','less_birth_date','more_weight','less_weight')
    }
    
    
    #return jsonify([{x:datam[x]} for x in datam])
    
    
    subqueries = []

    for color_id in data['color']:
        subquery = db.session.query(
            RelationShipPetColor.id_pet
        ).filter(
            RelationShipPetColor.id_color == color_id
        ).subquery()
        subqueries.append(subquery)
    
    for characteristic_id in data['characteristic']:
        subquery = db.session.query(
            RelationShipPetCharacteristics.id_pet
        ).filter(
            RelationShipPetCharacteristics.id_characteristics == characteristic_id
        ).subquery()
        subqueries.append(subquery)

    pets = db.session.query(Pet).filter(
        *[db.exists(subquery.select().where(subquery.c.id_pet == Pet.id_pet)) for subquery in subqueries],
        
    )
    if data['birth_date']:
        if len(data['birth_date']) == 1:
            pets = pets.filter(
                Pet.birth_date == data['birth_date']
            )
        else:
            birth_date_filters = [Pet.birth_date == birth_date for birth_date in data['birth_date']]
            pets = pets.filter(or_(*birth_date_filters))  # Aplicar condiciones OR
    
    if data['more_birth_date']:
        pets = pets.filter(
            Pet.birth_date >= data['more_birth_date']
        )

    if data['less_birth_date']:
        pets = pets.filter(
            Pet.birth_date <= data['less_birth_date']
        )


    if data['weight']:
        if len(data['weight']) == 1:
            pets = pets.filter(
                Pet.weight == data['weight']
            )
        else:
            weight_filters = [Pet.weight == weight for weight in data['weight']]
            pets = pets.filter(or_(*weight_filters))  # Aplicar condiciones OR
    
    if data['more_weight']:
        pets = pets.filter(
            Pet.weight >= data['more_weight']
        )

    if data['less_weight']:
        pets = pets.filter(
            Pet.weight <= data['less_weight']
        )
    
    if data['size']:
        if len(data['size']) == 1:
            pets = pets.filter(
                Pet.id_size == data['size']
            )
        else:
            size_filters = [Pet.id_size == size for size in data['size']]
            pets = pets.filter(or_(*size_filters))  # Aplicar condiciones OR
    

    return jsonify(
        {
            'pets':[x.id_pet for x in pets.all()],
        }
    )




    return Response(
        'In progress',
        200
    )