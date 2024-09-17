import axios from "axios";

const API_URL = "http://localhost:3000";

export const getPackages = async () => {
  return await axios.get(`${API_URL}/packages`);
};

export const login = async (credentials) => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/login`, credentials);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
