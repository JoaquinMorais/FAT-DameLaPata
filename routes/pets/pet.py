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
@login_is_required(session)
def putPet():
    data = {
        **RequestList('colors','characteristics'),
        **Request('name','size','weight','birthdate','image_path')
    }
    id_shelter = Request('id_shelter')
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

    db.session.add(Color('Negro', 'color negro'))
    db.session.add(Color('Blanco', 'color blanco'))
    db.session.add(Color('Marrón', 'color marrón'))
    db.session.add(Color('Gris', 'color gris'))
    db.session.add(Color('Amarillo', 'color amarillo'))
    db.session.add(Color('Rojo', 'color rojo'))
    db.session.add(Color('Crema', 'color crema'))
    db.session.add(Color('Tricolor', 'combinación de negro, blanco y marrón'))
    db.session.add(Color('Merle', 'patrón moteado con varios colores'))
    db.session.add(Color('Azul', 'tono de gris diluido'))
    db.session.add(Color('Sable', 'mezcla de colores con puntas más oscuras'))
    

    db.session.add(Characteristics('castrado', 'perro mas tranquilo sin poder tener hijos'))
    db.session.add(Characteristics('discapacitado', 'le falta una de sus piernas'))
    #pelaje
    db.session.add(Characteristics('Pelaje liso', 'Pelaje suave y corto que se adhiere al cuerpo'))
    db.session.add(Characteristics('Pelaje largo', 'Pelaje suave y largo que puede requerir más cuidado'))
    db.session.add(Characteristics('Pelaje duro', 'Pelaje áspero y resistente a la intemperie'))
    db.session.add(Characteristics('Pelaje rizado', 'Pelaje que forma rizos u ondas'))
    db.session.add(Characteristics('Pelaje doble', 'Dos capas de pelaje para aislamiento térmico'))
    db.session.add(Characteristics('Pelaje sin pelo', 'Poca o ninguna cobertura de pelo'))
    db.session.add(Characteristics('Pelaje lanudo', 'Pelaje con rizos densos y apretados'))
    db.session.add(Characteristics('Pelaje abundante', 'Pelaje extremadamente denso y grueso'))
    db.session.add(Characteristics('Pelaje de muda', 'Pelaje que arroja pelo estacionalmente'))
    #personalidad
    db.session.add(Characteristics('Juguetón', 'Activo y lleno de energía, le encanta jugar'))
    db.session.add(Characteristics('Tranquilo', 'Calmo y relajado, prefiere un ambiente tranquilo'))
    db.session.add(Characteristics('Leal', 'Muestra una fuerte lealtad hacia su familia'))
    db.session.add(Characteristics('Protector', 'Cuida y protege a su familia y su hogar'))
    db.session.add(Characteristics('Inteligente', 'Capaz de aprender rápidamente y resolver problemas'))
    db.session.add(Characteristics('Sociable', 'Le gusta estar con otros perros y personas'))
    db.session.add(Characteristics('Tímido', 'Reservado y a menudo se muestra cauteloso con desconocidos'))
    db.session.add(Characteristics('Independiente', 'Prefiere hacer las cosas por sí mismo'))
    db.session.add(Characteristics('Cariñoso', 'Demuestra afecto y busca la compañía de sus dueños'))
    db.session.add(Characteristics('Dominante', 'Tiene una personalidad fuerte y tiende a liderar'))    
    #nivel energetico
    db.session.add(Characteristics('Alto Nivel de Energía', 'Requiere mucho ejercicio y actividad física diaria'))
    db.session.add(Characteristics('Moderado Nivel de Energía', 'Necesita actividad regular pero no excesiva'))
    db.session.add(Characteristics('Bajo Nivel de Energía', 'Prefiere la tranquilidad y es menos activo'))
    #salud
    db.session.add(Characteristics('Buena salud general', 'El perro se encuentra en buen estado de salud'))
    db.session.add(Characteristics('Problemas de articulaciones', 'Puede tener problemas de articulaciones, como displasia'))
    db.session.add(Characteristics('Alergias', 'Sensible a ciertas alergias alimentarias o ambientales'))
    db.session.add(Characteristics('Problemas cardíacos', 'Puede tener problemas cardíacos hereditarios'))
    db.session.add(Characteristics('Problemas dentales', 'Requiere cuidado dental regular'))
    db.session.add(Characteristics('Obesidad', 'Puede tener tendencia a ganar peso fácilmente'))
    db.session.add(Characteristics('Problemas de piel', 'Sufre de problemas de piel como dermatitis'))
    db.session.add(Characteristics('Problemas digestivos', 'Sensible a problemas gastrointestinales'))
    db.session.add(Characteristics('Problemas de visión', 'Puede tener problemas de visión, como cataratas'))
    db.session.add(Characteristics('Problemas de oído', 'Sufre de problemas de oído, como infecciones'))
    #comportamiento social
    db.session.add(Characteristics('Sociable con otros perros', 'Se lleva bien y disfruta de la compañía de otros perros'))
    db.session.add(Characteristics('Sociable con personas', 'Le gusta estar con personas y es amigable con desconocidos'))
    db.session.add(Characteristics('Tímido o reservado', 'Puede ser cauteloso con desconocidos y necesita tiempo para confiar'))
    db.session.add(Characteristics('Agresivo con otros perros', 'Tiene tendencia a pelear o mostrarse agresivo hacia otros perros'))
    db.session.add(Characteristics('Agresivo con personas', 'Muestra agresión hacia las personas, lo que puede ser peligroso'))
    db.session.add(Characteristics('Independiente', 'Prefiere hacer las cosas por sí mismo y no es necesariamente dependiente de la atención constante'))
    db.session.add(Characteristics('Nervioso o ansioso', 'Sufre de ansiedad o nerviosismo en situaciones específicas'))
    db.session.add(Characteristics('Protector', 'Cuida y protege a su familia y su hogar, mostrando comportamientos protectores'))
    db.session.add(Characteristics('Aventurero', 'Le gusta explorar y es curioso acerca de su entorno'))
    db.session.add(Characteristics('Pacífico', 'Es tranquilo y rara vez se involucra en conflictos o peleas'))

    
    


    db.session.commit()
    
    db.session.add(Pet('muchi',  datetime.strptime('7/11/2011', '%m/%d/%Y'), 3,11,1,'https://img.freepik.com/vector-gratis/lindo-personaje-dibujos-animados-perro-sentado_1308-135528.jpg'))
    db.session.commit()
    
    db.session.add(RelationShipPetColor(1, 1))
    db.session.add(RelationShipPetColor(1, 2))
    db.session.add(RelationShipPetColor(1, 3))
    db.session.add(RelationShipPetCharacteristics(1, 1))
    db.session.add(RelationShipPetCharacteristics(1, 2))
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



        
    
