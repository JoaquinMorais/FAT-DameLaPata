from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User, Adopter, Shelter, Address, Credencial
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.encrypt import Encrypt
from methods.response import Response
from methods.requests import Request

AdopterRegister = Blueprint("AdopterRegister",__name__)
  
@AdopterRegister.route("/adopter/register",methods=['PUT'],endpoint = 'register_adopter')
def register_adopter():
    session.pop('user_id',None)
    session.pop('user_type',None)
    
    data = Request('username','password','province','city','district','email','name','surname','birthdate','phone_number','id_document_type','document')
    for x in data:
        print({x: data[x]})
        if data[x] == None:
            return Response(
                'Error: Bad Request',
                404
            )
    users = User.query.filter_by(username = data['username']).all()
    
    if users:
        return Response(
            'Error: User already exists',
            409
        )
        
    address = Address(data['province'],data['city'],data['district'],'1','1')
    db.session.add(address)
    db.session.commit()
    
    user = Adopter(data['username'],data["email"],address.id_address,data["name"],data["surname"],data["birthdate"],data["phone_number"],data["id_document_type"],data["document"])
    
    db.session.add(user)
    db.session.commit()
            
    user_password = Credencial('password',Encrypt(data['password']) ,'normal',user.getId())
    db.session.add(user_password)

    db.session.commit()

    session['user_id'] = user.getId()
    session['user_type'] = user.this_type()
    print(session['user_id'])
    
    return Response(
        user.json(),
        200
    )
        