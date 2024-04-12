import React from "react";
import { Box, Flex, Text, Image, Button, Divider } from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";
import Paws from "../../assets/icons/paws.svg";
import Suitcase from "../../assets/icons/suitcase.svg";
import OutlinePaw from "../../assets/icons/outlinePaw.svg";
import OutlineCheckCircle from "../../assets/icons/outlineCheckCircle.svg";
import Certificate from "../../assets/icons/certificate.svg";
import PerfilCheck from "../../assets/icons/perfilCheck.svg";
import MagnifyingGlass from "../../assets/icons/magnifyingGlass.svg";
import ItemInfoSection from "../ItemInfoSection/ItemInfoSection";

export default function InfoSection({
  iconAnimal,
  text,
  order,
  title,
  textButton,
}) {
  return (
    <>
      <Image
        src={iconAnimal}
        alt="animal icon"
        pos="absolute"
        top={
          order === "1"
            ? { lg: "75vh", xl: "80vh", "2xl": "90vh" }
            : { lg: "185vh", xl: "200vh", "2xl": "175vh" }
        }
        left={
          order === "1"
            ? "0px"
            : { lg: "83.5vw", xl: "86.2vw", "2xl": "90.2vw" }
        }
      />
      <Flex
        justifyContent="center"
        align="center"
        p="64px 100px 64px 100px"
        bg="white"
      >
        <Box
          w="50%"
          mt={{ xl: "30vh", "2xl": "20vh" }}
          order={order === "2" ? 2 : ""}
          p={order === "1" ? "0px" : "35px"}
        >
          <Text
            w={
              order === "1"
                ? { lg: "32vw", xl: "24vw", "2xl": "18vw" }
                : { lg: "30vw", xl: "24vw", "2xl": "18vw" }
            }
            color="azulacent0.900"
            fontWeight="600"
            fontSize="32px"
            lineHeight="42px"
          >
            {text}
          </Text>
          <Button
            rightIcon={<GoArrowUpRight size="24px" />}
            bg="azulacento.500"
            color="#FFFF"
            fontFamily="Poppins-SemiBold"
            mt={5}
            _hover={{ bg: "azulacento.600" }}
          >
            {textButton}
          </Button>
          <Image
            src={Paws}
            alt="Patitas"
            pt="10px"
            pl={{ lg: "18vw", xl: "15vw", "2xl": "9vw" }}
          />
        </Box>
        <Box w="50%" p="32px">
          <Box w={{ lg: "33vw", xl: "25vw", "2xl": "25vw" }}>
            <Text
              fontFamily="Poppins-Medium"
              fontSize="16px"
              fontWeight="500"
              lineHeight="24px"
              color="azulacento.500"
            >
              {title}
            </Text>
            <Divider
              borderWidth="1px"
              borderColor="azulacento.800"
              my="10px"
              opacity="20%"
              w={{ lg: "33vw", xl: "25vw", "2xl": "25vw" }}
            />
          </Box>
        </Box>
      </Flex>
    </>
  );
}
