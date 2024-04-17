import React from "react";
import {
  Box,
  Link,
  Text,
  Image,
  Divider,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import LogoFooter from "../../assets/img/LogoFooter.svg";
import LogoF from "../../assets/img/facebook.svg";
import LogoC from "../../assets/img/correo.svg";
import LogoW from "../../assets/img/wpp.svg";
import LogoI from "../../assets/img/instagram.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <Box as="footer" className="footer">
      <Box className="container__footer">
        <Box className="box__footer">
          <Flex>
            <Box>
              <Image src={LogoFooter} alt="LogoFooter" />
              <Text fontFamily="regular" className="logoTitle">
                Tus mascotas en tus mejores manos{" "}
              </Text>
            </Box>
          </Flex>
        </Box>
        <Flex>
          <Box>
            <Text className="titleS">Seccíon</Text>
            <Box>
              <Link
                margin="6px"
                href="#"
                color="#e6e6e6"
                fontSize="14px"
                fontFamily="semibold"
                className="linkI"
              >
                Inicio
              </Link>

              <Link
                margin="1px"
                href="#"
                color="#e6e6e6"
                fontSize="14px"
                className="linkS"
              >
                Sobre nosotros
              </Link>

              <Link
                href="#"
                textDecoration="none"
                color="#e6e6e6"
                fontSize="14px"
                className="linkT"
              >
                Tarifas
              </Link>
            </Box>
          </Box>

          <Box>
            <Text as="h2" className="titleR">
              Redes
            </Text>
            <Flex marginTop="20px" display="flex">
              <Image src={LogoI} alt="LogoInstagram" />
              <Text
                margin="4px"
                color="#e6e6e6"
                fontSize="14px"
                fontFamily="regular"
                padding="8px"
              >
                {" "}
                Instagram
              </Text>
            </Flex>

            <Box display="flex">
              <Image src={LogoF} alt="LogoFacebook" />
              <Text
                color="#e6e6e6"
                fontSize="14px"
                fontFamily="regular"
                padding="8px"
              >
                Facebook
              </Text>
            </Box>
          </Box>

          <Box>
            <Text as="h2" className="titleC">
              Contactanos
            </Text>
            <Box marginTop="20px" display="flex">
              <Image src={LogoW} alt="LogoTelefono" />
              <Text
                margin="4px"
                color="#e6e6e6"
                fontSize="14px"
                fontFamily="regular"
                padding="8px"
              >
                +54-11-11234-56
              </Text>
            </Box>
            <Box display="flex">
              <Image src={LogoC} alt="LogoCorreo" />
              <Text
                color="#e6e6e6"
                fontSize="14px"
                fontFamily="regular"
                padding="8px"
              >
                Safe@paws.com
              </Text>
            </Box>
          </Box>
        </Flex>
        <Divider />
        <Flex>
          <Box marginTop="30px">
            <Text color="#E6E6E6">Todos los derechos reservados 2024 </Text>
          </Box>
          <Spacer />
        </Flex>

        <Flex>
          <Box marginTop="30px">
            <Link href="#" as="a" margin="16px" color="#E6E6E6">
              Términos
            </Link>

            <Link href="#" as="a" color="#E6E6E6">
              Privacidad
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
