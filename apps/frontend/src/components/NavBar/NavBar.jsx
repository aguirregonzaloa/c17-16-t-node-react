import { Link as ReactRouterLink } from 'react-router-dom';
import { Flex, Link as ChakraLink } from '@chakra-ui/react';

function NavBar() {
  return (
    <Flex
      justify={'space-around'}
      height={'60px'}
      bg="gray.100"
      width={'1200px'}
      margin={'0 auto 30px auto'}
    >
      <div>logo</div>
      <Flex gap={'20px'}>
        <ChakraLink
          as={ReactRouterLink}
          to="/"
          fontWeight={'700'}
          color={'azulacento.500'}
        >
          Home
        </ChakraLink>

        <ChakraLink
          as={ReactRouterLink}
          to="/login"
          fontWeight={'700'}
          color={'azulacento.700'}
        >
          Login
        </ChakraLink>

        <ChakraLink
          as={ReactRouterLink}
          to="/register"
          fontWeight={'700'}
          color={'azulacento.700'}
        >
          Register
        </ChakraLink>
      </Flex>
    </Flex>
  );
}

export default NavBar;
