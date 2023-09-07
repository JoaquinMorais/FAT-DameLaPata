from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import *
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.response import Response

Developing = Blueprint("Developing",__name__)

@Developing.route("/clearUser/<id_user>",methods=['GET','POST'])
def clearUser(id_user):
    user = User.query.filter(User.id_user == id_user).first()
    print(user.id_status)
    user.id_status = 2
    db.session.commit()
    print(user.id_status)
    #user = User.query.all()
    print(user)
    return 'vas a trabajar con prints'

@Developing.route("/populate",methods=['GET','POST'])
def populate():
    
    db.session.add(Size('Chico',1,2,3,4))
    db.session.add(Size('Mediano',1,2,3,4))
    db.session.add(Size('Grande',1,2,3,4))
    db.session.add(Color('golden', 'qsy dorado'))
    db.session.add(Characteristics('bonito', 'bonituwu'))
    db.session.commit()
    
    #db.session.add(Pet('muchi',  datetime.strptime('7/11/2011', '%m/%d/%Y'), 3))
    #db.session.commit()
    
    '''db.session.add(RelationShipPetColor(1, 1))
    db.session.add(RelationShipPetCharacteristics(1, 1))
    db.session.commit()'''

    db.session.add(DocumentType('dni','soy un dni'))
    db.session.add(State('Activo', 'Lorem ipsum'))
    db.session.add(State('Inactivo', 'Lorem ipsum2'))
    db.session.add(DocumentType('A', 'a'))
    db.session.add(Address('a', 'a', 'a', 'a', 'a'))
    
    
    db.session.commit()
    db.session.add(User('Alejito', 'Diaz', 1, 1))
    db.session.commit()
    
    return 'a'


