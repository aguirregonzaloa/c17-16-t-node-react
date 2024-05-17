import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import TabAboutMe from "../TabAboutMe/TabAboutMe";
import TabServicesAndRates from "../TabServicesAndRates/TabServicesAndRates";
import TabReview from "../TabReview/TabReview";
import TabLocation from "../TabLocation/TabLocation";
import TabAvailability from "../TabAvailability/TabAvailability";

export default function AccordionDetailsCaregiver({
  name,
  aboutMe,
  catAccepted,
  dogAccepted,
  approximateLongitude, 
  approximateLatitude,
  rates
}) {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontFamily="Poppins-Medium" fontSize="15px">
              Sobre mí
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <TabAboutMe name={name} aboutMe={aboutMe} />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontFamily="Poppins-Medium" fontSize="15px">
              Servicios y Tarifas
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        <TabServicesAndRates
            catAccepted={catAccepted}
            dogAccepted={dogAccepted}
            rates={rates}
          />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontFamily="Poppins-Medium" fontSize="15px">
              Disponibilidad
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <TabAvailability />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontFamily="Poppins-Medium" fontSize="15px">
              Ubicación
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <TabLocation approximateLongitude={approximateLongitude} approximateLatitude={approximateLatitude} />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontFamily="Poppins-Medium" fontSize="15px">
              Valoración
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <TabReview />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
