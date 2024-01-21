import instance from './Axioss'


export const recipeApi = {
  createRecipe,
  findRecipeGivenIngredients,
  searchRecipes
}

// recipe is object
function createRecipe(user, recipe) {
  const url =`/recipe?user_id=${user.sub}`;
  // const url = `/recipe?user_id=google-oauth2|114710454896359065665`
  return instance.post(url, recipe, {
    headers: {
      'Content-type': 'application/json',
    }
  });
}

// function getRecipe(user) {
//   const url = `/recipe/user_id=${user.sub}`;
//   return instance.get(url);
// }

// ingredients is an array of strings (ex. ['banana', 'fish'])
function findRecipeGivenIngredients(ingredients) {
  const url = `/recipe/contains-ingredients`
  return instance.post(url, ingredients, {
    headers: {
      'Content-type': 'application/json',
    }
  });
}

function searchRecipes(inputString) {
  const url = `/recipe/search?search_string=${inputString}`
  return instance.get(url)
}