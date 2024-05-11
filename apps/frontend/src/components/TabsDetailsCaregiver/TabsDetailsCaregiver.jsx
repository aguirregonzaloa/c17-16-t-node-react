import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function TabsDetailsCaregiver() {
  return (
    <Tabs colorScheme="purple">
      <TabList>
        <Tab fontFamily="Poppins-Medium" fontSize="15px">
          Sobre mí
        </Tab>
        <Tab fontFamily="Poppins-Medium" fontSize="15px">
          Servicios y Tarifas
        </Tab>
        <Tab isDisabled fontFamily="Poppins-Medium" fontSize="15px">
          Disponibilidad
        </Tab>
        <Tab isDisabled fontFamily="Poppins-Medium" fontSize="15px">
          Ubicación
        </Tab>
        <Tab isDisabled fontFamily="Poppins-Medium" fontSize="15px">
          Valoración
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>Sobre mí</p>
        </TabPanel>
        <TabPanel>
          <p>Servicios y Tarifas</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
