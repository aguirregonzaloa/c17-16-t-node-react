import React from "react";
import { Box, Link, Text, Image, Divider, Flex } from "@chakra-ui/react";
import LogoFooter from "../../assets/img/LogoFooter.svg";
import LogoF from "../../assets/img/facebook.svg";
import LogoC from "../../assets/img/correo.svg";
import LogoW from "../../assets/img/wpp.svg";
import LogoI from "../../assets/img/instagram.svg";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="azulacento.500"
      p={{ base: "32px 20px", lg: "32px 100px" }}
    >
      <Flex
        justify="space-between"
        direction={{ base: "column", lg: "row" }}
        marginBottom="20px"
      >
        <Flex
          direction="column"
          justify={{ base: "center", lg: "start" }}
          align={{ base: "center", lg: "start" }}
        >
          <Box mb="20px">
            <Image src={LogoFooter} alt="LogoFooter" />
          </Box>
          <Text
            color="#FAFAFA"
            fontFamily="Poppins-Regular"
            fontWeight={400}
            lineHeight="19px"
          >
            Tus mascotas en las mejores manos
          </Text>
        </Flex>
        <Flex
          gap={6}
          direction={{ base: "column", lg: "row" }}
          textAlign="center"
        >
          <Box mt="20px" m={{base:"0px", lg :"0"}}>
            <Text as="h2" color="#FFFFFF">
              Sección
            </Text>
            <Flex flexDirection="column"
            >
              <Link
                as="a"
                margin="4px"
                color="#FFFFFF"
                fontSize="14px"
                fontFamily="Poppins-Regular"
                padding="8px"
                fontWeight={400}
                lineHeight="21px"
              >
                Inicio
              </Link>

              <Link
                as="a"
                color="#E6E6E6"
                fontSize="14px"
                fontFamily="Poppins-Regular"
                padding="8px"
                fontWeight={400}
                lineHeight="21px"
              >
                Sobre nosotros
              </Link>

              <Link
                as="a"
                color="#E6E6E6"
                fontSize="14px"
                fontFamily="Poppins-Regular"
                padding="8px"
                fontWeight={400}
                lineHeight="21px"
              >
                Tarifas
              </Link>
            </Flex>
          </Box>
          <Box>
            <Text as="h2" align="center" color="#FFFFFF">
              Redes
            </Text>
            <Flex
              flexDirection="column"
              marginTop="20px"
              textAlign={{ base: "center", lg: "start" }}
            >
              <Flex justify="center" align="center">
                <Image src={LogoI} alt="LogoInstagram" />
                <Link
                  margin="4px"
                  color="#E6E6E6"
                  fontSize="14px"
                  fontFamily="Poppins-Regular"
                  padding="8px"
                  fontWeight={400}
                  lineHeight="21px"
                  href="https://www.instagram.com/safepaws.bsas/?igsh=amVod3Fmc2RtdWRh&utm_source=qr"
                  target="_blank"
                >
                  Instagram
                </Link>
              </Flex>
              <Flex justify="center" align="center">
                <Image src={LogoF} alt="LogoFacebook" />
                <Link
                  color="#E6E6E6"
                  fontSize="14px"
                  fontFamily="Poppins-Regular"
                  padding="8px"
                  fontWeight={400}
                  lineHeight="21px"
                >
                  Facebook
                </Link>
              </Flex>
            </Flex>
          </Box>
          <Box>
            <Text as="h2" align="center" color="#FFFFFF">
              Contáctanos
            </Text>
            <Flex flexDirection="column" marginTop="20px">
              <Flex justify="center" align="center">
                <Image src={LogoW} alt="LogoTelefono" />
                <Text
                  margin="4px"
                  color="#E6E6E6"
                  fontSize="14px"
                  fontFamily="Poppins-Regular"
                  padding="8px"
                  fontWeight={400}
                  lineHeight="21px"
                >
                  +54-11-11234-56
                </Text>
              </Flex>
              <Flex justify="center" align="center">
                <Image src={LogoC} alt="LogoCorreo" />
                <Text
                  color="#E6E6E6"
                  fontSize="14px"
                  fontFamily="Poppins-Regular"
                  padding="8px"
                  fontWeight={400}
                  lineHeight="21px"
                >
                  Safe@paws.com
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Divider />
      <Flex justify="space-between">
        <Box marginTop="30px">
          <Text color="#FFFFFF" fontWeight={400} lineHeight="18px">
            Todos los derechos reservados{" "}
          </Text>
        </Box>

        <Box marginTop="30px">
          <Link
            margin="16px"
            color="#FFFFFF"
            fontWeight={400}
            lineHeight="21px"
            fontFamily="Poppins-Regular"
            textDecor="none"
          >
            terminos
          </Link>

          <Link
            color="#FFFFFF"
            fontWeight={400}
            lineHeight="21px"
            fontFamily="Poppins-Regular"
            textDecor="none"
          >
            privacidad
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
