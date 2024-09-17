import axios from "axios";

const API_URL = "http://localhost:3000";

export const getPackages = async () => {
  return await axios.get(`${API_URL}/packages`);
};

