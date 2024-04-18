
import React from 'react'
import { Box, Text, Card,Button, Flex, HStack, Image } from '@chakra-ui/react'
import Dog from  "../../assets/img/Dog_Rates.png";
import Manito_violeta from "../../assets/img/manito_violeta.png";
import VectorBanner1 from "../../assets/icons/VectorBanner1.svg";
import VectorBanner2 from "../../assets/icons/VectorBanner2.svg";



const RatesHome = () => {
  return (
    <Box id='rates'  pos="relative">
        <Image
        src={Dog}
        alt="Dog_rates"
        pos="absolute"
        top="-10"
        left="0"

            
      />     

          <Box w="349px"  margin="auto" textAlign="center" marginBottom="40px" >
        
          <Image
         src={Manito_violeta}
         alt="manito"
         position="relative"
         left="248px"
        top="25px"
        > 
        </Image>
            <Text as="h2" color="#000000" fontSize="40px" fontFamily="Poppins-SemiBold" >Tarifas</Text>
            <Text fontFamily="Poppins-Regular"color="gris.800" >Nuestras tarifas asequibles para cuidado  y paseo de perros</Text>
        </Box>
        
        <Flex direction={{ base: "column", md: "row" }} gap={5} justify="center"
      align="center"> 
                 
           <Card w="295px" h="477px" borderRadius="20px" padding="48px 32px 48px 32px"  boxShadow='2xl'textAlign="center">
            <Text  color="azulacento.800" fontSize="20px" fontFamily="Poppins-SemiBold">Paseos</Text>
            <HStack>
              <Text color="#1DC690" fontFamily="Poppins-SemiBold">$</Text>
            <Text  color="#1DC690" fontSize="40px" fontFamily="Poppins-SemiBold"> 4000</Text>
            <Text fontSize="40px" fontFamily="Poppins">/</Text>
            <Text fontFamily="Poppins-SemiBold" color="gris.700"> por día</Text>
            </HStack>
             <Box width="231px" height="176px" gap="14px">
            <Text  h="24px" color="#666666" m="15px" fontFamily="Poppins-SemiBold">Actualización en tiempo real</Text>
            <Text color="gris.600" fontFamily="Poppins-SemiBold">Seguimiento por GPS por paseo</Text>
            <Text color="gris.600"m="15px" fontFamily="Poppins-SemiBold">Reportes</Text>
            <Text color="gris.600"m="15px" fontFamily="Poppins-SemiBold">Seguro Paws</Text>
            <Text color="gris.600"m="15px" fontFamily="Poppins-SemiBold">Pago en efectivo</Text>
            </Box>
            <Button bg="#1DC690" color="#FFFFFF" width="231px" fontFamily="Poppins-SemiBold" top="75px" 
              _hover={{ bg: "verdeacento.700" }}
            >Más info.</Button> 
           </Card>
           <Card w="295px" h="477px" borderRadius="20px" padding="48px 32px 48px 32px" boxShadow=' 2xl' textAlign="center"> 
            <Text color="azulacento.800" fontSize="20px" fontFamily="Poppins-SemiBold" >Guardería</Text>
            <HStack>
              <Text color="azulacento.500" fontFamily="Poppins-SemiBold">$</Text>
            <Text  color="azulacento.500" fontSize="40px" fontFamily="Poppins-SemiBold"> 7000</Text>
            <Text fontSize="40px" fontFamily="Poppins">/</Text>
            <Text fontFamily="Poppins-SemiBold" color="gris.700"> por día</Text>
            </HStack>
            <Box width="231px" height="176px" gap="14px">
            <Text  h="24px" color="#666666" m="15px" fontFamily="Poppins-SemiBold">Actualización en tiempo real</Text>
            <Text color="gris.600" m="15px" fontFamily="Poppins-SemiBold">Aperetivos</Text>
            <Text color="gris.600"m="15px" fontFamily="Poppins-SemiBold">Reportes</Text>
            <Text color="gris.600"m="15px" fontFamily="Poppins-SemiBold">Seguro Paws</Text>
            <Text color="gris.600"m="15px" fontFamily="Poppins-SemiBold">Pago en efectivo</Text>
            </Box>
            <Button bg="azulacento.500" color="#FFFFFF" width="231px" fontFamily="Poppins-SemiBold"  top="80px"
            _hover={{ bg: "azulacento.600" }}
            >Más info.</Button>     
           </Card>
        </Flex>
    </Box>
      )
}

export default RatesHome
