import {
  Heading,
  Input,
  Button,
  Text,
  FormErrorMessage,
  Flex,
  FormControl,
  FormLabel,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

import { useFormik } from "formik";
import { validateLogin as validate } from "../../utils/FormValidation/baseValidation";

// import * as React from 'react';
import { useLoginUser } from "../../utils/hooks/userQuery";

function Login() {
  const { mutateAsync, isLoading } = useLoginUser();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      const response = mutateAsync(values);

      response.then((data) => {
        console.log(data);
        setSubmitting(false);
      });
    },
    onBlur: () => {
      console.log("blur");
    },
  });
  return (
    <Flex
      padding="32px 40px"
      bg="gray.100"
      direction="column"
      align="center"
      justify="center"
      width={"453px"}
      margin={"0 auto"}
    >
      <Heading as={"h2"} size="xl" mb={"8px"}>
        Ingresar
      </Heading>
      <Heading as={"h4"} size="md" mb={"24px"}>
        No tienes cuenta?{" "}
        <ChakraLink
          as={ReactRouterLink}
          to="/register"
          color={"azulacento.500"}
          fontWeight={"700"}
        >
          Registrate
        </ChakraLink>
      </Heading>
      <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
        <FormControl mb={"16px"}>
          <FormLabel htmlFor="email">Correo electrónico</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
          {formik.errors.email ? (
            <Text color={"red"}>{formik.errors.email}</Text>
          ) : null}
        </FormControl>
        <FormControl mb={"24px"}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            required
          />
          {formik.errors.password && formik.touched.password ? (
            <Text color={"red"}>{formik.errors.password}</Text>
          ) : null}
        </FormControl>

        <Button
          colorScheme="azulacento"
          textColor={"white"}
          isLoading={formik.isSubmitting}
          disabled={"true"}
          type="submit"
          width={"100%"}
          _disabled={{
            bg: "#dddfe2",
            transform: "scale(0.98)",
            borderColor: "#bec3c9",
          }}
        >
          Inicia Sesión
        </Button>
      </form>
    </Flex>
  );
}

export default Login;
