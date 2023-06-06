from utils.db import db
from sqlalchemy import Column, Integer, String, Date, func, ForeignKey
from datetime import datetime

class TipoDocumento(db.Model):
    __tablename__ = 'tipodocumento'
    id_documento = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(70), nullable = False)
    descripcion = db.Column(db.String(500), nullable = False)

    def __init__(self, nombre, descripcion):
        self.nombre = nombre
        self.descripcion = descripcion

    def __repr__(self):
        return f'{self.nombre}'

class Direccion(db.Model):
    __tablename__ = 'direccion'
    id_direccion = db.Column(db.Integer, primary_key=True)
    localidad = db.Column(db.String(70), nullable = False)
    barrio = db.Column(db.String(70), nullable = False)
    calle = db.Column(db.String(70), nullable = False)
    altura = db.Column(db.String(70), nullable = False)
    
    def __init__(self, localidad, barrio, calle, altura):
        self.localidad = localidad
        self.barrio = barrio
        self.calle = calle
        self.altura = altura

    def __repr__(self):
        return f'{self.titulo}'
    

class Persona(db.Model): # se pueden hacer las querys
    __tablename__ = 'persona'
    id_persona = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(70), nullable = False)
    apellido = db.Column(db.String(70), nullable = False)
    username = db.Column(db.String(70), nullable = False)
    contrasenia = db.Column(db.String(70), nullable = False)
    fecha_nacimiento = db.Column(db.Date, nullable = False)
    telefono = db.Column(db.String(70), nullable = False)
    mail = db.Column(db.String(150), nullable = False)

    id_direccion = db.Column(db.Integer, ForeignKey('direccion.id_direccion', ondelete='SET NULL', onupdate='CASCADE'))
    id_tipodocumento = db.Column(db.Integer, ForeignKey('tipodocumento.id_tipodocumento', ondelete='SET NULL', onupdate='CASCADE'))

    def __init__(self,nombre, apellido, username, contrasenia, fecha_nacimiento, telefono, mail, id_direccion, id_tipodocumento):
        self.nombre = nombre
        self.apellido = apellido
        self.username = username
        self.contrasenia = contrasenia
        self.fecha_nacimiento = fecha_nacimiento
        self.telefono = telefono
        self.mail = mail
        self.id_direccion = id_direccion
        self.id_tipodocumento = id_tipodocumento

    def __repr__(self):
        return f'Nombre: {self.nombre}, Apellido: {self.apellido}\n'
    

class Tamanio(db.Model):
    __tablename__ = 'tamanio'
    id_tamanio = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(70), nullable = False)
    max_long = db.Column(db.Integer, nullable = False)
    min_long = db.Column(db.Integer, nullable = False)
    max_alt = db.Column(db.Integer, nullable = False)
    min_alt = db.Column(db.Integer, nullable = False)

    def __init__(self, titulo, max_long, min_long, max_alt, min_alt):
        self.titulo = titulo
        self.max_long = max_long
        self.min_long = min_long
        self.max_alt = max_alt
        self.min_alt = min_alt

    def __repr__(self):
        return f'{self.titulo}'


class Color(db.Model):
    __tablename__ = 'color'
    id_color = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(70), nullable = False)
    descripcion = db.Column(db.String(500), nullable = False)
    
    def __init__(self, titulo, descripcion):
        self.titulo = titulo
        self.descripcion = descripcion

    def __repr__(self):
        return f'{self.titulo}'
    

class Caracteristica(db.Model):
    __tablename__ = 'caracteristica'
    id_caracteristica = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(70), nullable = False)
    descripcion = db.Column(db.String(500), nullable = False)

    def __init__(self, titulo, descripcion):
        self.titulo = titulo
        self.descripcion = descripcion

    def __repr__(self):
        return f'{self.titulo}'
    

class Mascota(db.Model):
    __tablename__ = 'mascota'
    id_mascota = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(70), nullable = False)
    fecha_nacimiento = db.Column(db.Date, nullable = True)

    id_tamanio = db.Column(db.Integer, ForeignKey('tamanio.id_tamanio', ondelete='SET NULL', onupdate='CASCADE'))

    def __init__(self, nombre, fecha_nacimiento, tamanio):
        self.nombre = nombre
        self.fecha_nacimiento = fecha_nacimiento
        self.id_tamanio = tamanio

    def __repr__(self):
        return f'{self.nombre}'

# caracteristicas de las mascotas:

class RelacionMascotaColor(db.Model):
    __tablename__ = 'relacionmascotacolor'
    id_relacion = db.Column(db.Integer, primary_key=True)
    
    id_mascota = db.Column(db.Integer, ForeignKey('mascota.id_mascota', ondelete='SET NULL', onupdate='CASCADE'))
    id_color = db.Column(db.Integer, ForeignKey('color.id_color', ondelete='SET NULL', onupdate='CASCADE'))

    def __init__(self, mascota, color):
        self.id_mascota = mascota
        self.id_color = color


class RelacionMascotaCaracteristica(db.Model):
    __tablename__ = 'relacionmascotacaracteristica'
    id_relacion = db.Column(db.Integer, primary_key=True)

    id_mascota = db.Column(db.Integer, ForeignKey('mascota.id_mascota', ondelete='SET NULL', onupdate='CASCADE'))
    id_caracteristica = db.Column(db.Integer, ForeignKey('caracteristica.id_caracteristica', ondelete='SET NULL', onupdate='CASCADE'))

    def __init__(self, mascota, caracteristica):
        self.id_mascota = mascota
        self.id_caracteristica = caracteristica

# caracteristicas deseadas de la persona:

class RelacionPersonaColor(db.Model):
    __tablename__ = 'relacionpersonacolor'
    id_relacion = db.Column(db.Integer, primary_key=True)

    id_persona = db.Column(db.Integer, ForeignKey('persona.id_persona', ondelete='SET NULL', onupdate='CASCADE'))
    id_color = db.Column(db.Integer, ForeignKey('color.id_color', ondelete='SET NULL', onupdate='CASCADE'))

    def __init__(self, persona, color):
        self.id_persona = persona
        self.id_color = color


class RelacionPersonaTamanio(db.Model):
    __tablename__ = 'relacionpersonacaracteristica'
    id_relacion = db.Column(db.Integer, primary_key=True)

    id_persona = db.Column(db.Integer, ForeignKey('persona.id_persona', ondelete='SET NULL', onupdate='CASCADE'))
    id_tamanio = db.Column(db.Integer, ForeignKey('tamanio.id_tamanio', ondelete='SET NULL', onupdate='CASCADE'))

    def __init__(self, persona, tamanio):
        self.id_persona = persona
        self.id_tamanio = tamanio

# Peticion

class Estado(db.Model):
    __tablename__ = 'estado'
    id_estado = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(70), nullable = False)
    descripcion = db.Column(db.String(500), nullable = False)

    def __init__(self, nombre, descripcion):
        self.nombre = nombre
        self.descripcion = descripcion

    def __repr__(self):
        return f'{self.nombre}'

class Peticion(db.Model):
    id_peticion = db.Column(db.Integer, primary_key=True)
    fecha_creacion = db.Column(db.Date, nullable = False) 
    fecha_edicion = db.Column(db.Date, nullable = False)

    id_estado = db.Column(db.Integer, ForeignKey('estado.id_estado', ondelete='SET NULL', onupdate='CASCADE'))
    id_persona = db.Column(db.Integer, ForeignKey('persona.id_persona', ondelete='SET NULL', onupdate='CASCADE'))
    id_mascota = db.Column(db.Integer, ForeignKey('mascota.id_mascota', ondelete='SET NULL', onupdate='CASCADE'))

    def __init__(self, fecha_creacion, fecha_edicion, id_estado, id_persona, id_mascota):
        self.fecha_creacion = fecha_creacion
        self.fecha_edicion = fecha_edicion
        self.id_estado = id_estado
        self.id_persona = id_persona
        self.id_mascota = id_mascota
# alejo labura epicamente
# primer commit de 'feature'