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
  Select,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";

import * as React from "react";
import { UserContext } from "../../utils/context/UserContext";
import { useAddReservations } from "../../utils/hooks/reservationQuery";
import moment from "moment";

const ModalReservations = (props) => {
  const { isOpen, onClose, sitterID, petstartDateID } = props;
  const { user } = React.useContext(UserContext);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const { mutateAsync } = useAddReservations();

  const formik = useFormik({
    initialValues: {
      userId: user.userId,
      petID: "hdUHaEBPokgGP4OrNcTFebTeg572",
      petstartDateID: "2024/07/04",
      sitterID,
      endDate: "2025/04/05",
    },
    // validate,
    onSubmit: (values, { setSubmitting }) => {
      const response = mutateAsync(values);
      response
        .then((data) => console.log(data))
        .catch((e) => console.log(e))
        .finally(() => {
          setSubmitting(false);
        });
      alert(JSON.stringify("Su Reserva Ya ha Sido Realizar"));
      // setSubmitting(false);
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
                    <strong>$7000</strong> día
                  </Heading>
                </Flex>
              </ModalHeader>
            </ModalBody>
            <form onSubmit={formik.handleSubmit} style={{ padding: "20px" }}>
              <FormControl margin={"4px"}>
                <FormLabel htmlFor="currentDate">Fecha</FormLabel>
                <Text>
                  {moment(petstartDateID).format("DD/MM/YYYY").toString()}
                </Text>
                {/* {formik.errors.password ? (
            <Text color={"red"}>{formik.errors.password}</Text>
          ) : null} */}
              </FormControl>
              <FormControl margin={" 40px 0 "}>
                <FormLabel mb={"4px"} htmlFor="currentDate">
                  Tu Mascota
                </FormLabel>
                <Select
                  id="petID"
                  name="petID"
                  placeholder="Select option"
                  onChange={formik.handleChange}
                  value={formik.values.petID}
                >
                  {user?.pets.map((pet) => (
                    <option key={pet.id} value={pet.id}>
                      {pet.name}
                    </option>
                  ))}
                </Select>
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
                $7000
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
