import React from "react";
import { Box, Flex, Image, Text, Grid } from "@chakra-ui/react";
import VectorBanner1 from "../../assets/icons/VectorBanner1.svg";
import VectorBanner2 from "../../assets/icons/VectorBanner2.svg";
import imgBanner from "../../assets/img/ImgBanner.png";
import MiniCat from "../../assets/icons/MiniCat.svg";
import MiniDog from "../../assets/icons/MiniDog.svg";
import SearchingBar from "../SearchingBar/SearchingBar";

export default function Banner() {
  return (
    <Flex h="100%" direction={{ base: "column", lg: "row" }}>
      <Box
        bg="white"
        w={{ base: "100vw", lg: "50%" }}
        h={{ base: "75vh", sm: "65vh", lg: "100vh" }}
      >
        <Grid
          w="367.62px"
          pos={{
            base: "relative",
            xl: "absolute",
          }}
          top="170px"
          left={{ base: "50px", sm: "80px", md: "100px" }}
          gap="36px"
        >
          <Image
            src={MiniCat}
            alt="icono mini gato"
            pos="absolute"
            top={{ base: "-80px", lg: "-10px" }}
            left={10}
          />
          <Image
            src={MiniDog}
            alt="icono mini perro"
            pos="absolute"
            top={{ base: "100px", lg: "170px" }}
            left={52}
          />
          <Text
            fontFamily="Mercuria"
            fontWeight="400"
            fontSize="46px"
            lineHeight="60px"
            pt={{ base: 0, lg: 20 }}
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
          <SearchingBar />
        </Grid>
      </Box>
      <Box w={{ base: "100%", lg: "50%" }} h="100vh" pos="relative">
        <Image src={imgBanner} alt="image Banner" h="100%" w="100%" />
        <Image
          src={VectorBanner1}
          alt="icon mini cat"
          pos="absolute"
          top={{ base: -16, lg: 20 }}
          left={{ base: -4, lg: -16 }}
        />
        <Image
          src={VectorBanner2}
          alt="icon mini dog"
          pos="absolute"
          top={{
            base: -12,
            lg: "60vh",
          }}
          left={{
            base: undefined,
            lg: -12,
          }}
          right={{ base: 0, lg: undefined }}
        />
      </Box>
    </Flex>
  );
}
