import * as React from "react";
import {
  Button,
  Container,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { UserContext } from "../utils/context/UserContext";
import PetCard from "../components/PetCard/PetCard";
import ReservationCard from "../components/ReservationCard/ReservationCard";
import { Navigate } from "react-router-dom";

import ModalAddPet from "../components/ModalAddPet/ModalAddPet";

const UserProfile = () => {
  const { user, setUser } = React.useContext(UserContext);
  /*Agregar parametros desde el Modal de mascotas */
  const { isOpen, onOpen, onClose } = useDisclosure();
  /*Agregar funcion en el ModalAddPet*/
  const addPet = () => {
    const newPet = { id: user.pets.length + 1, type: "cat", name: "rober" };
    //agregar a pets al array de user
    const pets = [...user.pets, newPet];
    //Sobreescribir pets sin perder datos previos de user
    const addUserPet = { ...user, pets };
    setUser(addUserPet);
  };
  const deletePet = (id) => {
    const pets = user.pets.filter((item) => item.id !== id);
    const delUserPet = { ...user, pets };
    setUser(delUserPet);
  };
  /*-------------------------------*/

  const deleteReservation = (id) => {
    const reservations = user.reservations.filter(
      (reservation) => reservation.id !== id
    );
    const delUserReservetion = { ...user, reservations };
    setUser(delUserReservetion);
  };

  //Si no esta iniciada la sesion return a home
  if (!user.status) return <Navigate to={"/"} />;

  return (
    <Container pt={"80px"} minH={"1600px"}>
      <Heading>Mi Datos</Heading>
      <Text>Nombre: {user.name}</Text>
      <Text>Correo: {user.email}</Text>
      {/* {JSON.stringify(user)} */}
      {/*
      Mostrar Nombre user.name
      Mostrar user.correo
    */}
      <Heading>Mis Mascotas</Heading>
      <Flex
        gap={"10px"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {user.pets.map((pet) => (
          <PetCard
            id={pet.id}
            name={pet.name}
            type={pet.type}
            key={pet.id}
            onClick={() => deletePet(pet.id)}
          />
        ))}

        <ModalAddPet isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </Flex>

      <Heading>Mis Reservas</Heading>
      {/* Lista de mascota y poder agregar y sacar */}
      {/* Lista de reservas, solo quitar */}
      <Flex direction={"column"}>
        {user.reservations.map((reser) => (
          <ReservationCard
            careName={reser.careName}
            date={reser.date}
            mypet={reser.mypet}
            key={reser.id}
            onClick={() => deleteReservation(reser.id)}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default UserProfile;
