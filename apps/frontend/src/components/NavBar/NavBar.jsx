import * as React from "react";
import {
  Link as ChakraLink,
  Button,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Link as ReactRouterLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { UserContext, userData } from "../../utils/context/UserContext";
import ModalUser from "../ModalUser/ModalUser";

/*Hace un click en boto ingresar y que abra el Modal */

export default function NavBar({ direction, background }) {
  const { user, setUser } = React.useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  let location = useLocation();

  const logout = () => {
    // const userData = { correo: "", status: false, token: "" };
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(userData);
    if (location.pathname !== "/cuidadores") navigate("/");
  };
  // console.log(location);
  return (
    <nav>
      <ModalUser isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
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
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Inicio
        </ChakraLink>
        <ChakraLink
          href="#about"
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
          href="#rates"
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
            /* Deberiamos agregar el Modal para iniciar sesión*/
            bg="verdeacento.600"
            color="gris.800"
            _hover={{ bg: "verdeacento.700" }}
            _focus={{ bg: "verdeacento.700" }}
            _active={{ bg: "verdeacento.700" }}
            onClick={onOpen}
          >
            Ingresar
          </Button>
        ) : (
          <ChakraLink
            as={ReactRouterLink}
            to="/myprofile"
            alignSelf="center"
            color="gris.700"
            fontFamily="Poppins-Medium"
            _hover={{ color: "azulacento.500" }}
            _focus={{ color: "azulacento.500" }}
            _active={{ color: "azulacento.500" }}
          >
            {user.email}
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
