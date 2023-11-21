from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import *
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request, RequestList
from methods.response import Response
from methods.encrypt import Encrypt
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
        """"""
        
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
    db.session.add(Status('Activado'))
    db.session.add(Status('Desactivado'))

    db.session.add(Size('Chico',3,4))
    db.session.add(Size('Mediano',3,4))
    db.session.add(Size('Grande',3,4))

    db.session.add(Color('Negro', 'color negro', '#000000'))
    db.session.add(Color('Blanco', 'color blanco', '#ffffff'))
    db.session.add(Color('Marrón', 'color marrón', '#882f00'))
    db.session.add(Color('Gris claro', 'color gris', '#acacac'))
    db.session.add(Color('Gris oscuro', 'color gris', '#585858'))
    db.session.add(Color('Amarillo', 'color amarillo', '#ffff0c'))
    db.session.add(Color('Naranja', 'color naranja', '#ff6e29'))
    db.session.add(Color('Rojo', 'color rojo', '#ff0a06'))
    db.session.add(Color('Azul', 'color azul', '#1500fe'))
    db.session.add(Color('Celeste', 'color celeste', '#22fff6'))
    db.session.add(Color('Violeta', 'color violeta', '#1500fe'))
    db.session.add(Color('Verde', 'color verde', '#1500fe'))
    db.session.add(Color('Crema', 'color crema', '#ffe38f'))
    
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
            'province',
            'city',
            'district',
            'calle',
            52,
            12
        )
    )
    
    db.session.add(
        Address(
            'BsAs',
            'Conurbano',
            'Conurbano district',
            'Massa!',
            52,
            12
        )
    )
    db.session.add(
        Address(
            'formoza',
            'LALAAL',
            '521',
            'calle piola',
            2,
            6
        )
    )
    db.session.commit()
    

    db.session.add(
        Shelter(
            'GARRA',
            'garra@gmail.com',
            1,
            'garra'
        )
    )
    
    db.session.add(
        Shelter(
            'GUARDERIA',
            'guarderia@gmail.com',
            2,
            'guarderia'
        )
    )
      
    db.session.add(
        Shelter(
            'PERRERIA',
            'perrera@gmail.com',
            3,
            'perrera'
        )
    )
    db.session.commit()
    db.session.add(
        Credencial('password',Encrypt("1234") ,'shelter',1)
    )
    db.session.add(
        Credencial('password',Encrypt("1234") ,'shelter',2)
    )
    db.session.add(
        Credencial('password',Encrypt("1234") ,'shelter',3)
    )
    
    db.session.commit()
    
    db.session.add(DocumentType('dni','soy un dni'))
    db.session.add(DocumentType('cuit','soy un cuit'))
    db.session.commit()
    
    db.session.add(
        Adopter(
            'salonia',
            'salonia@gmail.com',
            1,
            'AGUSTIN',
            'SALONIA',
            '2005-02-27',
            '3513513511',
            1,
            '46146146'
        )
    )
    
    
    db.session.add(
        Adopter(
            'fini',
            'fini@gmail.com',
            2,
            'MARCO',
            'FINI',
            '2005-03-27',
            '3513513511',
            1,
            '46146146'
        )
    )
    
    
    db.session.add(
        Adopter(
            'alejo',
            'alejo@gmail.com',
            3,
            'ALEJO',
            'DIAZ',
            '2005-04-27',
            '3513513511',
            1,
            "46146146"
        )
    )
    
    db.session.commit()
    
    db.session.add(
        Credencial('password',Encrypt('1234') ,'adopter',1)
    )
    db.session.add(
        Credencial('password',Encrypt('1234') ,'adopter',2)
    )
    db.session.add(
        Credencial('password',Encrypt('1234') ,'adopter',3)
    )
    
    db.session.commit()
     
    db.session.add(
        Pet(
            'muchi',
            '2011-07-11',
            3,
            11,
            1,
            'https://img.freepik.com/vector-gratis/lindo-personaje-dibujos-animados-perro-sentado_1308-135528.jpg',
            1
        )
    )
    
    
    
    db.session.add(
        Pet(
            'BLANCA',
            '2021-01-01',
            2,
            15,
            3,
            'https://i.blogs.es/b4b276/noemi-macavei-katocz-c7buirbqapa-unsplash/450_1000.jpeg',
            2
        )
    )   
    
    
    db.session.add(
        Pet(
            'MARRON',
            '2022-01-01',
            1,
            40,
            2,
            'https://unamglobal.unam.mx/wp-content/uploads/2023/03/estresperros.jpg',
            1
        )
     )
        
        
    db.session.add(
        Pet(
            'frida',
            '2019-01-01',
            1,
            90,
            2,
            'https://http2.mlstatic.com/D_NQ_NP_600435-MLA47876221938_102021-O.webp',
            2
        )
     )
    
    
    db.session.add(
        Pet(
            'negra',
            '2019-01-01',
            3,
            120,
            2,
            'https://images.ecestaticos.com/lifexbg6yiaK4ecV_i_ok4QF5E4=/0x0:1000x750/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F4b9%2F6f9%2Fb7e%2F4b96f9b7eeaba9a22f864fe7ad663f58.jpg',
            1
        )
     )
    

    
    db.session.add(
        Pet(
            'mucho color',
            '2014-01-01',
            1,
            40,
            2,
            'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/617a613c7592b284460012.jpg',
            1
        )
     )
    

    
    db.session.add(
        Pet(
            'mucho color',
            '2014-01-01',
            1,
            40,
            2,
            'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/617a613c7592b284460012.jpg',
            1
        )
     )
    
    
    db.session.add(
        Pet(
            'mucho color',
            '2014-01-01',
            1,
            40,
            2,
            'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/617a613c7592b284460012.jpg',
            1
        )
     )
    
    
    db.session.add(
        Pet(
            'mucho color',
            '2014-01-01',
            1,
            40,
            2,
            'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/617a613c7592b284460012.jpg',
            1
        )
     )
    
    
    db.session.add(
        Pet(
            'mucho color',
            '2014-01-01',
            1,
            40,
            2,
            'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/617a613c7592b284460012.jpg',
            1
        )
     )

    
    db.session.add(
        Pet(
            'mucho color',
            '2014-01-01',
            1,
            40,
            2,
            'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/617a613c7592b284460012.jpg',
            1
        )
     )
    
    
    db.session.add(
        Pet(
            'mucho color',
            '2014-01-01',
            1,
            40,
            2,
            'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/617a613c7592b284460012.jpg',
            1
        )
     )
    
    
    db.session.add(
        Pet(
            'mucho color',
            '2014-01-01',
            1,
            40,
            2,
            'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/617a613c7592b284460012.jpg',
            1
        )
     )
    
    
    db.session.add(
        Pet(
            'mucho color',
            '2014-01-01',
            1,
            40,
            2,
            'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/617a613c7592b284460012.jpg',
            1
        )
     )
    db.session.add(
        Pet(
            'no color',
            '2019-01-01',
            3,
            25,
            1,
            'https://imagenes.elpais.com/resizer/iTvj-2_NqCqbV8Q8KxaC7uafCB0=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/ZM2ZBNP5XUKH63E4MNQDBLV3SI.jpg',
            2
        )
     )
    
    
    db.session.add(
        Pet(
            'mucho color',
            '2014-01-01',
            1,
            40,
            2,
            'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/617a613c7592b284460012.jpg',
            1
        )
     )


    
    db.session.add(
        Pet(
            'mucho color',
            '2014-01-01',
            1,
            40,
            2,
            'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/617a613c7592b284460012.jpg',
            1
        )
     )
    
    

    db.session.commit()
    
    db.session.add(RelationShipPetColor(1, 1))
    db.session.add(RelationShipPetColor(3, 5))
    db.session.add(RelationShipPetColor(3, 2))
    db.session.add(RelationShipPetColor(5, 1))
    db.session.add(RelationShipPetColor(5, 2))
    db.session.add(RelationShipPetColor(7, 4))
    db.session.add(RelationShipPetColor(7, 4))
    db.session.add(RelationShipPetColor(8, 7))
    db.session.add(RelationShipPetColor(8, 11))
    db.session.add(RelationShipPetColor(8, 9))
    db.session.add(RelationShipPetColor(9, 7))
    db.session.add(RelationShipPetColor(9, 6))
    db.session.add(RelationShipPetColor(9, 5))
    db.session.add(RelationShipPetColor(10, 9))
    db.session.add(RelationShipPetColor(10, 2))
    db.session.add(RelationShipPetCharacteristics(1, 1))
    db.session.add(RelationShipPetCharacteristics(1, 10))
    db.session.add(RelationShipPetCharacteristics(1, 22))
    db.session.add(RelationShipPetCharacteristics(3, 10))
    db.session.add(RelationShipPetCharacteristics(3, 22))
    db.session.add(RelationShipPetCharacteristics(3, 12))
    db.session.add(RelationShipPetCharacteristics(5, 44))
    db.session.add(RelationShipPetCharacteristics(5, 12))
    db.session.add(RelationShipPetCharacteristics(5, 17))
    db.session.add(RelationShipPetCharacteristics(5, 5))
    db.session.add(RelationShipPetCharacteristics(7, 16))
    db.session.add(RelationShipPetCharacteristics(7, 43))
    db.session.add(RelationShipPetCharacteristics(7, 24))
    db.session.add(RelationShipPetCharacteristics(7, 43))
    db.session.add(RelationShipPetCharacteristics(8, 34))
    db.session.add(RelationShipPetCharacteristics(8, 45))
    db.session.add(RelationShipPetCharacteristics(9, 23))
    db.session.add(RelationShipPetCharacteristics(9, 13))
    db.session.add(RelationShipPetCharacteristics(9, 16))
    db.session.add(RelationShipPetCharacteristics(10, 17))
    db.session.add(RelationShipPetCharacteristics(10, 14))
    db.session.add(RelationShipPetCharacteristics(10, 3))
    db.session.add(RelationShipPetCharacteristics(10, 15))
    


    db.session.commit()


    db.session.add(State('adoptado','¡match completado!'))
    db.session.add(State('aceptado','¡match!'))
    db.session.add(State('pendiente','estado pendiente'))
    db.session.add(State('rechazado','estado rechazado'))
    db.session.add(State('cancelado','estado cancelado'))

    return 'a'




'''

@OnePet2.route("/db/populate2",methods=['GET','POST'])
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
            'calle piola 2',
            52,
            12
        )
    )
    
    db.session.add(
        Address(
            'Buenos aires',
            'venezuela',
            '5221',
            'calle venezuela piolant',
            12,
            22
        )
    )
    db.session.add(
        Address(
            'formoza',
            'LALAAL',
            '521',
            'lalalala',
            2,
            6
        )
    )
    db.session.commit()
    

    db.session.add(
        Shelter(
            'GARRA',
            'garra@gmail.com',
            1,
            'garra'
        )
    )
    
    db.session.add(
        Shelter(
            'GUARDERIA',
            'guarderia@gmail.com',
            2,
            'guarderia'
        )
    )
      
    db.session.add(
        Shelter(
            'PERRERIA',
            'perrera@gmail.com',
            3,
            'perrera'
        )
    )
    db.session.commit()
    
    db.session.add(
        Pet(
            1,
            'muchi',
            '2011-07-11',
            3,
            11,
            1,
            'https://img.freepik.com/vector-gratis/lindo-personaje-dibujos-animados-perro-sentado_1308-135528.jpg',
            1
        )
    )
    
    
    
    db.session.add(
        Pet(
            3,
            'BLANCA',
            '2021-01-01',
            2,
            15,
            3,
            'https://i.blogs.es/b4b276/noemi-macavei-katocz-c7buirbqapa-unsplash/450_1000.jpeg',
            2
        )
    )   
    
    
    db.session.add(
        Pet(
            5,
            'MARRON',
            '2022-01-01',
            1,
            40,
            2,
            'https://unamglobal.unam.mx/wp-content/uploads/2023/03/estresperros.jpg',
            1
        )
     )
        
        
    db.session.add(
        Pet(
            7,
            'frida',
            '2019-01-01',
            1,
            90,
            2,
            'https://http2.mlstatic.com/D_NQ_NP_600435-MLA47876221938_102021-O.webp',
            2
        )
     )
    
    
    db.session.add(
        Pet(
            8,
            'negra',
            '2019-01-01',
            3,
            120,
            2,
            'https://images.ecestaticos.com/lifexbg6yiaK4ecV_i_ok4QF5E4=/0x0:1000x750/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F4b9%2F6f9%2Fb7e%2F4b96f9b7eeaba9a22f864fe7ad663f58.jpg',
            1
        )
     )
    
    db.session.add(
        Pet(
            9,
            'no color',
            '2019-01-01',
            3,
            25,
            1,
            'https://imagenes.elpais.com/resizer/iTvj-2_NqCqbV8Q8KxaC7uafCB0=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/ZM2ZBNP5XUKH63E4MNQDBLV3SI.jpg',
            2
        )
     )
    
    
    db.session.add(
        Pet(
            10,
            'mucho color',
            '2014-01-01',
            1,
            40,
            2,
            'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/617a613c7592b284460012.jpg',
            1
        )
     )
    
   
    db.session.add(
        Pet(
            11,
            'mucho color',
            '2014-01-01',
            1,
            40,
            2,
            'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/617a613c7592b284460012.jpg',
            1
        )
     )
     
    db.session.add(
        Pet(
            12,
            'mucho color',
            '2014-01-01',
            1,
            40,
            2,
            'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/617a613c7592b284460012.jpg',
            1
        )
     )
     
    db.session.add(
        Pet(
            13,
            'mucho color',
            '2014-01-01',
            1,
            40,
            2,
            'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/617a613c7592b284460012.jpg',
            1
        )
     )    

    
    
   
    
    db.session.commit()
    
    db.session.add(RelationShipPetColor(1, 1))
    db.session.add(RelationShipPetColor(3, 5))
    db.session.add(RelationShipPetColor(3, 2))
    db.session.add(RelationShipPetColor(5, 1))
    db.session.add(RelationShipPetColor(5, 2))
    db.session.add(RelationShipPetColor(7, 4))
    db.session.add(RelationShipPetColor(7, 4))
    db.session.add(RelationShipPetColor(8, 7))
    db.session.add(RelationShipPetColor(8, 11))
    db.session.add(RelationShipPetColor(8, 9))
    db.session.add(RelationShipPetColor(9, 7))
    db.session.add(RelationShipPetColor(9, 6))
    db.session.add(RelationShipPetColor(9, 5))
    db.session.add(RelationShipPetColor(10, 9))
    db.session.add(RelationShipPetColor(10, 2))
    db.session.add(RelationShipPetColor(11, 5))
    db.session.add(RelationShipPetColor(11, 4))
    db.session.add(RelationShipPetColor(12, 5))
    db.session.add(RelationShipPetColor(12, 4))
    db.session.add(RelationShipPetColor(13, 5))
    db.session.add(RelationShipPetColor(13, 4))    
    db.session.add(RelationShipPetCharacteristics(1, 1))
    db.session.add(RelationShipPetCharacteristics(1, 10))
    db.session.add(RelationShipPetCharacteristics(1, 22))
    db.session.add(RelationShipPetCharacteristics(3, 10))
    db.session.add(RelationShipPetCharacteristics(3, 22))
    db.session.add(RelationShipPetCharacteristics(3, 12))
    db.session.add(RelationShipPetCharacteristics(5, 54))
    db.session.add(RelationShipPetCharacteristics(5, 12))
    db.session.add(RelationShipPetCharacteristics(5, 17))
    db.session.add(RelationShipPetCharacteristics(5, 5))
    db.session.add(RelationShipPetCharacteristics(7, 16))
    db.session.add(RelationShipPetCharacteristics(7, 43))
    db.session.add(RelationShipPetCharacteristics(7, 24))
    db.session.add(RelationShipPetCharacteristics(7, 53))
    db.session.add(RelationShipPetCharacteristics(8, 34))
    db.session.add(RelationShipPetCharacteristics(8, 45))
    db.session.add(RelationShipPetCharacteristics(9, 23))
    db.session.add(RelationShipPetCharacteristics(9, 13))
    db.session.add(RelationShipPetCharacteristics(9, 16))
    db.session.add(RelationShipPetCharacteristics(10, 17))
    db.session.add(RelationShipPetCharacteristics(10, 14))
    db.session.add(RelationShipPetCharacteristics(10, 3))
    db.session.add(RelationShipPetCharacteristics(10, 15))
    db.session.add(RelationShipPetCharacteristics(11, 9))
    db.session.add(RelationShipPetCharacteristics(11, 39))
    db.session.add(RelationShipPetCharacteristics(12, 9))
    db.session.add(RelationShipPetCharacteristics(12, 39))
    db.session.add(RelationShipPetCharacteristics(13, 9))
    db.session.add(RelationShipPetCharacteristics(13, 39))


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
    
    '''