import { Heading, Input, Button, Flex } from '@chakra-ui/react';

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
      bg="gray.100"
      direction="column"
      align="center"
      justify="center"
      h="600px"
      width={'100%'}
    >
      <Heading>Login</Heading>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
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

        <Button
          mt={4}
          colorScheme="teal"
          isLoading={formik.isSubmitting}
          type="submit"
        >
          Login
        </Button>
      </form>
    </Flex>
  );
}

export default Login;
