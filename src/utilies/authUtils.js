import Cookies from 'js-cookie';

export const getToken = () => {
  return Cookies.get("access-token");
}

export const setToken = (token) => {
  Cookies.set("access-token", token);
}

export const removeToken = () => {
  Cookies.remove("access-token");
}