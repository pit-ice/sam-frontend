const TOKEN_KEY = 'vrd_access_token';
const USER_KEY = 'vrd_user';

//회원 가입 스텝별 저장
const AGREE = 'vrd_agree';

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
export const saveRegister = (data) => {
  window.localStorage.setItem(AGREE, JSON.stringify(data));
};

export const getRegister = () => {
  let agree = window.localStorage.getItem(AGREE) || '{}';
  return JSON.parse(agree);
};
export const destoryRegister = () => {
  window.localStorage.removeItem(AGREE);
};

export default { getToken, saveToken, getUser, saveUser, destroy, saveRegister, getRegister, destoryRegister };
