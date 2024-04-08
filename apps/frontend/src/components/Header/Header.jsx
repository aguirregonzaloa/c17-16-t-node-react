import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Image,
  Spacer,
  useBoolean,
  useMediaQuery,
} from "@chakra-ui/react";
import Logotipo02 from "../../assets/logos/Logotipo02.svg";
import { IoMenu, IoClose } from "react-icons/io5";
import NavBar from "../NavBar/NavBar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useBoolean();
  const [isSmallerThan640] = useMediaQuery("(max-width: 640px)");

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
      <Flex align="center" mx={isSmallerThan640 ? "20px" : "100px"}>
        <Image boxSize={20} src={Logotipo02} alt="Logotipo" />
        <Spacer />
        {isSmallerThan640 ? (
          <Box>
            <IconButton
              border="none"
              onClick={setIsOpen.toggle}
              icon={isOpen ? <IoClose size="32px" /> : <IoMenu size="32px" />}
              variant="outline"
              aria-label="Menu"
            />
          </Box>
        ) : (
          <NavBar direction="row" />
        )}
      </Flex>
      {isOpen && <NavBar direction="column" />}
    </header>
  );
}
