from app import app
from utils.db import db

from routes.home import Home
from routes.login import Login
from routes.login_google import Login_Google

app.config.update(
SECRET_KEY='MySecretKey'
)

with app.app_context():
    db.create_all()

app.register_blueprint(Login)
app.register_blueprint(Login_Google)
app.register_blueprint(Home)

if __name__ == '__main__':
    app.run(debug=True)