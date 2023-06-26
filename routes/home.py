from flask import Blueprint, jsonify,render_template,redirect,url_for
from utils.db import db
from flask import send_from_directory
import os
from models.models import *


Home = Blueprint("Home",__name__, static_folder="static")

@Home.route('/', defaults={'path': ''})
@Home.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(Home.static_folder + '/' + path):
        return send_from_directory(Home.static_folder, path)
    else:
        return send_from_directory(Home.static_folder, 'static/index.html')

@Home.route("/db/traer")
def traer():
    pets = Pet.query.all()
    data = []
    for i in pets:
        size_json = {
            'title':i.pet_size.title,
        }
        characteristics = []
        colors = []
        for x in i.pet_characteristics:
            characteristics.append(
                {
                    'titulo':x.characteristics_value.title,
                    'valor':x.characteristics_value.description
                }
            )
        for x in i.pet_colors:
            colors.append(
                {
                    'titulo':x.color_value.title,
                    'valor':x.color_value.description
                }
            )


        data.append(
            {
                'id':i.id_pet,
                'name':i.name,
                'birthdate':i.birth_date,
                'size':size_json,
                'caracteristics':characteristics,
                'colors':colors
            }
        )

    return jsonify(data)



@Home.route('/api/data')
def api_data():
    data = {
        'message': 'fds'
    }
    return jsonify(data)





