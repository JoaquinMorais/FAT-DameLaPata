from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User, Adoptante, Address, Credencial, Pet, Size
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request


Refugio_AddPet = Blueprint("Refugio_AddPet",__name__)

@Refugio_AddPet.route("/sizes",methods=['GET','POST'])
def sizes():
    
    db.session.add(Size('Chico',1,2,3,4))
    db.session.add(Size('Mediano',1,2,3,4))
    db.session.add(Size('Grande',1,2,3,4))
    db.session.commit()
    return redirect(url_for('Refugio_AddPet.addPet'))


@Refugio_AddPet.route("/add-pet",methods=['GET','POST'])
def addPet():
    if request.method == 'POST':
        form = Request('name','size','birthdate')

        pet = Pet(form['name'],form['birthdate'],int(form['size']))

        db.session.add(pet)
        db.session.commit()

        return form
        
        
    return render_template("addPet.html")












