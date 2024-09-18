import axios from "axios";

const API_URL = "http://localhost:3000";

export const login = async (credentials) => {
    try {
      const { data } = await axios.post(`${API_URL}/auth/login`, credentials);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
  export const register = async (credentials) => {
    try {
      const { data } = await axios.post(`${API_URL}/auth/register`, credentials);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
  export const logout = async () => {
    try {
      await axios.post(`${API_URL}/auth/logout`);
    } catch (error) {
      console.error(error);
    }
  }