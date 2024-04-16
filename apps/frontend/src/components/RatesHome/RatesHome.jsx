import React from 'react'
import { Box, Text, Card,Button, Flex, HStack } from '@chakra-ui/react'

const RatesHome = () => {
  return (
    <Box id='rates' maxW="1024px" h="807px" p="64px 100px 100px 100px" textAlign="center">
          <Box w="349px" h="126px" margin="auto">
            <Text as="h2" color="#000000" fontSize="40px" fontFamily="Poppins-SemiBold" >Tarifas</Text>
            <Text fontFamily="Poppins-SemiBold" >Nuestras tarifas asequibles para cuidado</Text>
              <Text fontFamily="Poppins-SemiBold" > y paseo de perros</Text>
        </Box>
        <Flex w="824px" h="477px" gap={5}  justifyContent="center">
           <Card w="295px" h="477px" borderRadius="20px" padding="48px 32px 48px 32px"  boxShadow='#90EFD0'>
            <Text color="#231C68" fontSize="20px" fontFamily="Poppins-SemiBold">Paseos</Text>
            <Box w="231px" h="176px" >
            <Box w="231px" h="176px">
            <HStack justifyContent="center">
              <Text color="#1DC690" fontFamily="Poppins-SemiBold">$</Text>
            <Text as="span" color="#1DC690" fontSize="40px" fontFamily="Poppins-SemiBold"> 4000</Text>
            <Text fontSize="40px" fontFamily="Poppins">/</Text>
            <Text fontFamily="Poppins-SemiBold"> por día</Text>
            </HStack> 
            <Box>
            <Text  h="24px" color="#666666" m="15px" fontFamily="Poppins-SemiBold">Actualización en tiempo real</Text>
            <Text color="#666666" fontFamily="Poppins-SemiBold">Seguimiento por GPS por paseo</Text>
            <Text color="#666666"m="15px" fontFamily="Poppins-SemiBold">Reportes</Text>
            <Text color="#666666"m="15px" fontFamily="Poppins-SemiBold">Seguro Paws</Text>
            <Text color="#666666"m="15px" fontFamily="Poppins-SemiBold">Pago en efectivo</Text>
            <Button bg="#1DC690" color="#FFFFFF" width="231px" fontFamily="Poppins-SemiBold">Más info.</Button>
            </Box>
            </Box>        
            </Box>
           </Card>
           <Card w="295px" h="477px" borderRadius="20px" padding="48px 32px 48px 32px" boxShadow=' 2xl'>
            <Text color="#231C68" fontSize="20px" fontFamily="Poppins-SemiBold" >Guardería</Text>
            <Box w="231px" h="176px">
            <Box w="231px" h="176px">
            <HStack justifyContent="center">
              <Text color="#5A4FCF" fontFamily="Poppins-SemiBold">$</Text>
            <Text as="span" color="#5A4FCF" fontSize="40px" fontFamily="Poppins-SemiBold"> 7000</Text>
            <Text fontSize="40px" fontFamily="Poppins">/</Text>
            <Text fontFamily="Poppins-SemiBold"> por día</Text>
            </HStack> 
            <Text  h="24px" color="#666666" m="15px" fontFamily="Poppins-SemiBold">Actualización en tiempo real</Text>
            <Text color="#666666" m="15px" fontFamily="Poppins-SemiBold">Aperetivos</Text>
            <Text color="#666666"m="15px" fontFamily="Poppins-SemiBold">Reportes</Text>
            <Text color="#666666"m="15px" fontFamily="Poppins-SemiBold">Seguro Paws</Text>
            <Text color="#666666"m="15px" fontFamily="Poppins-SemiBold">Pago en efectivo</Text>
            <Button bg="#5A4FCF" color="#FFFFFF" width="231px" fontFamily="Poppins-SemiBold">Más info.</Button>
            </Box>        
            </Box>
            
           </Card>
        </Flex>
        
           
        
    </Box>
  )
}

export default RatesHome
