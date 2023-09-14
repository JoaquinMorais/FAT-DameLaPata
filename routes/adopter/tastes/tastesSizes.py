from flask import Blueprint,render_template,redirect,url_for,request,session,g,abort,flash, jsonify
from models.models import *
from utils.db import db
from decorators.flask_decorators import * 
from methods.requests import Request, RequestList
from methods.response import Response

AdopterTastesSizes = Blueprint("AdopterTastesSizes",__name__)



@AdopterTastesSizes.route("/adopter/tastes/sizes",methods=['GET'],endpoint = 'getTasteSizes')
@login_is_required(session)
def getTasteSizes():
    tastesSizes = RelationShipUserSize.query.filter(
        RelationShipUserSize.id_user == session['user_id']
    )
    
    return Response(
        [tasteSize.size() for tasteSize in tastesSizes],
        200
    )


@AdopterTastesSizes.route("/adopter/tastes/sizes",methods=['PUT'],endpoint = 'putTasteSizes')
@login_is_required(session)
def putTasteSizes():
    id_size = Request('id_size')
    
    size = Size.query.get(id_size)
    if not size:
        return Response(
            'Bad Request size not found',
            400
        )
    
    before_tasteSize = RelationShipUserSize.query.filter(
        RelationShipUserSize.id_size == id_size,
        RelationShipUserSize.id_user == session['user_id']
    ).first()
    if before_tasteSize:
        return Response(
            'This size had already been added previously ',
            200
        )
    
    tasteSize = RelationShipUserSize(session['user_id'],id_size)
    if not tasteSize:
        return Response(
            'Bad Request cant create taste size',
            404
        )
    db.session.add(
        tasteSize
    )
    db.session.commit()


    return Response(
        tasteSize.size(),
        200
    )

@AdopterTastesSizes.route("/adopter/tastes/sizes",methods=['DELETE'],endpoint = 'deleteTasteSizes')
@login_is_required(session)
def deleteTasteSizes():
    id_size = Request('id_size')
    
    size = Size.query.get(id_size)
    if not size:
        return Response(
            'Bad Request size not found',
            400
        )
    
    tasteSize = RelationShipUserSize.query.filter(
        RelationShipUserSize.id_size == id_size,
        RelationShipUserSize.id_user == session['user_id']
    ).first()

    if not tasteSize:
        return Response(
            'Bad Request. This taste doesnt exists',
            400
        )
    
    db.session.delete(tasteSize)
    db.session.commit()

    return Response(
        'Successful',
        200
    )
