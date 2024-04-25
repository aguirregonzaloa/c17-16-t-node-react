import axios from "axios";
const token = localStorage.getItem('token');
const headers = { "Content-type": "application/json" , "Authorization": "Bearer " + token};

import { URL_PROD_APP } from "../GlobalURL";

export const createReservation = async (data) => {

    // Para crear una reservacion, 
    // data necesita tener el id del usuario, 
    // el id de la mascota a la que dejara, el id del cuidador al 
    // que selecciono y las fechas de entrada y salida.

    // Formato del body
    // {"userID": "RkyrrOFblqh8BtXxwjE4u2Txtnw1",
	// "petID":"jdlRAf6WYCrr7YDVHi4V",
	// "sitterID":"NuHxh1A6BXZ5iCkknfEfclrQNbp2",
	// "startDate":"2024-05-01",
	// "endDate":"2024-05-07"}

    const userID = data.userID;
    const petID = data.petID;
    const sitterID = data.sitterID;
    const petstartDateID = data.petstartDateID;
    const endDate = data.endDate;

    const response = await axios.post(
        URL_PROD_APP + "/reservations",
      { userID, petID,sitterID,petstartDateID,endDate },
      { headers }
    );
    return response.data;
  };
