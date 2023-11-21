from utils.db import db
from sqlalchemy import Column, Integer, String, Date, func, ForeignKey
from datetime import datetime
from sqlalchemy import or_,and_, extract, func

class Gender(db.Model):
    __tablename__ = 'gender'
    id_gender = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(70), nullable = False)
    description = db.Column(db.String(500), nullable = False)

    def __init__(self, name, description):
        self.title = name
        self.description = description

    def __repr__(self):
        return f'{self.title}'


class DocumentType(db.Model):
    __tablename__ = 'documenttype'
    id_document_type = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(70), nullable = False)
    description = db.Column(db.String(500), nullable = False)

    def __init__(self, name, description):
        self.name = name
        self.description = description

    def __repr__(self):
        return f'{self.name}'

class Address(db.Model):
    __tablename__ = 'address'
    id_address = db.Column(db.Integer, primary_key=True)
    province = db.Column(db.String(70), nullable = False)
    city = db.Column(db.String(70), nullable = False)
    district = db.Column(db.String(70), nullable = False)
    street = db.Column(db.String(70), nullable = False)
    
    latitude = db.Column(db.String(70), nullable = False)
    longitude = db.Column(db.String(70), nullable = False)
    
    def __init__(self, province, city, district,street, latitude, longitude):
        self.province = province
        self.city = city
        self.district = district
        self.latitude = latitude
        self.street = street
        self.longitude = longitude

    def __repr__(self):
        return f'{self.title}'
    
    def json(self):
        return {
                'province': self.province,
                'city': self.city,
                'district': self.district,
                'street':self.street
            
        }    

class User(db.Model):
    __tablename__ = 'user'
    
    id_user = Column(Integer, primary_key=True)
    username = Column(String(70), nullable=False)
    email = Column(String(150), nullable=False)
    type = Column(String(150))

    id_address = Column(Integer, ForeignKey('address.id_address', onupdate='CASCADE'))
    id_status = Column(Integer, ForeignKey('status.id_status', onupdate='CASCADE'))

    __mapper_args__ = {
        'polymorphic_identity': 'user',
        'polymorphic_on': type,
    }

    def __init__(self, username, email, id_address):
        self.username = username
        self.email = email
        self.id_address = id_address
        self.id_status = 1

    def getId(self):
        return self.id_user

    def getStatus(self):
        return self.id_status

    def this_type(self):
        return type(self).__name__

    def json(self):
        return {
            'id': self.id_user,
            'username': self.username,
            'email': self.email,
            'id_address': self.id_address,
            'type':self.type
        }

    def json_public(self):
        return {
            'id': self.id_user,
            'username': self.username,
            'email': self.email,
            'type':self.type
        }

class Adopter(User):
    __tablename__ = 'adopter'
    id_adopter = Column(Integer, ForeignKey('user.id_user', onupdate='CASCADE'), primary_key=True)
    name = Column(String(70), nullable=False)
    surname = Column(String(70), nullable=False)
    birth_date = Column(Date, nullable=False)
    phone_number = Column(String(70), nullable=False)
    document = Column(String(70), nullable=False)

    id_document_type = Column(Integer, ForeignKey('documenttype.id_document_type', onupdate='CASCADE'))

    __mapper_args__ = {
        'polymorphic_identity': 'adopter'
    }

    def __init__(self, username, email, id_address, name, surname, birth_date, phone_number, id_document_type, document):
        super().__init__(username, email, id_address)
        self.username = username
        self.email = email
        self.id_address = id_address
        self.name = name
        self.surname = surname
        self.birth_date = birth_date
        self.phone_number = phone_number
        self.id_document_type = id_document_type
        self.document = document

    def json(self):
        return {
            **super().json(),
            **{
                'name': self.name,
                'surname': self.surname,
                'birth_date': self.birth_date.isoformat(),  # Convierte a formato ISO
                'phone_number': self.phone_number,
                'id_document_type': self.id_document_type,
                'document': self.document,
            },
            
        }
    def json_location(self):
        address = Address.query.get(self.id_address)
        return {
            **super().json(),
            **{
                'name': self.name,
                'surname': self.surname,
                'birth_date': self.birth_date.isoformat(),  # Convierte a formato ISO
                'phone_number': self.phone_number,
                'id_document_type': self.id_document_type,
                'document': self.document,
                'address': address.json()
            },
            
        }

    def json_public(self):
        return {
            **super().json_public(),
            **{
                'name': self.name,
                'surname': self.surname,
                'birth_date': self.birth_date.isoformat(),  # Convierte a formato ISO     
            }
        }
        

class Shelter(User):
    __tablename__ = 'shelter'
    id_shelter = Column(Integer, ForeignKey('user.id_user', ondelete='CASCADE', onupdate='CASCADE'), primary_key=True)
    name = Column(String(70), nullable=False)

    __mapper_args__ = {
        'polymorphic_identity': 'shelter'
    }

    def __init__(self, username, email, id_address, name):
        super().__init__(username, email, id_address)
        self.name = name
    
    def json(self):
        return {
            **super().json(),
            **{
                'name': self.name,
            },
            
        }
    def json_location(self):
        address = Address.query.get(self.id_address)
        return {
            **super().json(),
            **{
                'name': self.name,
                'address': address.json()
            },
            
        }

    def json_public(self):
        return {
            **super().json_public(),
            **{
                'name': self.name,
            },
            
        }
    

class Volunteer(User): # se pueden hacer las querys
    __tablename__ = 'volunteer'
    id_volunteer = db.Column(db.Integer, ForeignKey('user.id_user', onupdate='CASCADE'), primary_key=True)
    name = db.Column(db.String(70), nullable = False)
    surname = db.Column(db.String(70), nullable = False)
    birth_date = db.Column(db.Date, nullable = False)
    phone_number = db.Column(db.String(70), nullable = False)
    document = db.Column(db.String(70), nullable = False)

    id_document_type = db.Column(db.Integer, ForeignKey('documenttype.id_document_type',  onupdate='CASCADE'))
    shelter = db.Column(db.Integer, ForeignKey('shelter.id_shelter',  onupdate='CASCADE'))

    __mapper_args__ = {
        'polymorphic_identity': 'volunteer'
    }

    def __init__(self,username, email, id_address,name, surname, birth_date, phone_number, id_document_type, document, shelter):
        super().__init__(username, email, id_address)
        self.name = name
        self.surname = surname
        self.birth_date = birth_date
        self.phone_number = phone_number
        self.id_document_type = id_document_type
        self.document = document
        self.shelter = shelter
    
    def json(self):
        return {
            **super().json(),
            **{
                'name': self.name,
                'surname': self.surname,
                'birth_date': self.birth_date.isoformat(),  # Convierte a formato ISO
                'phone_number': self.phone_number,
                'id_document_type': self.id_document_type,
                'document': self.document,
                'shelter':self.shelter.json(),
                'id_shelter' : self.shelter.id_shelter
            },
            
        }

class Credencial(db.Model):
    __tablename__ = 'credenciales'
    id_credencial = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(150), nullable = False)
    campo = db.Column(db.String(150), nullable = False)
    tipo = db.Column(db.String(150), nullable = False)
    

    id_user = db.Column(db.Integer, ForeignKey('user.id_user',  onupdate='CASCADE'))

    def __init__(self,titulo, campo, tipo, id_user):
        self.titulo = titulo
        self.campo = campo
        self.tipo = tipo
        self.id_user = id_user


class Size(db.Model):
    __tablename__ = 'size'
    id_size = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(70), nullable = False)
    max_height = db.Column(db.Integer, nullable = False)
    min_height = db.Column(db.Integer, nullable = False)

    def __init__(self, title, max_height, min_height):
        self.title = title
        self.max_height = max_height
        self.min_height = min_height

    def __repr__(self):
        return f'{self.title}'

    def json(self):
        return {
            'id_size':self.id_size,
            'title':self.title,
            'max_height':self.max_height,
            'min_height':self.min_height,
        }

class Color(db.Model):
    __tablename__ = 'color'
    id_color = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(70), nullable = False)
    description = db.Column(db.String(500), nullable = False)
    color_hash = db.Column(db.String(10), nullable = False)

    def __init__(self, title, description,color_hash):
        self.title = title
        self.description = description
        self.color_hash = color_hash

    def __repr__(self):
        return f'{self.title}'
    
    def json(self):
        return {
            'id_color':self.id_color,
            'title':self.title,
            'max_height':self.description,
        }
class Category(db.Model):
    __tablename__ = 'category'
    id_category = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(70), nullable = False)
    description = db.Column(db.String(500), nullable = False)
    
    def __init__(self, title, description):
        self.title = title
        self.description = description

    def __repr__(self):
        return f'{self.title}'

    def category_json(self):
        return {
            'id_category':self.id_category,
            'title':self.title,
            'description':self.description,
        }

    def json(self):
        characteristics = Characteristics.query.filter(
            Characteristics.id_category == self.id_category
        ).all()
        return {
            'id_category':self.id_category,
            'title':self.title,
            'description':self.description,
            'characteristics' : [
                characteristic.characteristic_json() for characteristic in characteristics
            ]
        }




class Characteristics(db.Model):
    __tablename__ = 'characteristics'
    id_characteristics = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(70), nullable = False)
    description = db.Column(db.String(500), nullable = False)

    id_category = db.Column(db.Integer, ForeignKey('category.id_category',  onupdate='CASCADE'))


    def __init__(self, title, description, category):
        self.title = title
        self.description = description
        self.id_category = category

    def __repr__(self):
        return f'{self.title}'
    
    def characteristic_json(self):
        return {
            'id_characteristic':self.id_characteristics,
            'title':self.title,
            'max_height':self.description,
        }

    def json(self):
        category = Category.query.get(self.id_category)
        return {
            'id_characteristic':self.id_characteristics,
            'title':self.title,
            'max_height':self.description,
            'category': category.category_json()
        }

class Pet(db.Model):
    __tablename__ = 'pet'
    id_pet = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(70), nullable = False)
    birth_date = db.Column(db.Date, nullable = True)
    image_path = db.Column(db.Text, nullable = False)

    id_size = db.Column(db.Integer, ForeignKey('size.id_size',  onupdate='CASCADE'))
    id_shelter = db.Column(db.Integer, ForeignKey('shelter.id_shelter'))
    id_gender = db.Column(db.Integer, ForeignKey('gender.id_gender'))


    pet_colors = db.relationship('RelationShipPetColor', lazy=True)
    pet_characteristics = db.relationship('RelationShipPetCharacteristics', lazy=True)
    pet_size = db.relationship('Size', lazy=True)
    weight = db.Column(db.Integer, nullable = False)
    
    

    def __init__(self, name, birth_date, size, weight,id_shelter,image_path, id_gender):
        self.name = name
        self.birth_date = birth_date
        self.id_size = size
        self.weight = weight
        self.id_shelter = id_shelter
        self.image_path = image_path
        self.id_gender = id_gender

    def __repr__(self):
        return f'{self.name}'
    
    def json(self):
        gender = Gender.query.get(self.id_gender)
        return {
            'id_pet':self.id_pet,
            'name':self.name.title(),
            'birth_date' : self.birth_date.strftime("%Y-%m-%d"),
            'id_size' : self.id_size,
            'size' : self.pet_size.title.title(),
            'weight' : self.weight,
            'id_shelter':self.id_shelter,
            'image_path' : self.image_path,
            'gender' : gender.title,
            'colors': [color.color_json() for color in self.pet_colors],
            'characteristics': [characteristic.characteristic_json() for characteristic in self.pet_characteristics],
        }

    def requests(self,data = {}):
        pet_requests = RequestPetAdopter.query.filter(
            RequestPetAdopter.id_pet == self.id_pet
        )
    

        if data['id_adopter']:
            if len(data['id_adopter']) == 1:
                pet_requests = pet_requests.filter(
                    RequestPetAdopter.id_user == data['adopter']
                )
            else:
                id_filters = [RequestPetAdopter.id_user == id for id in data['adopter']]
                pet_requests = pet_requests.filter(or_(*id_filters))  # Aplicar condiciones OR
        
        if data['not_id_adopter']:
            if len(data['not_id_adopter']) == 1:
                pet_requests = pet_requests.filter(
                    RequestPetAdopter.id_user != data['not_id_adopter']
                )
            else:
                id_filters = [RequestPetAdopter.id_user != id for id in data['not_id_adopter']]
                pet_requests = pet_requests.filter(*id_filters)  # Aplicar condiciones OR

        if data['id_state']:
            if len(data['id_state']) == 1:
                pet_requests = pet_requests.filter(
                    RequestPetAdopter.id_state == data['id_state']
                )
            else:
                id_filters = [RequestPetAdopter.id_state == id for id in data['id_state']]
                pet_requests = pet_requests.filter(or_(*id_filters))  # Aplicar condiciones OR
        
        if data['not_id_state']:
            if len(data['not_id_state']) == 1:
                pet_requests = pet_requests.filter(
                    RequestPetAdopter.id_state != data['not_id_state']
                )
            else:
                id_filters = [RequestPetAdopter.id_state != id for id in data['not_id_state']]
                pet_requests = pet_requests.filter(*id_filters)  # Aplicar condiciones OR

        if data['request_date']:
            date = data['request_date']
            if len(data['request_date']) == 1:
                pet_requests = pet_requests.filter(
                    func.date(RequestPetAdopter.request_date) == data['request_date']
                )
            else:
                dates = [func.date(RequestPetAdopter.request_date) == date for date in data['request_date']]
                pet_requests = pet_requests.filter(or_(*dates))  # Aplicar condiciones OR
        

        if data['more_request_date']:
            pet_requests = pet_requests.filter(
                func.date(RequestPetAdopter.request_date) >= data['more_request_date']
            )
        
        if data['less_request_date']:
            pet_requests = pet_requests.filter(
                func.date(RequestPetAdopter.request_date) <= data['less_request_date']
            )
        

        
        if data['edition_date']:
            date = data['edition_date']
            if len(data['edition_date']) == 1:
                pet_requests = pet_requests.filter(
                    func.date(RequestPetAdopter.edition_date) == data['edition_date']
                )
            else:
                dates = [func.date(RequestPetAdopter.edition_date) == date for date in data['edition_date']]
                pet_requests = pet_requests.filter(or_(*dates))  # Aplicar condiciones OR
        

        if data['more_edition_date']:
            pet_requests = pet_requests.filter(
                func.date(RequestPetAdopter.edition_date) >= data['more_edition_date']
            )
        
        if data['less_edition_date']:
            pet_requests = pet_requests.filter(
                func.date(RequestPetAdopter.edition_date) <= data['less_edition_date']
            )

        if data['id_only']:
            return {
            'id_pet':self.id_pet,
            'id_requests' : [
                x.id_request
                for x in pet_requests
            ]
            }
        return  {
            'pet':self.json(),
            'requests' : [
                x.request()
                for x in pet_requests
            ]
        }
        
        
        

# caracteristicas de las mascotas:

class RelationShipPetColor(db.Model):
    __tablename__ = 'relationshippetcolor'
    id_relationship = db.Column(db.Integer, primary_key=True)
    
    id_pet = db.Column(db.Integer, ForeignKey('pet.id_pet',  onupdate='CASCADE'))
    id_color = db.Column(db.Integer, ForeignKey('color.id_color',  onupdate='CASCADE'))

    color_value = db.relationship('Color', lazy=True)

    def __init__(self, pet, color):
        self.id_pet = pet
        self.id_color = color

    def getTitleColor(self):
        return self.color_value.title

    def color_json(self):
        return self.color_value.json()


class RelationShipPetCharacteristics(db.Model):
    __tablename__ = 'relationshippetcharacteristics'
    id_relationship = db.Column(db.Integer, primary_key=True)

    id_pet = db.Column(db.Integer, ForeignKey('pet.id_pet',  onupdate='CASCADE'))
    id_characteristics = db.Column(db.Integer, ForeignKey('characteristics.id_characteristics',  onupdate='CASCADE'))

    characteristics_value = db.relationship('Characteristics', lazy=True)

    def __init__(self, pet, characteristics):
        self.id_pet = pet
        self.id_characteristics = characteristics

    def getTitleCharacteristics(self):
        return self.characteristics_value.title
    
    def getDescriptionCharacteristics(self):
        return self.characteristics_value.description
    
    def characteristic_json(self):
        return self.characteristics_value.json()
# caracteristicas deseadas de la persona:

class RelationShipUserColor(db.Model):
    __tablename__ = 'relationship_adopter_color'
    id_relationship = db.Column(db.Integer, primary_key=True)

    id_user = db.Column(db.Integer, ForeignKey('user.id_user',  onupdate='CASCADE'))
    id_color = db.Column(db.Integer, ForeignKey('color.id_color',  onupdate='CASCADE'))

    def __init__(self, user, color):
        self.id_user = user
        self.id_color = color

    def json(self):
        color = Color.query.get(self.id_color)
        adopter = Adopter.query.get(self.id_user)
        return {
            'id_relationship':self.id_relationship,
            'color':color.json(),
            'adopter':adopter.json()
        }

    def color(self):
        color = Color.query.get(self.id_color)
        return color.json()

class RelationShipUserSize(db.Model):
    __tablename__ = 'relationship_adopter_size'
    id_relationship = db.Column(db.Integer, primary_key=True)

    id_user = db.Column(db.Integer, ForeignKey('user.id_user',  onupdate='CASCADE'))
    id_size = db.Column(db.Integer, ForeignKey('size.id_size',  onupdate='CASCADE'))

    def __init__(self, user, size):
        self.id_user = user
        self.id_size = size
    
    def size(self):
        size = Size.query.get(self.id_size)
        return size.json()
        

# Peticion

class State(db.Model):
    __tablename__ = 'state'
    id_state = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(70), nullable = False)
    description = db.Column(db.String(500), nullable = False)

    def __init__(self, name, description):
        self.name = name
        self.description = description

    def __repr__(self):
        return f'{self.name}'
    
    def json(self):
        return {
            'id_state' : self.id_state,
            'name':self.name,
            'description' : self.description
            
        }

class RequestPetAdopter(db.Model):
    id_request = db.Column(db.Integer, primary_key=True)
    request_date = db.Column(db.DateTime, nullable = False) 
    edition_date = db.Column(db.DateTime, nullable = False)

    id_state = db.Column(db.Integer, ForeignKey('state.id_state',  onupdate='CASCADE'))
    id_user = db.Column(db.Integer, ForeignKey('adopter.id_adopter',  onupdate='CASCADE'))
    id_pet = db.Column(db.Integer, ForeignKey('pet.id_pet',  onupdate='CASCADE'))

    def __init__(self, request_date, edition_date, id_state, id_user, id_pet):
        self.request_date = request_date
        self.edition_date = edition_date
        self.id_state = id_state
        self.id_user = id_user
        self.id_pet = id_pet
    
    def json(self):
        pet = Pet.query.get(self.id_pet)
        
        return {
            'id_adopter' : self.id_user,
            'pet':pet.json(),
            'id_state':self.id_state,
            'request_date':self.request_date.isoformat(),
            'edition_date':self.edition_date.isoformat(),
            
        }
    
    def request(self):
        state = State.query.get(self.id_state)
        adopter = Adopter.query.get(self.id_user)
        return {
            'state':state.json(),
            'adopter':adopter.json(),
            'request_date':self.request_date.isoformat(),
            'edition_date':self.edition_date.isoformat(),
            
        }


class Status(db.Model):
    __tablename__ = 'status'
    id_status = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(150), nullable = False)

    def __init__(self,titulo):
        self.titulo = titulo



class Image(db.Model):
    id_image = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(70), nullable = False)
    field = db.Column(db.String(300), nullable = False)
    
    id_pet = db.Column(db.Integer, ForeignKey('pet.id_pet',  onupdate='CASCADE'))

