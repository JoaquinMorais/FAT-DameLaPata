from flask import jsonify

def Response(response,status):
    return jsonify(
        {
            'response' : response,
            'status' : status
        }
    )
