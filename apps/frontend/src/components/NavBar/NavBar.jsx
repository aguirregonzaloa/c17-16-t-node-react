import React from "react";
import { Link as ChakraLink, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ChakraLink
        as={ReactRouterLink}
        to="/"
        m="3"
        color="gris.400"
        _hover={{ color: "azulacento.500", fontFamily: "Poppins-SemiBold" }}
        _focus={{ color: "azulacento.500", fontFamily: "Poppins-SemiBold" }}
        _active={{ color: "azulacento.500", fontFamily: "Poppins-SemiBold" }}
      >
        Inicio
      </ChakraLink>
      <ChakraLink
        as={ReactRouterLink}
        to="/about-we"
        m="3"
        color="gris.400"
        _hover={{ color: "azulacento.500", fontFamily: "Poppins-SemiBold" }}
        _focus={{ color: "azulacento.500", fontFamily: "Poppins-SemiBold" }}
        _active={{ color: "azulacento.500", fontFamily: "Poppins-SemiBold" }}
      >
        Nosotros
      </ChakraLink>
      <ChakraLink
        as={ReactRouterLink}
        to="/rates"
        m="3"
        color="gris.400"
        _hover={{ color: "azulacento.500", fontFamily: "Poppins-SemiBold" }}
        _focus={{ color: "azulacento.500", fontFamily: "Poppins-SemiBold" }}
        _active={{ color: "azulacento.500", fontFamily: "Poppins-SemiBold" }}
      >
        Tarifas
      </ChakraLink>
      <Button
        as={ReactRouterLink}
        to="/login"
        m="3"
        bg="verdeacento.600"
        color="gris.800"
        _hover={{ bg: "verdeacento.500" }}
        _focus={{ bg: "verdeacento.500" }}
        _active={{ bg: "verdeacento.500" }}
      >
        Ingresar
      </Button>
    </nav>
  );
}
