from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson import ObjectId
import json
import requests
import os

from flask import Flask, render_template, request, url_for, redirect, Response, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

load_dotenv()

uri = os.environ['MONGO_URI']

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

db = client.nwHacks2024

# @app.route('/<name>', methods=['GET'])
# def hello_world(name):
#     return f'<h1>Hello, {name}! :D<h1>'


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

# @app.route('/movie', methods=['POST'])
# def post_project():
#     post_data = json.loads(request.data)
#     db.movies.insert_one(post_data)
#     return


def getUserIdFromUserSub(sub):
    user_obj_id = db.user.find_one({"sub": sub})
    return user_obj_id['_id']


@app.route('/user', methods=['POST'])
def create_user():
    user = json.loads(request.data)
    user_id = user["sub"]
    existing_user = db.user.find_one({"sub": user_id})
    if existing_user is None:
        print("adding user")
        db.user.insert_one(user)
        return Response(status=200)
    else:
        return Response(status=409)



@app.route('/ingredient', methods=['GET'])
def get_ingredients():
    user_id = getUserIdFromUserSub(request.args.get('user_id'))

    ingredients = list(db.ingredient.find({"user_id": user_id}))
    for ingredient in ingredients:
        ingredient['_id'] = str(ingredient['_id'])
        ingredient['user_id'] = str(ingredient['user_id'])

    return jsonify(ingredients)


@app.route('/recipe', methods=['POST'])
def create_recipe():
    user_id = getUserIdFromUserSub(request.args.get('user_id'))
    recipe = request.data
    recipe = json.loads(recipe)
    recipe["user_id"] = user_id
    db.recipe.insert_one(recipe)
    return Response(status=200)


@app.route("/ingredient", methods=['POST'])
def add_ingredient():
    user_id = getUserIdFromUserSub(request.args.get('user_id'))
    ingredient = json.loads(request.data)
    existing_user = db.user.find({"sub": user_id})
    if existing_user is None:
        return Response(status=404)
    else:
        ingredient["user_id"] = user_id
        db.ingredient.insert_one(ingredient)
        return Response(status=200)


@app.route("/recipe", methods=['GET'])
def get_recipes():
    recipes = list(db.recipe.find())
    for recipe in recipes:
        recipe['_id'] = str(recipe['_id'])
        recipe['user_id'] = str(recipe['user_id'])

    return jsonify(recipes)
    


def get_five_ingredients(query):
    api_url = 'https://api.api-ninjas.com/v1/nutrition?query={}'.format(query)
    response = requests.get(api_url, headers={'X-Api-Key': os.environ['API_KEY']})
    if response.status_code == requests.codes.ok:
        ingredient_data = response.json()
        ingredients = ingredient_data[:5]
        return ingredients
    else:
        print("didn't work")


@app.route('/ingredient/info/<ingredient>', methods=['GET'])
def get_ingredient(ingredient):
    ingredients = get_five_ingredients(ingredient)
    return jsonify(ingredients)


# returns a list of recipes that contains only the given ingredients
@app.route("/recipe/contains-ingredients", methods=['POST'])
def findRecipesGivenIngredient():
    ingredients = json.loads(request.data)
    query = {
                'ingredients': {
                    '$all': ingredients,
                    '$size': len(ingredients)
                }
    }
    recipes = list(db.recipe.find(query))
    for recipe in recipes:
        recipe['_id'] = str(recipe['_id'])
        recipe['user_id'] = str(recipe['user_id'])

    return jsonify(recipes)






if __name__ == "__main__":
    app.debug = True
    app.run()