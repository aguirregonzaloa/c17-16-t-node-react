import React from "react";
import { Link as ChakraLink, Button, Flex } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function NavBar({ direction, background }) {
  return (
    <nav>
      <Flex m={2} direction={direction} bg={background} gap={6}>
        <ChakraLink
          as={ReactRouterLink}
          to="/"
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
