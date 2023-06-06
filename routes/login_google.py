from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash
from models.users import User
from utils.db import db

Login_Google = Blueprint("Login_Google",__name__)
@Login_Google.route("/login")
def Login():
    return 'a'