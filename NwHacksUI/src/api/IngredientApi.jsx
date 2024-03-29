import instance from './Axioss'

export const ingredientsApi = {
  getIngredients,
  addIngredient,
  getIngredientInfo,
  deleteIngredient
}

function getIngredients(user) {
  const url =`/ingredient?user_id=${user.sub}`;
  // const url =`/ingredient?user_id=google-oauth2|114710454896359065665`;
  return instance.get(url);
}

// ingredient is an object
function addIngredient(user, ingredient) {
  const url = `/ingredient?user_id=${user.sub}`;
  // let url =`/ingredient?user_id=google-oauth2|114710454896359065665`;
  return instance.post(url, ingredient, {
    headers: {
      'Content-type': 'application/json',
    }
  });
}


function getIngredientInfo(ingredient_name) {
  const url = `/ingredient/info/${ingredient_name}`;
  return instance.get(url);
}

function deleteIngredient(user, ingredientName) {
  const url = `/ingredient?user_id=${user.sub}&item=${ingredientName}`
  return instance.delete(url)
}