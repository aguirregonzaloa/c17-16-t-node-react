import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import ImgMei from "../../assets/img/ImgMei.png";

export default function PetCard({ id, name, type, onClick }) {
  return (
    <Flex direction="column" align="center" margin={"20px auto"}>
      <Box>
        <Image src={ImgMei} alt="Iamgen del cuidador" />
      </Box>
      <Heading
        as="h4"
        fontFamily="Poppins-Medium"
        fontSize="20px"
        fontWeight="600"
        lineHeight="30px"
        color="gris.800"
      >
        {name}
      </Heading>
      <Heading
        as="h4"
        fontFamily="Poppins-Medium"
        fontSize="20px"
        fontWeight="600"
        lineHeight="30px"
        color="gris.800"
      >
        {type}
      </Heading>
      <Button onClick={onClick} bg="rojo.200" color="white">
        del
      </Button>
    </Flex>
  );
}
