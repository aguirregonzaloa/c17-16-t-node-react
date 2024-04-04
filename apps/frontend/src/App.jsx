import { Container, Flex } from '@chakra-ui/react';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <Container height={'100vh'} maxWidth={'1200px'}>
      <Flex margin={'auto 0'} justify={'center'} align={'center'} gap={'100px'}>
        <Login />
        <Register />
      </Flex>
    </Container>
  );
}

export default App;
