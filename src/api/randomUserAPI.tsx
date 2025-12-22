import axios from "axios";

const API_URL = "https://randomuser.me/api";

export const fetchRandomUser = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
