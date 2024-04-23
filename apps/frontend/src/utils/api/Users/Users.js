import axios from "axios";

const headers = { "Content-type": "application/json" };

import { URL_PROD } from "../GlobalURL";

export const LoginUser = async (data) => {
  const correo = data.email;
  const contraseña = data.password;
  const response = await axios.post(
    URL_PROD + "/login",
    { correo, contraseña },
    { headers }
  );
  return response.data;
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

export const SesionToken = () => {
  const token = "hjas";

  const headers = { "Content-type": "application/json", token: token };
  const response = axios.get(URL_PROD, { headers });
  return response;
};
