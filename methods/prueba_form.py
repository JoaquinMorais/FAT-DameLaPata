# Importaciones
from apiclient import discovery
from httplib2 import Http
from oauth2client.service_account import (
    ServiceAccountCredentials
)

# Variables
scopes = "https://www.googleapis.com/auth/forms.body"
discovery_doc = "https://forms.googleapis.com/$discovery/rest?version=v1"

creds = ServiceAccountCredentials.from_json_keyfile_name(
    'credentials.json',
    scopes
)

http = creds.authorize(Http()) 