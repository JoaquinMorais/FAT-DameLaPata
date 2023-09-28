from flask_mail import Mail
from app import app
main_recipier = 'joaquinmorais2005@gmail.com'

mail_waiwen = Mail(app)

def sendmessage(message):
    with app.app_context():
        mail_waiwen.send(message)
    return True
    