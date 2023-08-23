from app import app
from utils.db import db
from flask_cors import CORS, cross_origin

app.config.update(
SECRET_KEY='MyUltraDupaSecretKey'
)


cors = CORS(app, supports_credentials=True,resources={r"/*": {"origins": "*"}})

#adopter
from routes.adopter.register import AdopterRegister
#shelter
from routes.shelter.register import ShelterRegister
#pet
from routes.pets.pet import OnePet
from routes.pets.pets import Pets
#pet/info
from routes.pets.info.sizes import PetInfoSizes
from routes.pets.info.colors import PetInfoColors
from routes.pets.info.characteristics import PetInfoCharacteristics
#user
from routes.user.login import Login
from routes.user.logout import Logout
from routes.user.profile import Profile
from routes.user.close_account import Close_account
#developing
from routes.developing.developing import Developing


with app.app_context():
    db.create_all()

#adopter
app.register_blueprint(AdopterRegister)
#shelter
app.register_blueprint(ShelterRegister)
#pet
app.register_blueprint(OnePet)
app.register_blueprint(Pets)
#pet/info
app.register_blueprint(PetInfoSizes)
app.register_blueprint(PetInfoColors)
app.register_blueprint(PetInfoCharacteristics)
#user
app.register_blueprint(Login)
app.register_blueprint(Logout)
app.register_blueprint(Profile)
app.register_blueprint(Close_account)
#developing
app.register_blueprint(Developing)

if __name__ == '__main__':
    app.run(debug=True, port=5000)