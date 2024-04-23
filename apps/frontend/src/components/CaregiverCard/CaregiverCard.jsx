import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import ImgMei from "../../assets/img/ImgMei.png";
import IconLocation from "../../assets/icons/IconLocation.svg";
import { IoIosStar } from "react-icons/io";
import IconDialogueBubbles from "../../assets/icons/IconDialogueBubbles.svg";
import { LuClock3 } from "react-icons/lu";
import IconDogPurple from "../../assets/icons/IconDogPurple.svg";
import IconCatPurple from "../../assets/icons/IconCatPurple.svg";

export default function CaregiverCard({ name }) {
  return (
    <Flex justify="space-between" align="center" w="539px" margin={"20px auto"}>
      <Box>
        <Image src={ImgMei} alt="Iamgen del cuidador" />
        <Text
          fontWeight="400"
          fontSize="14px"
          lineHeight="24px"
          color="azulacento.500"
          textAlign="center"
        >
          2 vacantes
        </Text>
      </Box>
      <Box gap={2}>
        <Heading
          as="h4"
          fontFamily="Poppins-Medium"
          fontSize="20px"
          fontWeight="600"
          lineHeight="30px"
          color="gris.800"
        >
          {name}
        </Heading>
        <Text
          fontSize="14px"
          fontWeight="400"
          lineHeight="24px"
          color="gris.800"
        >
          Lo cuidamos como si fuera nuestro ❤️
        </Text>
        <Flex gap={2}>
          <Image src={IconLocation} alt="Icono de ubicación" />
          <Text
            fontSize="14px"
            fontWeight="400"
            lineHeight="24px"
            color="gris.600"
          >
            Palermo, Buenos Aires
          </Text>
        </Flex>
        <Box gap={3}>
          <Flex gap={4} align="center">
            <IoIosStar size="20px" color="#FFC058" alt="Icono de estrella" />
            <Text
              fontSize="16px"
              fontWeight="400"
              lineHeight="24px"
              color="gris.600"
            >
              5.0
            </Text>
            <Text fontSize="10px" color="gris.800">
              ●
            </Text>
            <Image src={IconDialogueBubbles} alt="Icono de globo de diálogo" />
            <Text
              fontSize="16px"
              fontWeight="400"
              lineHeight="24px"
              color="gris.600"
            >
              50 reseñas
            </Text>
          </Flex>
        </Box>
        <Flex p="2px 0px" gap={4} align="center" color="azulacento.500">
          <LuClock3 size="20px" alt="Icono de reloj" />
          <Text fontWeight="400" fontSize="14px" lineHeight="24px">
            8 - 12 | 15 - 19
          </Text>
          <Text fontSize="10px" color="gris.800">
            ●
          </Text>
          <Flex gap="6px">
            <Image src={IconCatPurple} alt="Icono de gato violeta" />
            <Image src={IconDogPurple} alt="Icono de perro violeta" />
          </Flex>
        </Flex>
      </Box>
      <Box>
        <Text
          fontFamily="Poppins-Medium"
          fontSize="20px"
          fontWeight="600"
          lineHeight="24px"
          color="azulacento.500"
        >
          $5000
        </Text>
        <Text
          fontSize="14px"
          fontWeight="400"
          lineHeight="24px"
          color="gris.700"
        >
          por hora
        </Text>
      </Box>
    </Flex>
  );
}
