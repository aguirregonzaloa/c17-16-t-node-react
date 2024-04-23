import * as React from "react";
import { Container, Text } from "@chakra-ui/react";
import { UserContext } from "../utils/context/UserContext";

const UserProfile = () => {
  const { user } = React.useContext(UserContext);
  return (
    <Container pt={"80px"} minH={"800px"}>
      <Text>UserProfile</Text>
      {JSON.stringify(user.data.name)}
      {/*
      Mostrar Nombre user.name
      Mostrar user.correo
       */}
      {/* Lista de mascota y poder agregar y sacar */}
      {/* Lista de reservas, solo quitar */}
    </Container>
  );
};

export default UserProfile;
