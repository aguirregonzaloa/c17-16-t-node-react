import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { Formik, useFormik } from "formik";

import * as React from "react";

const ModalReservations = (props) => {
  const { isOpen, onOpen, onClose } = props;
  // const [toggle, setToggle] = React.useState(true);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  function handleDataFromChild(data) {
    //   setToggle(data);
  }
  function closeModal() {
    onClose();
  }
  const formik = useFormik({
    initialValues: {
      pet: "Perro",
      currentDate: "",
    },
    // validate,
    onSubmit: (values, { setSubmitting }) => {
      alert(JSON.stringify(values));

      setSubmitting(false);
    },
  });

  return (
    <div>
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size="xl" // sets the size of the modal
          isCentered // centers the modal on the screen
        >
          <ModalOverlay />
          <ModalContent
            w="100%" // sets the width of the modal content
            maxW="300px" // sets the maximum width of the modal content
            mx="auto" // centers the modal content horizontally
            bg="gray.100"
          >
            {/* <ModalHeader>Create your account</ModalHeader> */}
            <ModalCloseButton />
            <ModalBody>
              <ModalHeader>
                <Flex
                  gap={"20px"}
                  justifyContent={"center"}
                  alignContent={"center"}
                >
                  <Heading
                    as="h4"
                    fontSize={{ base: "16px", md: "20px", lg: "20px" }}
                    color={"azulacento.300"}
                    bg={"azulacento.100"}
                  >
                    Alojo
                  </Heading>
                  <Heading
                    fontSize={{ base: "16px", md: "20px", lg: "20px" }}
                    as="h3"
                    fontWeight={"300"}
                  >
                    <strong>$5000</strong> día
                  </Heading>
                </Flex>
              </ModalHeader>
            </ModalBody>
            <form onSubmit={formik.handleSubmit} style={{ padding: "20px" }}>
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
                isDisabled={formik.errors.pet || formik.errors.currentDate}
                type="submit"
                width={"100%"}
              >
                Reservar
              </Button>
            </form>
            {/* <ModalFooter> */}
            <Flex
              justify={"space-between"}
              padding={" 20px"}
              borderTop={"1px solid black"}
            >
              <Heading as={"h4"} fontSize={"20px"}>
                Total
              </Heading>
              {/* <Spacer /> */}
              <Heading as={"h4"} fontSize={"20px"}>
                $5000
              </Heading>
            </Flex>
            {/* </ModalFooter> */}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};

export default ModalReservations;
