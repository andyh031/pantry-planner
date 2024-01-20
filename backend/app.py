from pymongo.mongo_client import MongoClient
from pymongo.server_api import ***REMOVED***erverApi
import json

from flask import Flask, render_template, request, url_for, redirect
from flask_cors import COR***REMOVED***
app = Flask(__name__)
COR***REMOVED***(app)

uri = "mongodb+srv://Bubble***REMOVED***ort:Bubble***REMOVED***ortAwesome@testcluster.wdw9274.mongodb.net/?retryWrites=true&w=majority"

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


@app.route('/movie/', methods=['PO***REMOVED***T'])
def post_project():
    post_data = json.loads(request.data)
    db.movies.insert_one(post_data)
    return "done"

