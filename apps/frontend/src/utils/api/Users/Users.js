import axios from "axios";

const URL_BASE = "https://jsonplaceholder.typicode.com/users";
const headers = { "Content-type": "application/json" };

const URL_PROD =
  "https://us-central1-safepaws-b2e52.cloudfunctions.net/appPublic";

// https://us-central1-safepaws-b2e52.cloudfunctions.net/appPublic/registro
// https://us-central1-safepaws-b2e52.cloudfunctions.net/appPublic/login
// const initialLogin = {
//   correo: "test@test.com",
//   contraseña: "test123*",
// };

// // https://us-central1-safepaws-b2e52.cloudfunctions.net/app/registro
// const initialRegistrar = {
//   nombre: "test",
//   correo: "test@test.com",
//   contraseña: "test123*",
// };

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

export const LoginUser = async (data) => {
  const correo = data.email;
  const contraseña = data.password;
  const response = await axios.post(
    URL_PROD + "/login",
    { correo, contraseña },
    { headers }
  );
  return response;
};

export const RegisterUser = async (data) => {
  const nombre = data.name;
  const correo = data.email;
  const contraseña = data.password;
  const response = await axios.post(
    URL_PROD + "/registro",
    { nombre, correo, contraseña },
    { headers }
  );
  return response;
};
