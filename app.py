from flask import Flask

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']= '''mysql+pymysql://bdi:pepe1234@localhost/DameLaPata'''
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False