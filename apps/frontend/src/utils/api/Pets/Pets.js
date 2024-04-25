import axios from "axios";
const token = localStorage.getItem('token');
const headers = { "Content-type": "application/json" , "Authorization": "Bearer " + token};

import { URL_PROD_APP } from "../GlobalURL";

export const addPet = async (data) => {

    // Formato
    // "nombre": "Malin",
    // "especie": "Gato",
    // "edad": "2*"

    const nombre = data.nombre;
    const especie = data.especie;
    const edad = data.edad;

    const response = await axios.post(
        URL_PROD_APP + "/pets",
      { nombre, especie,edad},
      { headers }
    );
    return response.data;
  };

  export const getPet = async (idUser) => {

    const response = await axios.get(
        URL_PROD_APP + "/pets/" + idUser,
      { headers }
    );
    return response.data;
  };

  export const deletePet = async (idPet) => {

    const response = await axios.delete(
        URL_PROD_APP + "/pets/" + idPet,
      { headers }
    );
    return response.data;
  };