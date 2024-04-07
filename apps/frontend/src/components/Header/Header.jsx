import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Logotipo02 from "../../assets/icons/Logotipo02.png";
import { Box, Flex, Image, Spacer } from "@chakra-ui/react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    //Modifica el color del header al hacer scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        zIndex: "2",
        width: "100%",
        backgroundColor: scrolled ? "#E6E6E6" : "#FEFBF6",
        transition: "background-color 0.3s ease",
      }}
    >
      <Flex align="center" mx="100px">
        <Image boxSize={20} src={Logotipo02} alt="Logotipo" />
        <Spacer />
        <Box>
          <NavBar />
        </Box>
      </Flex>
    </header>
  );
}
