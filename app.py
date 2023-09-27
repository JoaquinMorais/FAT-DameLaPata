from flask import Flask

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']= '''mysql+pymysql://bdi:pepe1234@localhost/DameLaPata'''
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 25
app.config['MAIL_USERNAME'] = 'fat.damelapata@gmail.com'
app.config['MAIL_PASSWORD'] = 'fxawviwmfqxmhdtm'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_DEFAULT_SENDER'] = 'joaquinmorais2005@gmail.com'