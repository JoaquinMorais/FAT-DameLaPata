from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User, Adoptante, Address, Credencial
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request


Login = Blueprint("Login",__name__)




@Login.before_request
def before_request():
    if 'user_id' in session:
        database = User.query.all()
        try:
            user = [x for x in database if x.id_user == session['user_id']][0]
            g.user = user
        except:
            return redirect(url_for('Login.login'))
    else:
        g.user = None

@Login.route("/login",methods=['GET','POST'])
def login():
    session.pop('user_id',None)
    g.user = None
    if request.method == 'POST':

        form = Request('username','password')


        user = User.query.filter_by(username = form['username']).first()
        if not user:
            flash('tonto')
            return redirect(url_for('Login.profile'))
        user_password = Credencial.query.filter_by(id_user = user.getId()).first()
        
        print(form)
        print(f'password {user_password}')
        if user and user_password.campo == form['password']:
            session['user_id'] = user.id_user
            return redirect(url_for('Login.profile'))
        
        return redirect(url_for('Login.login'))
        
        
    return render_template("login/login.html")




@Login.route("/singin",methods=['GET','POST'],endpoint = 'singin')
def singin():
    session.pop('user_id',None)
    if request.method == 'POST':
        form = Request('username','password','province','city','district')



        users = User.query.filter_by(username = form['username']).all()
        
        if users:
            flash(f'Este nombre de usuario ya ha sido seleccionado, intentelo nuevamente')
            return redirect(url_for('Login.singin'))
        
        else:
            address = Address(form['province'],form['city'],form['district'],'1','1')
            db.session.add(address)
            db.session.commit()

            user = User(form['username'],f'{ form["username"] }@gmail.com',address.id_address)
            
            db.session.add(user)
            db.session.commit()
            
            user_password = Credencial('password',form['password'],'normal',user.getId())
            db.session.add(user_password)

            db.session.commit()

            session['user_id'] = user.getId()
        
        return redirect(url_for('Login.profile'))
        
    flash('')
    return render_template("login/singin.html")



@Login.route("/profile", endpoint = 'profile')
def profile():
    if not g.user:
        return redirect(url_for('Login.login'))
    return jsonify(g.user.username,g.user.email)


