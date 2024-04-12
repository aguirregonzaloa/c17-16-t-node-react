import React from "react";
import { Link as ChakraLink, Button, Flex } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function NavBar({ direction, background }) {
  return (
    <nav>
      <Flex m={2} direction={direction} bg={background}>
        <ChakraLink
          as={ReactRouterLink}
          to="/"
          m="3"
          alignSelf="center"
          color="gris.700"
          fontFamily= "Poppins-Medium"
          _hover={{ color: "azulacento.500" }}
          _focus={{ color: "azulacento.500" }}
          _active={{ color: "azulacento.500" }}
        >
          Inicio
        </ChakraLink>
        <ChakraLink
          as={ReactRouterLink}
          to="/about-we"
          m="3"
          alignSelf="center"
          color="gris.700"
          fontFamily= "Poppins-Medium"
          _hover={{ color: "azulacento.500" }}
          _focus={{ color: "azulacento.500" }}
          _active={{ color: "azulacento.500" }}
        >
          Nosotros
        </ChakraLink>
        <ChakraLink
          as={ReactRouterLink}
          to="/rates"
          m="3"
          alignSelf="center"
          color="gris.700"
          fontFamily= "Poppins-Medium"
          _hover={{ color: "azulacento.500" }}
          _focus={{ color: "azulacento.500" }}
          _active={{ color: "azulacento.500" }}
        >
          Tarifas
        </ChakraLink>
        <Button
          as={ReactRouterLink}
          to="/login"
          m="3"
          bg="verdeacento.600"
          color="gris.800"
          _hover={{ bg: "verdeacento.700" }}
          _focus={{ bg: "verdeacento.700" }}
          _active={{ bg: "verdeacento.700" }}
        >
          Ingresar
        </Button>
      </Flex>
    </nav>
  );
}
