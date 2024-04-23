import { Flex, Input, FormControl, FormLabel, Button } from "@chakra-ui/react";
import { Form, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useGetGivers } from "../../utils/hooks/giversQuery";

const SearchingBar = () => {
  const navegate = useNavigate();
  const { mutateAsync } = useGetGivers();
  const formik = useFormik({
    initialValues: {
      pet: "Perro",
      service: "Alojamiento",
      currentDate: "",
    },
    // validate,
    onSubmit: (values, { setSubmitting }) => {
      const givers = mutateAsync();
      // alert(JSON.stringify(values));
      givers
        .then((data) => navegate("/cuidadores", { state: { data } }))
        .catch((e) => console.log(e))
        .finally(() => setSubmitting(false));
    },
  });
  return (
    <Flex
      padding="32px 40px"
      border={"2px solid"}
      borderColor={"azulacento.200"}
      borderRadius={10}
      bg={"white"}
      align="center"
      justify="center"
      zIndex={"10"}
      width={"840px"}
    >
      <form onSubmit={formik.handleSubmit}>
        <Flex width={"100%"} justifyContent={"center"} alignItems={"center"}>
          <FormControl>
            <FormLabel mb={"4px"} htmlFor="pet">
              Mascota
            </FormLabel>
            <Input
              id="pet"
              name="pet"
              type="pet"
              onChange={formik.handleChange}
              value={formik.values.pet}
            />
            {/* {formik.errors.name ? (
            <Text color={"red"}>{formik.errors.name}</Text>
          ) : null} */}
          </FormControl>
          <FormControl>
            <FormLabel mb={"4px"} htmlFor="service">
              Servicio
            </FormLabel>
            <Input
              id="service"
              name="service"
              type="service"
              onChange={formik.handleChange}
              value={formik.values.service}
            />{" "}
            {/* {formik.errors.email ? (
            <Text color={"red"}>{formik.errors.email}</Text>
          ) : null} */}
          </FormControl>

          <FormControl>
            <FormLabel mb={"4px"} htmlFor="currentDate">
              Fecha
            </FormLabel>
            <Input
              id="currentDate"
              name="currentDate"
              type="Date"
              onChange={formik.handleChange}
              value={formik.values.currentDate}
            />
            {/* {formik.errors.password ? (
            <Text color={"red"}>{formik.errors.password}</Text>
          ) : null} */}
          </FormControl>

          <Button
            colorScheme="azulacento"
            textColor={"white"}
            isLoading={formik.isSubmitting}
            isDisabled={
              formik.errors.pet ||
              formik.errors.service ||
              formik.errors.currentDate
            }
            type="submit"
            width={"100%"}
          >
            Buscar
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default SearchingBar;
