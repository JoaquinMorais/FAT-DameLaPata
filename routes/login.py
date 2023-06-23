from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import User, Adoptante, Address, Credencial
from utils.db import db

Login = Blueprint("Login",__name__)




@Login.before_request
def before_request():
    if 'user_id' in session:
        database = User.query.all()
        try:
            user = [x for x in database if x.id_user == session['user_id']][0]
            g.user = user
        except:
            pass
    else:
        g.user = None

@Login.route("/login",methods=['GET','POST'])
def login():
    if request.method == 'POST':
        session.pop('user_id',None)
        username = request.form['username']
        password = request.form['password']


        database = User.query.all()

        user = User.query.filter_by(username = username).first()

        user_password = Credencial.query.filter_by(id_user = user.getId()).first()
        
        print(f'password {user_password}')
        if user!=None and user_password.campo == password:
            session['user_id'] = user.id_user
            return redirect(url_for('Login.profile'))
        return redirect(url_for('Login.login'))
        
        
    return render_template("login/login.html")




@Login.route("/singin",methods=['GET','POST'])
def singin():
    if request.method == 'POST':
        session.pop('user_id',None)
        username = request.form['username']
        password = request.form['password']

        database = User.query.all()
        user = [x for x in database if x.username == username]
        if len(user)!=0:
            flash(f'Este nombre de usuario ya ha sido seleccionado, intentelo nuevamente')
            return redirect(url_for('Login.singin'))
        
        else:
            address = Address('ub','districto','2121','2121')
            db.session.add(address)
            user = User(username,f'{username}@gmail.com',1)
            db.session.add(user)
            user_password = Credencial('password',password,'normal',user.getId())
            print(user.id_user)
            print(address.id_address)
            
            db.session.add(user_password)

            db.session.commit()

            session['user_id'] = User.query.all()[-1].id_user
        return redirect(url_for('Login.profile'))
        
    flash('')
    return render_template("login/singin.html")



@Login.route("/profile", endpoint = 'profile')
def profile():
    if not g.user:
        return redirect(url_for('Login.login'))
    return g.user.username


