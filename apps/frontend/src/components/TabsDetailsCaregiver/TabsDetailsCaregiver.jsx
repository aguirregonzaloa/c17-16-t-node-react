import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TabAboutMe from "../TabAboutMe/TabAboutMe";
import TabServicesAndRates from "../TabServicesAndRates/TabServicesAndRates";
import TabAvailability from "../TabAvailability/TabAvailability";
import TabLocation from "../TabLocation/TabLocation";
import TabReview from "../TabReview/TabReview";

export default function TabsDetailsCaregiver({
  name,
  aboutMe,
  catAccepted,
  dogAccepted,
}) {
  return (
    <Tabs colorScheme="purple">
      <TabList>
        <Tab fontFamily="Poppins-Medium" fontSize="15px">
          Sobre mí
        </Tab>
        <Tab fontFamily="Poppins-Medium" fontSize="15px">
          Servicios y Tarifas
        </Tab>
        <Tab fontFamily="Poppins-Medium" fontSize="15px">
          Disponibilidad
        </Tab>
        <Tab fontFamily="Poppins-Medium" fontSize="15px">
          Ubicación
        </Tab>
        <Tab fontFamily="Poppins-Medium" fontSize="15px">
          Valoración
        </Tab>
      </TabList>

      <TabPanels>
        {/* Sobre mí */}
        <TabPanel>
          <TabAboutMe name={name} aboutMe={aboutMe} />
        </TabPanel>

        {/* Servicios y Tarifas */}
        <TabPanel>
          <TabServicesAndRates
            catAccepted={catAccepted}
            dogAccepted={dogAccepted}
          />
        </TabPanel>

        {/* Disponibilidad */}
        <TabPanel>
          <TabAvailability />
        </TabPanel>

        {/* Ubicación */}
        <TabPanel>
          <TabLocation />
        </TabPanel>

        {/* Valoración */}
        <TabPanel>
          <TabReview />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
