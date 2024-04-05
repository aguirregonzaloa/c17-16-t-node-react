import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ChakraLink as={ReactRouterLink} to="/" m="2">
          Inicio
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/about-we" m="2">
          Nosotros
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/rates" m="2">
          Tarifas
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/login" m="2">
          Ingresar
        </ChakraLink>
      </nav>
    </header>
  );
}
