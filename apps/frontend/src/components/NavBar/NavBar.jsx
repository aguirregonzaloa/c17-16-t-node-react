import React from "react";
import { Link as ChakraLink, Button, Flex } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function NavBar({ direction }) {
  return (
    <nav>
      <Flex m={2} direction={direction}>
        <ChakraLink
          as={ReactRouterLink}
          to="/"
          m="3"
          alignSelf="center"
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
          alignSelf="center"
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
          alignSelf="center"
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
          bg="verdeacento.500"
          color="gris.800"
          _hover={{ bg: "verdeacento.600" }}
          _focus={{ bg: "verdeacento.600" }}
          _active={{ bg: "verdeacento.600" }}
        >
          Ingresar
        </Button>
      </Flex>
    </nav>
  );
}
