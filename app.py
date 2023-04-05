from flask import Flask

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']= 'mysql+pymysql://root:beJvOMgEHzwFR3auDigL@containers-us-west-114.railway.app:7357/railway'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False