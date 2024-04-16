import React from 'react'
import { Box,Text ,Flex,Image} from '@chakra-ui/react'
import Guy__Review from "../../assets/img/Guy_Review.png";
import Kayla__Review from "../../assets/img/Kayla_Review.png";
import Eva__Review from "../../assets/img/Eva_Review.png";
import Rebeca__Review from "../../assets/img/Rebeca_Review.png";
import Manito from "../../assets/img/Manitos.png"

const Review = () => {
  return (
   <Box w="1024px" h="822px"padding="80px, 150px, 64px, 150px" >
    
     <Box w="398px" h="120px" textAlign="center" margin="auto"> 
        <Text as="h2" fontSize="40px" fontFamily="Poppins">Qué opinan</Text>
        <Text as="h2"  fontSize="40px" fontFamily="Poppins">nuestros clientes</Text>
     </Box>
     <Flex w="724px" h="518px" padding="0px, 90px, 0px, 90px" flexWrap="wrap" gap={10} justifyContent="center" margin="auto" marginTop="40px">
       <Box w="259px" h="255px" borderRadius="19.93px" padding="24px, 21px, 24px, 21px">
        <Box w="144px" h="44px">
          <Flex marginBottom="15px">
        <Image
         src={Guy__Review}
         alt="guy_foto"
        > 
        </Image>
        <Image
         src={Manito}
         alt="Manito"
        >
        </Image>
        </Flex>
       
           <Box color="#4D4D4D" w="217px" h="63px" fontSize="14px">
          <Text fontFamily="Poppins-SemiBold"> Estaba un poco nerviosa de dejarlas, pero ella me escuchó sobre el cuidado de las perritas, y les puso música para que se acoplaran. </Text>
           </Box>
        </Box>
       </Box>
       <Box  w="259px" h="255px" borderRadius="19.93px" padding="24px, 21px, 24px, 21px" >
       <Box w="144px" h="44px">
        <Flex marginBottom="15px"> 
       <Image
         src={Eva__Review}
         alt="eva_foto"
        ></Image>
        <Image
         src={Manito}
         alt="Manito"
        >
        </Image>
        </Flex>
          
           <Box color="#4D4D4D" fontFamily="Poppins-SemiBold" w="217px" h="63px" fontSize="14px">
           Su compromiso con el bienestar de mi mascota es evidente en cada interacción. 
           </Box>
        </Box>
       </Box>
       <Box  w="259px" h="255px" borderRadius="19.93px" padding="24px, 21px, 24px, 21px">
       <Box w="144px" h="44px">
        <Flex marginBottom="15px">
       <Image
         src={Kayla__Review}
         alt="kayla_foto"
        ></Image>
       
         <Image
         src={Manito}
         alt="Manito"
        >
        </Image>
        
        </Flex>
           
           <Box color="#4D4D4D" fontFamily="Poppins-SemiBold" w="217px" h="63px" fontSize="14px">
           Su atención dedicada y amor por los peludos lo convierten en el mejor amigo de mi mascota durante mis ausencias.
           </Box>
        </Box>
       </Box>
       <Box  w="259px" h="255px" borderRadius="19.93px" padding="24px, 21px, 24px, 21px" >
       <Box w="144px" h="44px">
        <Flex marginBottom="15px">
       <Image
         src={Rebeca__Review}
         alt="rebeca_foto"
        ></Image>
         <Image
         src={Manito}
         alt="Manito"
        >
        </Image>
        </Flex>
           <Box color="#4D4D4D" fontFamily="Poppins-SemiBold" w="217px" h="63px" fontSize="14px">
           Su calma y habilidades para el manejo de mascotas resalta su pasión y confianza.
           </Box>
        </Box>
       </Box>
     </Flex>
   </Box>
  )
}

export default Review
