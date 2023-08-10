from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User, Adopter, Shelter, Address, Credencial
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request
from methods.encrypt import Encrypt



AdopterRegister = Blueprint("AdopterRegister",__name__)




  
@AdopterRegister.route("/adopter/register",methods=['POST'],endpoint = 'register_adopter')
def register_adopter():
    session.pop('user_id',None)
    
    data = Request('username','password','province','city','district','email','name','surname','birthdate','phone_number','id_document_type','document')

    users = User.query.filter_by(username = data['username']).all()
    
    if users:
        return jsonify({"error":"User already exists"}), 409
        
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
    
    return jsonify({
        'id':session['user_id'],
        'email' : user.email,
    })
        