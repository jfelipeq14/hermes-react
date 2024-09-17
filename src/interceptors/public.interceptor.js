import axios from "axios";
import { getToken } from "../utilies/authUtils";

const getBasicAuthorization = () => {
  const token = getToken();
  return `Bearer ${token}`;
};

export const initAxiosInterceptors = () => {
  axios.interceptors.request.use(function (request) {
    if (request.url.includes("assets") || request.headers.Authorization) {
      return request;
    }
    const token = getBasicAuthorization();
    const newHeaders = {
      Authorization: token,
      "Content-Type": "application/json",
    };
    request.headers = newHeaders;
    return request;
  });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      if (error.response.data.error.code) return null; //En esta parte va la alerta
    }
  );
};
