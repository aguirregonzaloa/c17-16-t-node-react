import { useState } from 'react';
import { Card, Text, CardBody, Button, Container } from '@chakra-ui/react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container height={'100vh'}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Card>
        <CardBody>
          <Button
            colorScheme="blue"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
          <Text>
            Edit <code>src/App.jsx</code> and save to test HMR
          </Text>
          <Text> Click on the Vite and React logos to learn more</Text>
        </CardBody>
      </Card>
    </Container>
  );
}

export default App;
