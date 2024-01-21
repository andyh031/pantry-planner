import instance from './Axioss'

export const userApi = {
  createUser,
  getCalories,
  updateCalories
}

function createUser(user) {
  const url ='/user';
  return instance.post(url, user);
}

function getCalories(user) {
  const url = `/user/calorie_limit?user_id=${user.sub}`
  return instance.get(url)
}

function updateCalories(user, cals) {
  const url = `/user/calorie_limit?user_id=${user.sub}&calories=${cals}`
  return instance.put(url)
}