from app import app
from utils.db import db
from flask_cors import CORS, cross_origin

app.config.update(
SECRET_KEY='MyUltraDupaSecretKey'
)


CORS(app, supports_credentials=True, resources={
    r"/*": {"origins": "*", "methods": ["GET", "POST", "PUT", "DELETE"]},
    r"/login": {"origins": "http://localhost:3000", "methods": ["POST"]}
});
#adopter
from routes.adopter.register import AdopterRegister
from routes.adopter.request import AdopterRequest
from routes.adopter.edit import AdopterEdit
#adopter/tastes
from routes.adopter.tastes.tastesColors import AdopterTastesColors
from routes.adopter.tastes.tastesSizes import AdopterTastesSizes
from routes.adopter.tastes.tastesAll import AdopterTastesAll
#shelter
from routes.shelter.register import ShelterRegister
from routes.shelter.request import ShelterRequest
from routes.shelter.edit import ShelterEdit
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
from routes.user.request import UserRequest
from routes.home import Home
from routes.user.user import AnotherUser

#developing
from routes.developing.developing import Developing



with app.app_context():
    db.create_all()

#adopter
app.register_blueprint(AdopterRegister)
app.register_blueprint(AdopterRequest)
app.register_blueprint(AdopterEdit)
#adopter/tastes
app.register_blueprint(AdopterTastesColors)
app.register_blueprint(AdopterTastesSizes)
app.register_blueprint(AdopterTastesAll)
#shelter
app.register_blueprint(ShelterRegister)
app.register_blueprint(ShelterRequest)
app.register_blueprint(ShelterEdit)
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
app.register_blueprint(UserRequest)
app.register_blueprint(Home)
app.register_blueprint(AnotherUser)

app.register_blueprint(Close_account)

if __name__ == "__main__":
    app.run(debug=True)
