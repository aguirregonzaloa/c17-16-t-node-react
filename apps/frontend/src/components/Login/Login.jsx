import {
  Heading,
  Input,
  Button,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Link as ChakraLink,
  useDisclosure,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import { validateLogin as validate } from "../../utils/FormValidation/baseValidation";

import * as React from "react";
import { useLoginUser } from "../../utils/hooks/userQuery";
import { UserContext } from "../../utils/context/UserContext";
// import ModalUser from "../ModalUser/ModalUser";

function Login({ sendDataToParent }) {
  const { mutateAsync } = useLoginUser();
  const [errorLogin, setErrorLogin] = React.useState("");
  const { setUser } = React.useContext(UserContext);
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const changeToggle = () => {
    sendDataToParent(false);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      const response = mutateAsync(values);
      onClose();

      response
        .then((data) => {
          console.log(data);
          //Usar data context para cargar usuario en la Barra
          //Navegacíon
          setUser(data);
          // navigate("/");
        })
        .catch((errors) => {
          const { message } = errors.response.data;
          setErrorLogin(message);
        })
        .finally(() => setSubmitting(false));
    },
  });
  return (
    <Flex
      padding="32px 40px"
      direction="column"
      align="center"
      justify="center"
    >
      {/* <ModalUser isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
      <Heading as={"h2"} size="xl" mb={"8px"}>
        Ingresar
      </Heading>
      <Heading as={"h4"} size="md" mb={"24px"}>
        No tienes cuenta?{" "}
        <ChakraLink
          onClick={changeToggle}
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
            placeholder="username@email.com"
            required
          />
          {formik.errors.email ? (
            <Text color={"red"}>{formik.errors.email}</Text>
          ) : null}
        </FormControl>
        <FormControl mb={"24px"}>
          <FormLabel htmlFor="password">Contraseña</FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="****...."
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
          isDisabled={formik.errors.email || formik.errors.password}
          type="submit"
          width={"100%"}
        >
          Inicia Sesión
        </Button>
        {errorLogin ? (
          <Text
            mt={2}
            width={"100%"}
            textAlign={"center"}
            color={"rojo.300"}
            bg={"rojo.200"}
            fontWeight={700}
          >
            {errorLogin}
          </Text>
        ) : null}
      </form>
    </Flex>
  );
}

export default Login;
