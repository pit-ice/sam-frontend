const TOKEN_KEY = 'vrd_access_token';
const USER_KEY = 'vrd_user';

export const getToken = () => {
  return window.localStorage.getItem(TOKEN_KEY);
};

export const saveToken = (token) => {
  window.localStorage.setItem(TOKEN_KEY, token);
};

export const getUser = () => {
  let user = window.localStorage.getItem(USER_KEY) || '{}';
  return JSON.parse(user);
};

export const saveUser = (user) => {
  window.localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const destroy = () => {
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem(USER_KEY);
};

export default { getToken, saveToken, getUser, saveUser, destroy };
