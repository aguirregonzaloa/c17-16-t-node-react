import React from 'react'
import { Box,Text ,Flex,Image} from '@chakra-ui/react'
import Guy__Review from "../../assets/img/Guy_Review.png";
import Kayla__Review from "../../assets/img/Kayla_Review.png";
import Eva__Review from "../../assets/img/Eva_Review.png";
import Rebeca__Review from "../../assets/img/Rebeca_Review.png";
import Manito_violeta_Review from "../../assets/img/manito_violeta.png";
import Manito from "../../assets/img/Manitos.png";
import VectorBanner1_Review from "../../assets/icons/VectorBanner1.svg";
import VectorBanner2_Review from "../../assets/icons/VectorBanner2.svg";



const Review = () => {
  return (
    <Box
    > 
     
   <Box align="center">
  
   <Image
         src={Manito_violeta_Review}
         alt="manito"
         position="relative"
         left ="150px"
        > 
        </Image>
      <Text as="h2" fontSize="40px" fontFamily="Poppins-SemiBold">Qué opinan</Text>
      <Text as="h2"  fontSize="40px" fontFamily="Poppins-SemiBold">nuestros clientes</Text>
   </Box>
   <Image
         src={VectorBanner1_Review}
         alt="VectorBanner1"
         position="relative"
         left="280px"
         top="30px" 
        >
        </Image>
      <Box>
      
        <Flex  w="724px" h="518px" padding="0px, 90px, 0px, 90px" flexWrap="wrap" gap={10} justifyContent="center" margin="auto" marginTop="40px">
        
       
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
         marginLeft="20px"
        >
        </Image>
        </Flex>
        
       
           <Box color="#4D4D4D" w="217px" h="63px" fontSize="14px">
          <Text fontFamily="Poppins-SemiBold"> Estaba un poco nerviosa de dejarlas, pero ella me escuchó sobre el cuidado de las perritas, y les puso música para que se acoplaran. </Text>
           </Box>
           </Box>  
          </Box>
        
          <Box w="259px" h="255px" borderRadius="19.93px" padding="24px, 21px, 24px, 21px">
         
          <Box w="144px" h="44px">
          <Box >
          
        <Flex marginBottom="15px"> 
       
       <Image
         src={Eva__Review}
         alt="eva_foto"
        ></Image>
        <Image
         src={Manito}
         alt="Manito"
         marginLeft="20px"

        >
        </Image>
        
        </Flex>  
           <Box color="#4D4D4D" fontFamily="Poppins-SemiBold" w="217px" h="63px" fontSize="14px">
           Su compromiso con el bienestar de mi mascota es evidente en cada interacción. 
           </Box>
        </Box>
        <Image
         src={VectorBanner2_Review}
         alt="VectorBanner2"
         position="relative"
         right="93px"
         top="80px" 
        >
        </Image>

        </Box>
            </Box>
          
        
            <Box w="259px" h="255px" borderRadius="19.93px" padding="24px, 21px, 24px, 21px">
           
          <Box  w="144px" h="44px"> 
            
          <Flex marginBottom="15px">
       <Image
         src={Kayla__Review}
         alt="kayla_foto"
        ></Image>
       
         <Image
         src={Manito}
         alt="Manito"
         marginLeft="20px"
        >
        </Image>
        
        </Flex>
           
           <Box color="#4D4D4D" fontFamily="Poppins-SemiBold" w="217px" h="63px" fontSize="14px">
           Su atención dedicada y amor por los peludos lo convierten en el mejor amigo de mi mascota durante mis ausencias.
           </Box>
          
            </Box>
        
            <Image
         src={VectorBanner2_Review}
         alt="VectorBanner2"
         position="relative"
         right="93px"
         top="80px" 
        >
        </Image>
            </Box>
         
            <Box w="259px" h="255px" borderRadius="19.93px" padding="24px, 21px, 24px, 21px">
          <Box  w="144px" h="44px">
            
          <Flex marginBottom="15px">
       <Image
         src={Rebeca__Review}
         alt="rebeca_foto"
        ></Image>
         <Image
         src={Manito}
         alt="Manito"
         marginLeft="20px"
        >
        </Image>
        </Flex>
           <Box color="#4D4D4D" fontFamily="Poppins-SemiBold" w="217px" h="63px" fontSize="14px">
           Su calma y habilidades para el manejo de mascotas resalta su pasión y confianza.
           </Box>

        
            </Box>
           
              
           
            <Image
         src={VectorBanner1_Review}
         alt="VectorBanner1"
         position="relative"
         left="240px"
         top="20px" 
        >
        </Image>

        
            </Box>
         
        </Flex>
        
      </Box>

  </Box>
  )
}

export default Review
