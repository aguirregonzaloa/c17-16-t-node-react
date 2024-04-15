import React from "react";
import { Link, Button, Flex } from "@chakra-ui/react";

export default function NavBar({ direction, background }) {
  return (
    <nav>
      <Flex m={2} direction={direction} bg={background} gap={6}>
        <Link
          href="#home"
          alignSelf="center"
          color="gris.700"
          fontFamily= "Poppins-Medium"
          _hover={{ color: "azulacento.500" }}
          _focus={{ color: "azulacento.500" }}
          _active={{ color: "azulacento.500" }}
        >
          Inicio
        </Link>
        <Link
          href="#about"
          alignSelf="center"
          color="gris.700"
          fontFamily= "Poppins-Medium"
          _hover={{ color: "azulacento.500" }}
          _focus={{ color: "azulacento.500" }}
          _active={{ color: "azulacento.500" }}
        >
          Nosotros
        </Link>
        <Link
          href="#rates"
          alignSelf="center"
          color="gris.700"
          fontFamily= "Poppins-Medium"
          _hover={{ color: "azulacento.500" }}
          _focus={{ color: "azulacento.500" }}
          _active={{ color: "azulacento.500" }}
        >
          Tarifas
        </Link>
        <Button
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
