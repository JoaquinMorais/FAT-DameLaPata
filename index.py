from app import app
from utils.db import db
from models.users import *

from routes.home import Home
from routes.login import Login

with app.app_context():
    db.create_all()

app.register_blueprint(Home)
app.register_blueprint(Login)

if __name__ == '__main__':
    app.run(debug=True)