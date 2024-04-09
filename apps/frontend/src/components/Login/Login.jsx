import {
  Heading,
  Input,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { useFormik } from 'formik';

// import * as React from 'react';

function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Flex
      padding="32px 40px"
      bg="gray.100"
      direction="column"
      align="center"
      justify="center"
      width={'453px'}
      margin={'0 auto'}
    >
      <Heading as={'h2'} size="xl" mb={'8px'}>
        Ingresar
      </Heading>
      <Heading as={'h4'} size="md" mb={'24px'}>
        No tienes cuenta?{' '}
        <ChakraLink
          as={ReactRouterLink}
          to="/register"
          color={'azulacento.500'}
          fontWeight={'700'}
        >
          Registrate
        </ChakraLink>
      </Heading>
      <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
        <FormControl mb={'16px'}>
          <FormLabel htmlFor="email">Correo electrónico</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </FormControl>
        <FormControl mb={'24px'}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </FormControl>

        <Button
          colorScheme="azulacento"
          textColor={'white'}
          isLoading={formik.isSubmitting}
          type="submit"
          width={'100%'}
        >
          Inicia Sesión
        </Button>
      </form>
    </Flex>
  );
}

export default Login;
