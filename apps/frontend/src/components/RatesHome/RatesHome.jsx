import React from "react";
import { Box, Text, Card, Button, Flex, HStack, Image } from "@chakra-ui/react";
import Dog from "../../assets/img/Dog_Rates.png";
import Manito_violeta from "../../assets/img/manito_violeta.png";
import VectorBanner1 from "../../assets/icons/VectorBanner1.svg";
import VectorBanner2 from "../../assets/icons/VectorBanner2.svg";
import shadow from "../../assets/img/Shadow.png";

const RatesHome = () => {
  return (
    <Box mb={10} id="rates" pos="relative">
      <Image
        src={Dog}
        alt="Dog_rates"
        pos="absolute"
        top={{ base: -64, md: -48 }}
        left="0"
      />

      <Box w="349px" margin="auto" textAlign="center" marginBottom="40px">
        <Image
          src={Manito_violeta}
          alt="manito"
          position="relative"
          left="248px"
          top="25px"
        ></Image>
        <Text
          as="h2"
          color="#000000"
          fontSize="40px"
          fontFamily="Poppins-SemiBold"
        >
          Tarifas
        </Text>
        <Text fontFamily="Poppins-Regular" color="gris.800">
          Nuestras tarifas asequibles para cuidado y paseo de perros
        </Text>
      </Box>

      <Flex
        direction={{ base: "column", md: "row" }}
        gap={5}
        justify="center"
        align="center"
      >
        <Card
          w="295px"
          borderRadius="20px"
          padding="48px 32px 48px 32px"
          textAlign="center"
          gap="32px"
          pos="regular"
          zIndex={0}
        >

          <Image
            src={VectorBanner2}
            alt="icono verde"
            pos="absolute"
            bottom="-10px"
            right="792px"
            zIndex={1}
          ></Image>

          <Text
            color="azulacento.800"
            fontSize="20px"
            fontFamily="Poppins-SemiBold"
          >
            Guardería
          </Text>
          <HStack>
            <Text
              color="azulacento.500"
              fontFamily="Poppins-Regular"
              fontSize="18px"
              fontWeight="500"
              lineHeight="27px"
            >
              $
            </Text>
            <Text
              color="azulacento.500"
              fontSize="40px"
              fontFamily="Poppins-SemiBold"
              fontWeight="500"
              lineHeight="60px"
            >
              {" "}
              7000
            </Text>
            <Text fontSize="40px" color="gris.500">
              /
            </Text>
            <Text
              fontFamily="Poppins-Regular"
              color="gris.700"
              fontSize="14px"
              lineHeight="21px"
            >
              {" "}
              por hora
            </Text>
          </HStack>
          <Box gap="14px">
            <Text
              color="gris.600"
              fontFamily="Poppins-Regular"
              fontWeight="500"
              fontSize="16px"
              lineHeight="24px"
            >
              Actualización en tiempo real
            </Text>
            <Text
              color="gris.600"
              fontFamily="Poppins-Regular"
              fontWeight="500"
              fontSize="16px"
              lineHeight="24px"
              mt={3}
            >
              Aperitivos
            </Text>
            <Text
              color="gris.600"
              fontFamily="Poppins-Regular"
              fontWeight="500"
              fontSize="16px"
              lineHeight="24px"
              mt={3}
            >
              Reportes
            </Text>
            <Text
              color="gris.600"
              fontFamily="Poppins-Regular"
              fontWeight="500"
              fontSize="16px"
              lineHeight="24px"
              mt={3}
            >
              Seguro Paws
            </Text>
            <Text
              color="gris.600"
              mt={3}
              fontFamily="Poppins-Regular"
              fontWeight="500"
              fontSize="16px"
              lineHeight="24px"
            >
              Pago en efectivo
            </Text>
          </Box>
          <Box>
            <Button
              w="100%"
              bg="azulacento.500"
              color="#FFFFFF"
              fontFamily="Poppins-Regular"
              _hover={{ bg: "azulacento.600" }}
            >
              Más info.
            </Button>
          </Box>
        </Card>
      </Flex>
    </Box>
  );
};

export default RatesHome;