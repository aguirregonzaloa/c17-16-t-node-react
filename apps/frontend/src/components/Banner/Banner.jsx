import React from "react";
import { Box, Flex, Image, Text, Grid } from "@chakra-ui/react";
import VectorBanner1 from "../../assets/icons/VectorBanner1.svg";
import VectorBanner2 from "../../assets/icons/VectorBanner2.svg";
import imgBanner from "../../assets/img/ImgBanner.png";
import MiniCat from "../../assets/icons/MiniCat.svg";
import MiniDog from "../../assets/icons/MiniDog.svg";

export default function Banner() {
  return (
    <Flex w="100%" h="100vh">
      <Box w="50%" bg="white">
        <Grid w="370px" pos="absolute" top="170px" left="100px" gap="36px">
          <Image
            src={MiniCat}
            alt="icon mini cat"
            pos="absolute"
            top="-90px"
            left={10}
          />
          <Image
            src={MiniDog}
            alt="icon mini dog"
            pos="absolute"
            top={{ xl: "15vh", "2xl": "11vh" }}
            left={{ xl: "15.5vw", "2xl": "11vw" }}
          />
          <Text
            fontFamily="Mercuria"
            fontWeight="400"
            fontSize="46px"
            lineHeight="60px"
          >
            CUIDAMOS A TU MEJOR AMIGO PELUDO
          </Text>
          <Text
            color="gris.800"
            fontFamily="Poppins-Regular"
            fontWeight="500"
            fontSize="20px"
            lineHeight="30px"
          >
            Encuentra los mejores cuidadores de mascotas de Buenos Aires
          </Text>
        </Grid>
      </Box>
      <Image
        src={VectorBanner1}
        alt="icon mini cat"
        pos="absolute"
        top="5vh"
        left={{ xl: "45vw", "2xl": "46.5vw" }}
      />
      <Image
        src={VectorBanner2}
        alt="icon mini dog"
        pos="absolute"
        top={{ xl: "53vh", "2xl": "59vh" }}
        left={{ xl: "46vw", "2xl": "47.4vw" }}
      />
      <Box w="50%">
        <Image src={imgBanner} alt="image Banner" h="100vh" w="100%" />
      </Box>
    </Flex>
  );
}
