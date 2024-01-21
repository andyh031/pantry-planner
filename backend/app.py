from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ***REMOVED***erverApi
from bson import ObjectId
import json
import requests
import os

from flask import Flask, render_template, request, url_for, redirect, Response, jsonify
from flask_cors import COR***REMOVED***
app = Flask(__name__)
COR***REMOVED***(app)

load_dotenv()

uri = os.environ['MONGO_URI']

# Create a new client and connect to the server
client = MongoClient(uri, server_api=***REMOVED***erverApi('1'))

db = client.nwHacks2024

data = db.user.find()
for record in data:
    print(record)


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

# @app.route('/movie', methods=['PO***REMOVED***T'])
# def post_project():
#     post_data = json.loads(request.data)
#     db.movies.insert_one(post_data)
#     return


def getUserIdFromUser***REMOVED***ub(sub):
    user_obj_id = db.user.find_one({"sub": sub})
    return user_obj_id['_id']

@app.route('/user', methods=['PO***REMOVED***T'])
def create_user():
    user = json.loads(request.data)
    user_id = user["sub"]
    existing_user = db.user.find({"sub": user_id})
    if existing_user is None:
        return Response(status=404)
    else:
        print("adding user")
        db.user.insert_one(user)
        return Response(status=200)


@app.route('/ingredient', methods=['GET'])
def get_ingredients():
    user_id = getUserIdFromUser***REMOVED***ub(request.args.get('user_id'))

    ingredients = list(db.ingredient.find({"user_id": user_id}))
    for ingredient in ingredients:
        ingredient['_id'] = str(ingredient['_id'])
        ingredient['user_id'] = str(ingredient['user_id'])

    return jsonify(ingredients)


@app.route('/recipe', methods=['PO***REMOVED***T'])
def create_recipe():
    user_id = getUserIdFromUser***REMOVED***ub(request.args.get('user_id'))
    recipe = json.loads(request.data)
    db.insert_one()




if __name__ == "__main__":
    app.debug = True
    app.run()