import axios from "axios";

const API_URL = "http://localhost:3000/reservations";

export class ReservationsService {
  static getAll = async () => {
    try {
      const { data } = await axios.get(`${API_URL}`);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  static getById = async (id) => {
    try {
      const { data } = await axios.get(`${API_URL}/${id}`);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  static create = async (obj) => {
    try {
      const { data } = await axios.post(`${API_URL}`, obj);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  static update = async (id, obj) => {
    try {
      const { data } = await axios.patch(`${API_URL}/${id}`, obj);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  static remove = async (id) => {
    try {
      const { data } = await axios.delete(`${API_URL}/${id}`);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
}
