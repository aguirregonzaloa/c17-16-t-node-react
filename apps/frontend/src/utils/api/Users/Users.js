import axios from "axios";

const URL_BASE = "https://jsonplaceholder.typicode.com/users";
const headers = { "Content-type": "application/json" };

export const getUsers = async () => {
  const response = await axios.get(URL_BASE);
  return response.data;
};
