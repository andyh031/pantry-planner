from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ***REMOVED***erverApi
import json
import requests
import os

from flask import Flask, render_template, request, url_for, redirect
from flask_cors import COR***REMOVED***
app = Flask(__name__)
COR***REMOVED***(app)


# Create a new client and connect to the server
client = MongoClient(uri, server_api=***REMOVED***erverApi('1'))

db = client.sample_mflix

data = db.movies.find().limit(3)

@app.route('/<name>', methods=['GET'])
def hello_world(name):
    return f'<h1>Hello, {name}! :D<h1>'


@app.route('/projects')
def list_projects():
    return "hello"

@app.route("/", methods=["GET"])
def get_item(item):
    api_url = 'https://api.api-ninjas.com/v1/nutrition?query={}'.format(item)
    response = requests.get(api_url, headers={'X-Api-Key': os.environ['API_KEY']})
    if response.status_code == requests.codes.ok:
        print(response.text)
    else:
        print("Error:", response.status_code, response.text)

@app.route('/movie/', methods=['PO***REMOVED***T'])
def post_project():
    post_data = json.loads(request.data)
    db.movies.insert_one(post_data)
    return "done"

if __name__ == "__main__":
    app.debug = True
    app.run()