import React from "react";
import { Image, Flex, Heading, Text } from "@chakra-ui/react";
import IconLocation from "../../assets/icons/IconLocation.svg";
import Mapa from "../../assets/img/Mapa.png";

export default function TabLocation() {
  return (
    <>
      <Heading
        fontFamily="Poppins-SemiBold"
        fontSize="24px"
        color="black"
        mb="16px"
      >
        Ubicación
      </Heading>
      <Flex gap={2}>
        <Image src={IconLocation} alt="Icono de ubicación" />
        <Text fontFamily="Poppins-Regular" fontSize="14px" color="gris.600">
          Palermo, Buenos Aires
        </Text>
      </Flex>
      <Image src={Mapa} alt="Imagen de mapa" mt="32px" mb="40px" />
    </>
  );
}
