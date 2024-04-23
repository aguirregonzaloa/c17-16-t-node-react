import { Container, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import CaregiverCard from "../components/CaregiverCard/CaregiverCard";

const CareGivers = (props) => {
  const { state } = useLocation();
  return (
    <Container pt={"80px"} minH={"1200px"}>
      <Heading
        as="h3"
        fontFamily="Poppins-Medium"
        fontSize="24px"
        fontWeight="600"
        lineHeight="30px"
        color="gris.800"
      >
        Cuidadores
      </Heading>
      {/* {JSON.stringify(state)} */}
      <ul>
        {state.data.map((item) => (
          <CaregiverCard name={item.name} key={item.id} />
        ))}
      </ul>
    </Container>
  );
};

export default CareGivers;
