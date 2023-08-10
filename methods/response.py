from flask import jsonify

def response(response,status):
    return jsonify(
        {
            'response' : response,
            'status' : status
        }
    )
