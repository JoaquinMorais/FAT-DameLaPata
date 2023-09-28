from flask import Flask

app = Flask(__name__)
#app.config['SQLALCHEMY_DATABASE_URI']= '''mysql+pymysql://bdi:pepe1234@localhost/DameLaPata'''
app.config['SQLALCHEMY_DATABASE_URI']= '''mysql+pymysql://root:r4vhh1bzuionbb9iBbx4@containers-us-west-64.railway.app:7225/railway'''

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False