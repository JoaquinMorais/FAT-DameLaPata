import crypt
import hashlib


def Encrypt(text):
    salt = '$6$8Rl2MEpW.EObr3Se$dmp66u8dxv0DudM6d1s4hIDC5anT6mVou9kkRdOCYoLuUxPgj.BW5RIUqlPWXZUu5F91nYx3RYsmy6DY0zYfu/'
    
    salted_text = text + salt 

    hashed_text = hashlib.sha256(salted_text.encode()).hexdigest()

    
    return hashed_text

