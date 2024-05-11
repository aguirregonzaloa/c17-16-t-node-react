import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCareGivers } from "../../utils/api/CareGivers/CareGivers";
import { Box, Flex, Spinner } from "@chakra-ui/react";

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

  return (
    <Flex justify="center" pt={20} minH="100vh">
      {caregiver ? (
        <Box>
          <h2>{caregiver.name}</h2>
        </Box>
      ) : (
        <Spinner size="lg" color="azulacento.600" />
      )}
    </Flex>
  );
}
