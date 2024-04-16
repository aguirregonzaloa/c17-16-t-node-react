import * as React from "react";
import { Link as ChakraLink, Button, Flex } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
import { UserContext } from "../../utils/context/UserContext";

export default function NavBar({ direction, background }) {
  const { user, setUser } = React.useContext(UserContext);
  const logout = () => {
    const userData = { correo: "", status: false, token: "" };
    setUser(userData);
  };

  return (
    <nav>
      <Flex m={2} direction={direction} bg={background} gap={6}>
        <ChakraLink
          as={ReactRouterLink}
          to="/"
          alignSelf="center"
          color="gris.700"
          fontFamily="Poppins-Medium"
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
          fontFamily="Poppins-Medium"
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
          fontFamily="Poppins-Medium"
          _hover={{ color: "azulacento.500" }}
          _focus={{ color: "azulacento.500" }}
          _active={{ color: "azulacento.500" }}
        >
          Tarifas
        </ChakraLink>
        {!user.status ? (
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
        ) : (
          <ChakraLink
            as={ReactRouterLink}
            to="/"
            alignSelf="center"
            color="gris.700"
            fontFamily="Poppins-Medium"
            _hover={{ color: "azulacento.500" }}
            _focus={{ color: "azulacento.500" }}
            _active={{ color: "azulacento.500" }}
          >
            {user.correo}
          </ChakraLink>
        )}
        {user.status && (
          <Button
            bg="verdeacento.600"
            color="gris.800"
            _hover={{ bg: "verdeacento.700" }}
            _focus={{ bg: "verdeacento.700" }}
            _active={{ bg: "verdeacento.700" }}
            onClick={logout}
          >
            X
          </Button>
        )}
      </Flex>
    </nav>
  );
}
