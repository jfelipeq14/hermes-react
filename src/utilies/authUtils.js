import Cookies from "js-cookie";

export const getToken = () => {
  return Cookies.get("access-token");
};

export const setToken = (token) => {
  Cookies.set("access-token", token);
};

export const removeToken = () => {
  Cookies.remove("access-token");
};

export const setTokenStorage = (token) => {
  window.localStorage.setItem("access-token", JSON.stringify(token));
};

export const getTokenStorage = () => {
  return window.localStorage.getItem("access-token");
};

export const removeTokenStorage = () => {
  window.localStorage.removeItem("access-token");
};
