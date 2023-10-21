from flask import Flask
import os


app = Flask(__name__)
DATABASE_HOST = os.environ.get('DATABASE_HOST')

#4wM&EvT32bC
#app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+pymysql://bdi:pepe1234@{DATABASE_HOST}/DameLaPata'
#app.config['SQLALCHEMY_DATABASE_URI']= '''mysql+pymysql://bdi:pepe1234@127.0.0.1/DameLaPata'''
app.config['SQLALCHEMY_DATABASE_URI']= '''mysql+pymysql://root:nP74p06hjKOP2uVhxe5W@containers-us-west-185.railway.app:5841/railway'''

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#mysql -u bdi -p -h damelapata.cqovcicxp88q.us-east-2.rds.amazonaws.com:3306 -D damelapata
