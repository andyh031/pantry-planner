import instance from './Axioss'

export const userApi = {
  createUser,
}

function createUser(user) {
  const url ='/user';
  return instance.post(url, user)
  .catch((error) => console.log(error));
}