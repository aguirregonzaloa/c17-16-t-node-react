import {
  Heading,
  Input,
  Text,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useFormik } from "formik";
import { validateRegister as validate } from "../../utils/FormValidation/baseValidation";
import { useRegisterUser } from "../../utils/hooks/userQuery";

import * as React from "react";

function Register() {
  const { mutateAsync } = useRegisterUser();
  const [errorRegister, setErrorRegister] = React.useState();
  const [successRegister, setSuccessRegister] = React.useState();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpass: "",
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      const response = mutateAsync(values);

      response
        .then((data) => {
          setSuccessRegister(data.message);
        })
        .catch((errors) => {
          const { message } = errors.response.data;
          setErrorRegister(message);
        })
        .finally(() => setSubmitting(false));
    },
  });
  return (
    <Flex
      padding="32px 40px"
      bg="gray.100"
      direction="column"
      align="center"
      justify="center"
      width={"455px"}
      margin={"0 auto"}
    >
      <Heading as="h2" size="xl" noOfLines={1} mb={"8px"}>
        Registrate
      </Heading>
      <Heading as="h4" size="md" noOfLines={1} mb={"24px"}>
        Ya tienes una cuenta?{" "}
        <ChakraLink
          as={ReactRouterLink}
          to="/login"
          color={"azulacento.500"}
          fontWeight={"700"}
        >
          Inicia sesión
        </ChakraLink>
      </Heading>
      <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
        <FormControl mb={"16px"}>
          <FormLabel mb={"4px"} htmlFor="name">
            Nombre
          </FormLabel>
          <Input
            id="name"
            name="name"
            type="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <Text color={"red"}>{formik.errors.name}</Text>
          ) : null}
        </FormControl>
        <FormControl mb={"16px"}>
          <FormLabel mb={"4px"} htmlFor="email">
            Correo electrónico
          </FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />{" "}
          {formik.errors.email ? (
            <Text color={"red"}>{formik.errors.email}</Text>
          ) : null}
        </FormControl>

        <FormControl mb={"16px"}>
          <FormLabel mb={"4px"} htmlFor="password">
            Contraseña
          </FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <Text color={"red"}>{formik.errors.password}</Text>
          ) : null}
        </FormControl>
        <FormControl mb={"24px"}>
          <FormLabel mb={"4px"} htmlFor="confirmpass">
            Confirmar Contraseña
          </FormLabel>
          <Input
            id="confirmpass"
            name="confirmpass"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmpass}
          />
          {formik.errors.confirmpass ? (
            <Text color={"red"}>{formik.errors.confirmpass}</Text>
          ) : null}
        </FormControl>

        <Button
          colorScheme="azulacento"
          textColor={"white"}
          isLoading={formik.isSubmitting}
          isDisabled={
            formik.errors.name ||
            formik.errors.email ||
            formik.errors.password ||
            formik.errors.confirmpass
          }
          type="submit"
          width={"100%"}
        >
          Registrate
        </Button>
        {successRegister ? (
          <Text
            mt={2}
            width={"100%"}
            textAlign={"center"}
            color={"green"}
            bg={"verdeacento.200"}
            fontWeight={700}
          >
            {successRegister}
          </Text>
        ) : null}
        {errorRegister ? (
          <Text
            mt={2}
            width={"100%"}
            textAlign={"center"}
            color={"rojo.300"}
            bg={"rojo.200"}
            fontFamily="Poppins-Medium"
          >
            {errorRegister}
          </Text>
        ) : null}
      </form>
    </Flex>
  );
}

export default Register;
