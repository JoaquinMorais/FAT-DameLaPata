from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User, Adopter, Shelter, Address, Credencial
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.encrypt import Encrypt


ShelterRegister = Blueprint("ShelterRegister",__name__)



@ShelterRegister.route("/shelter/register",methods=['POST'],endpoint = 'register_shelter')
def register_shelter():
    session.pop('user_id',None)
    
    data = Request('username','name','password','email','province','city','district')

    users = User.query.filter_by(username = data['username']).all()
        
    if users:
        return jsonify({"error":"User already exists"}), 409
    
    address = Address(data['province'],data['city'],data['district'],'1','1')
    db.session.add(address)
    db.session.commit()
    
    user = Shelter(data['username'], data["email"],address.id_address,data['name'])
    
    db.session.add(user)
    db.session.commit()

    user_password = Credencial('password',Encrypt(data['password']) ,'shelter',user.getId())
    
    db.session.add(user_password)
    db.session.commit()

    session['user_id'] = user.getId()
    
    return jsonify({
        'id':session['user_id'],
        'email' : user.email,
    })
        
