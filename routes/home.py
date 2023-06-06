from flask import Blueprint, jsonify,render_template,redirect,url_for
from models.users import ExampleDatabase
from utils.db import db
from flask import send_from_directory
import os


Home = Blueprint("Home",__name__, static_folder="static")

@Home.route('/', defaults={'path': ''})
@Home.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(Home.static_folder + '/' + path):
        return send_from_directory(Home.static_folder, path)
    else:
        return send_from_directory(Home.static_folder, 'static/index.html')


@Home.route("/db/añadir")
def añadir():
    newInstance = ExampleDatabase('Coca cola','Bebida bebible')
    db.session.add(newInstance)
    db.session.commit()
    return redirect(url_for('Home.getHome'))

@Home.route("/db/traer")
def traer():
    database = ExampleDatabase.query.all()
    print(database)
    return redirect(url_for('Home.getHome'))



@Home.route('/api/data')
def api_data():
    data = {
        'message': 'fds'
    }
    return jsonify(data)
