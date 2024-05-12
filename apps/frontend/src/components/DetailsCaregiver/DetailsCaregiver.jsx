import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCareGivers } from "../../utils/api/CareGivers/CareGivers";
import { Box, Flex, Heading, Image, Spinner, Text } from "@chakra-ui/react";
import IconLocation from "../../assets/icons/IconLocation.svg";
import TabsDetailsCaregiver from "../TabsDetailsCaregiver/TabsDetailsCaregiver";

export default function DetailsCaregiver() {
  const { idCaregiver } = useParams();
  const [caregiver, setCaregiver] = useState(null);

  useEffect(() => {
    const fetchCareGiver = async () => {
      try {
        const caregiversData = await getCareGivers();
        const caregiverFound = caregiversData.data.find(
          (item) => item.idCuidador === idCaregiver
        );
        if (caregiverFound) {
          setCaregiver(caregiverFound);
          // console.log(caregiverFound)
        } else {
          console.log("Cuidador no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener los cuidadores:", error);
      }
    };
    fetchCareGiver();
  }, [idCaregiver]);

  if (!caregiver) {
    return (
      <Flex justify="center" pt={20} minH="100vh">
        <Spinner size="lg" color="azulacento.600" />
      </Flex>
    );
  }

  return (
    <Flex
      direction="column"
      pt={20}
      minH="100vh"
      mx={{ base: "20px", md: "100px" }}
    >
      <Flex gap={6} py={10}>
        <Image src={caregiver.photo} boxSize="180px" borderRadius="8px" />
        <Flex direction="column" gap={2}>
          <Text
            fontFamily="Poppins-Regular"
            fontStyle="italic"
            color="verdeacento.800"
            fontSize="14px"
          >
            Guardería
          </Text>
          <Heading fontFamily="Poppins-Medium" fontSize="26px" color="gris.800">
            {caregiver.name}
          </Heading>
          <Box>
            <Text
              fontWeight="400"
              fontSize="14px"
              lineHeight="24px"
              bg="azulacento.100"
              color="azulacento.500"
              borderRadius="8px"
              textAlign="center"
              mt={1}
              p="2px 8px"
              display="inline-block"
            >
              Vacante
            </Text>
          </Box>
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
        </Flex>
      </Flex>
      <TabsDetailsCaregiver
        name={caregiver.name}
        aboutMe={caregiver.aboutMe.aboutMe}
        catAccepted={caregiver.petAccepted.cats}
        dogAccepted={caregiver.petAccepted.dogs}
      />
    </Flex>
  );
}
