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

//   import * as React from 'react';

function Register() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmpass: '',
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
      width={'455px'}
      margin={'0 auto'}
    >
      <Heading as="h2" size="xl" noOfLines={1} mb={'8px'}>
        Registrate
      </Heading>
      <Heading as="h4" size="md" noOfLines={1} mb={'24px'}>
        Ya tienes una cuenta?{' '}
        <ChakraLink
          as={ReactRouterLink}
          to="/login"
          color={'azulacento.500'}
          fontWeight={'700'}
        >
          inicia sesión
        </ChakraLink>
      </Heading>
      <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
        <FormControl mb={'16px'}>
          <FormLabel mb={'4px'} htmlFor="name">
            Nombre
          </FormLabel>
          <Input
            id="name"
            name="name"
            type="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </FormControl>
        <FormControl mb={'16px'}>
          <FormLabel mb={'4px'} htmlFor="email">
            Correo electrónico
          </FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />{' '}
        </FormControl>

        <FormControl mb={'16px'}>
          <FormLabel mb={'4px'} htmlFor="password">
            Contraseña
          </FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </FormControl>
        <FormControl mb={'24px'}>
          <FormLabel mb={'4px'} htmlFor="confirmpass">
            Confirmar Contraseña
          </FormLabel>
          <Input
            id="confirmpass"
            name="confirmpass"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmpass}
          />
        </FormControl>

        <Button
          colorScheme="azulacento"
          textColor={'white'}
          isLoading={formik.isSubmitting}
          type="submit"
          width={'100%'}
        >
          Registrate
        </Button>
      </form>
    </Flex>
  );
}

export default Register;