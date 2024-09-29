import axios from "axios";
import API_URL from "../../../../config.js";

export const getAll = () => {
  return axios.get(`${API_URL}/reservations`);
};

export const getById = (id) => {
  return axios.get(`${API_URL}/reservations/${id}`);
};

export const create = (obj) => {
  return axios.post(`${API_URL}/reservations`, obj);
};

export const update = (id, obj) => {
  return axios.put(`${API_URL}/reservations/${id}`, obj);
};

export const remove = (id) => {
  return axios.delete(`${API_URL}/reservations/${id}`);
};
