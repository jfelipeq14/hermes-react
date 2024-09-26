import axios from "axios";

const API_URL = "http://localhost:3000/auth";

export class AuthService{
  static login = async (credentials) => {
    try {
      const { data } = await axios.post(`${API_URL}/login`, credentials);
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  static register = async (credentials) => {
    try {
      const { data } = await axios.post(`${API_URL}/register`, credentials);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  static logout = async () => {
    try {
      await axios.post(`${API_URL}/logout`);
    } catch (error) {
      console.error(error);
    }
  };
}
