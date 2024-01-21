import instance from './Axioss'


export const recipeApi = {
  createRecipe,
  getRecipe,
  findRecipeGivenIngredients
}

// recipe is object
function createRecipe(user, recipe) {
  const url =`/recipe/user_id?${user.sub}`;
  return instance.post(url, recipe, {
    headers: {
      'Content-type': 'application/json',
    }
  });
}

function getRecipe(user) {
  const url = `/recipe/user_id?${user.sub}`;
  return instance.get(url);
}

// ingredients is an array of strings (ex. ['banana', 'fish'])
function findRecipeGivenIngredients(ingredients) {
  return instance.post(url, ingredients, {
    headers: {
      'Content-type': 'application/json',
    }
  });
}