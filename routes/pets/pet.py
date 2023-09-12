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
        **Request('name','size','weight','birthdate','image_path','gender')#'gender')
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
        print(data)
        if data[x] == None:
            return Response(

                f'Error: Bad Request {x}',
                400
            )
    shelter = Shelter.query.get(id_shelter)
    if not shelter:
        return Response(
            'Error: Shelter Not Found',
            404
        )
    
    pet = Pet(data['name'],data['birthdate'],int(data['size']),int(data['weight']),int(id_shelter),data['image_path'],data['gender'])
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
        print(characteristic)
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
    
    db.session.add(Gender('Masculino', 'macho'))
    db.session.add(Gender('Femenino', 'hembra'))
    
    
    db.session.add(Category('pelaje', 'tipo de pelo'))
    db.session.add(Category('personalidad', 'tipo de personalidades'))
    db.session.add(Category('nivel energetico', 'que tanta actividad '))
    db.session.add(Category('salud', 'si tienen algun problema el perro'))
    db.session.add(Category('comportamiento social', 'como se conducta con los demas seres vivos y humanos'))
    db.session.add(Category('Vacunacion', 'estado de vacunacion'))
    
    db.session.add(State('adoptado','¡match completado!'))
    db.session.add(State('aceptado','¡match!'))
    db.session.add(State('pendiente','estado pendiente'))
    db.session.add(State('rechazado','estado rechazado'))
    db.session.add(State('cancelado','estado cancelado'))

    
    
    
    #pelaje
    db.session.add(Characteristics('Pelaje liso', 'Pelaje suave y corto que se adhiere al cuerpo', 1))
    db.session.add(Characteristics('Pelaje largo', 'Pelaje suave y largo que puede requerir más cuidado', 1))
    db.session.add(Characteristics('Pelaje duro', 'Pelaje áspero y resistente a la intemperie', 1))
    db.session.add(Characteristics('Pelaje rizado', 'Pelaje que forma rizos u ondas', 1))
    db.session.add(Characteristics('Pelaje doble', 'Dos capas de pelaje para aislamiento térmico', 1))
    db.session.add(Characteristics('Pelaje sin pelo', 'Poca o ninguna cobertura de pelo', 1))
    db.session.add(Characteristics('Pelaje lanudo', 'Pelaje con rizos densos y apretados', 1))
    db.session.add(Characteristics('Pelaje abundante', 'Pelaje extremadamente denso y grueso', 1))
    db.session.add(Characteristics('Pelaje de muda', 'Pelaje que arroja pelo estacionalmente', 1))
    #personalidad
    db.session.add(Characteristics('Juguetón', 'Activo y lleno de energía, le encanta jugar', 2))
    db.session.add(Characteristics('Tranquilo', 'Calmo y relajado, prefiere un ambiente tranquilo', 2))
    db.session.add(Characteristics('Leal', 'Muestra una fuerte lealtad hacia su familia', 2))
    db.session.add(Characteristics('Protector', 'Cuida y protege a su familia y su hogar', 2))
    db.session.add(Characteristics('Inteligente', 'Capaz de aprender rápidamente y resolver problemas', 2))
    db.session.add(Characteristics('Sociable', 'Le gusta estar con otros perros y personas', 2))
    db.session.add(Characteristics('Tímido', 'Reservado y a menudo se muestra cauteloso con desconocidos', 2))
    db.session.add(Characteristics('Independiente', 'Prefiere hacer las cosas por sí mismo', 2))
    db.session.add(Characteristics('Cariñoso', 'Demuestra afecto y busca la compañía de sus dueños', 2))
    db.session.add(Characteristics('Dominante', 'Tiene una personalidad fuerte y tiende a liderar', 2))    
    #nivel energetico
    db.session.add(Characteristics('Alto Nivel de Energía', 'Requiere mucho ejercicio y actividad física diaria', 3))
    db.session.add(Characteristics('Moderado Nivel de Energía', 'Necesita actividad regular pero no excesiva', 3))
    db.session.add(Characteristics('Bajo Nivel de Energía', 'Prefiere la tranquilidad y es menos activo', 3))
    #salud
    db.session.add(Characteristics('Buena salud general', 'El perro se encuentra en buen estado de salud', 4))
    db.session.add(Characteristics('Problemas de articulaciones', 'Puede tener problemas de articulaciones, como displasia', 4))
    db.session.add(Characteristics('Alergias', 'Sensible a ciertas alergias alimentarias o ambientales', 4))
    db.session.add(Characteristics('Problemas cardíacos', 'Puede tener problemas cardíacos hereditarios', 4))
    db.session.add(Characteristics('Problemas dentales', 'Requiere cuidado dental regular', 4))
    db.session.add(Characteristics('Obesidad', 'Puede tener tendencia a ganar peso fácilmente', 4))
    db.session.add(Characteristics('Problemas de piel', 'Sufre de problemas de piel como dermatitis', 4))
    db.session.add(Characteristics('Problemas digestivos', 'Sensible a problemas gastrointestinales', 4))
    db.session.add(Characteristics('Problemas de visión', 'Puede tener problemas de visión, como cataratas', 4))
    db.session.add(Characteristics('Problemas de oído', 'Sufre de problemas de oído, como infecciones', 4))
    db.session.add(Characteristics('sin pierna', 'le falta una de sus piernas o mas', 4))
    db.session.add(Characteristics('castrado', 'sin posibilidad de tener crias', 4))
    #comportamiento social
    db.session.add(Characteristics('Sociable con otros perros', 'Se lleva bien y disfruta de la compañía de otros perros', 5))
    db.session.add(Characteristics('Sociable con personas', 'Le gusta estar con personas y es amigable con desconocidos', 5))
    db.session.add(Characteristics('Tímido o reservado', 'Puede ser cauteloso con desconocidos y necesita tiempo para confiar', 5))
    db.session.add(Characteristics('Agresivo con otros perros', 'Tiene tendencia a pelear o mostrarse agresivo hacia otros perros', 5))
    db.session.add(Characteristics('Agresivo con personas', 'Muestra agresión hacia las personas, lo que puede ser peligroso', 5))
    db.session.add(Characteristics('Independiente', 'Prefiere hacer las cosas por sí mismo y no es necesariamente dependiente de la atención constante', 5))
    db.session.add(Characteristics('Nervioso o ansioso', 'Sufre de ansiedad o nerviosismo en situaciones específicas', 5))
    db.session.add(Characteristics('Protector', 'Cuida y protege a su familia y su hogar, mostrando comportamientos protectores', 5))
    db.session.add(Characteristics('Aventurero', 'Le gusta explorar y es curioso acerca de su entorno', 5))
    db.session.add(Characteristics('Pacífico', 'Es tranquilo y rara vez se involucra en conflictos o peleas', 5))
    #Vacunacion 
    db.session.add(Characteristics('Vacunado', 'El perro ha recibido todas las vacunas necesarias según el calendario de vacunación', 6))
    db.session.add(Characteristics('No vacunado', 'El perro no ha recibido todas las vacunas necesarias o no está actualizado en sus vacunas', 6))
    db.session.add(Characteristics('Programado para vacunas', 'El perro está en un programa de vacunación y recibirá sus vacunas en el futuro', 6))
    db.session.add(Characteristics('Vacunación parcial', 'El perro ha recibido algunas vacunas pero no todas', 6))
    db.session.add(Characteristics('Reacciones a las vacunas', 'El perro ha experimentado reacciones adversas a vacunas en el pasado', 6))
    db.session.commit()

    db.session.add(
        Address(
            'cordoba',
            'cordoba',
            '5151',
            12,
            12
        )
    )
    db.session.commit()
    

    db.session.add(
        Shelter(
            'RefugioGarra',
            'garra@gmail.com',
            1,
            'garra'
        )
    )
    db.session.commit()
    
    db.session.add(
        Pet(
            'Pancho',
            '2019-03-10',
            1,
            1,
            1,
            'https://img.freepik.com/vector-gratis/lindo-personaje-dibujos-animados-perro-sentado_1308-135528.jpg',
            1
        )
    )
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



        
    
