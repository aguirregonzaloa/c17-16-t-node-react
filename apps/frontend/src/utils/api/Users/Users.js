import axios from "axios";

const URL_BASE = "https://jsonplaceholder.typicode.com/users";
const headers = { "Content-type": "application/json" };

const URL_PROD = "https://us-central1-safepaws-b2e52.cloudfunctions.net/app";
const initialLogin = {
  correo: "test@test.com",
  contraseña: "test123*",
};

// https://us-central1-safepaws-b2e52.cloudfunctions.net/app/registro
const initialRegistrar = {
  nombre: "test",
  correo: "test@test.com",
  contraseña: "test123*",
};

export const getUsers = async () => {
  const response = await axios.get(URL_BASE);
  return response.data;
};

export const getUserID = async (id) => {
  const response = await axios.get(`${URL_BASE}/${id}`);
  console.log(`${URL_BASE}/${id}`);
  console.log(response.data);
  return response.data;
};

export const LoginUser = async (email, password) => {
  const correo = email;
  const contraseña = password;
  const response = await axios.post(
    URL_PROD + "/login",
    { correo, contraseña },
    { headers }
  );
  return response;
};
