import { Heading, Input, Button, Flex } from '@chakra-ui/react';

import { useFormik } from 'formik';

//   import * as React from 'react';

function Register() {
  const formik = useFormik({
    initialValues: {
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
      bg="gray.100"
      direction="column"
      align="center"
      justify="center"
      h="600px"
      width={'100%'}
    >
      <Heading>Register</Heading>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="password">Password</label>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <label htmlFor="confirmpass">Confirmar Password</label>
        <Input
          id="confirmpass"
          name="confirmpass"
          type="confirmpass"
          onChange={formik.handleChange}
          value={formik.values.confirmpass}
        />

        <Button
          mt={4}
          colorScheme="teal"
          isLoading={formik.isSubmitting}
          type="submit"
        >
          Register
        </Button>
      </form>
    </Flex>
  );
}

export default Register;
