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
          order === 1
            ? {
                base: "135vh",
                sm: "125vh",
                lg: "75vh",
                xl: "80vh",
                "2xl": "90vh",
              }
            : {
                base: "270vh",
                sm: "258vh",
                md: "240vh",
                lg: "185vh",
                xl: "200vh",
                "2xl": "175vh",
              }
        }
        left={order === 1 ? "0px" : undefined}
        right={order === 2 ? "0px" : undefined}
      />
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        align="center"
        p={{ base: "80px 20px 80px 20px", md: "64px 100px 64px 100px" }}
        bg="white"
      >
        <Box
          w={{ base: "100%", md: "50%" }}
          mt={{ xl: "30vh", "2xl": "20vh" }}
          order={{ base: order === 1 ? 2 : undefined, md: order }}
          p={order === 1 ? "0px" : { base: "0px", md: "35px" }}
        >
          <Text
            w={
              order === 1
                ? { base: "52vh", md: "30vw", xl: "24vw", "2xl": "18vw" }
                : { base: "80vw", md: "30vw", xl: "24vw", "2xl": "18vw" }
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
            display={{ base: "none", md: "block" }}
            pt="10px"
            pl={{ md: "18vw", xl: "15vw", "2xl": "9vw" }}
          />
        </Box>
        <Box
          w={{ base: "100%", md: "50%" }}
          p="32px"
          order={{
            base: order === 1 ? 2 : undefined,
            md: order === 1 ? 2 : undefined,
          }}
        >
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
            {order === 1 ? (
              <>
                <ItemInfoSection
                  icon={Suitcase}
                  title="Guardería"
                  text="Tu mascota pasa la noche en casa de su cuidador"
                />
                <ItemInfoSection
                  icon={OutlinePaw}
                  title="Paseos"
                  text="Tu mascota sale a dar un paseo por tu barrio"
                />
                <ItemInfoSection
                  icon={OutlineCheckCircle}
                  title="Seguro"
                  text="Contamos con un seguro qeu protege a tu perro durante su estancia y actividades"
                />
              </>
            ) : (
              <>
                <ItemInfoSection
                  icon={Certificate}
                  title="Entrenamiento y certificación"
                  text="En técnicas de manejo, primeros auxilios para mascotas y comportamiento animal"
                />
                <ItemInfoSection
                  icon={PerfilCheck}
                  title="Perfiles completos y detallados"
                  text="Incluye información personal, experiencia y referencias."
                />
                <ItemInfoSection
                  icon={MagnifyingGlass}
                  title="Revisión continua de desempeño"
                  text="Para garantizar que sigan cumpliendo con nuestros estándares de calidad."
                />
              </>
            )}
          </Box>
        </Box>
      </Flex>
    </>
  );
}
