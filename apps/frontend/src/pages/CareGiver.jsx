import { Container, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import CaregiverCard from "../components/CaregiverCard/CaregiverCard";
import { useContext } from "react";
import { UserContext } from "../utils/context/UserContext";

const CareGivers = (props) => {
  const { state } = useLocation();
  const { user, setUser } = useContext(UserContext);
  const addReservation = (item) => {
    const newReservation = {
      id: user.reservations.length + 1,
      date: "05/06/24",
      careName: item.name,
      mypet: "lolo",
    };
    //agregar a pets al array de user
    const reservations = [...user.reservations, newReservation];
    //Sobreescribir pets sin perder datos previos de user
    const addUserReservations = { ...user, reservations };
    setUser(addUserReservations);
  };
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
          <CaregiverCard
            name={item.name}
            key={item.id}
            onAddReservation={() => addReservation(item)}
          />
        ))}
      </ul>
    </Container>
  );
};

export default CareGivers;
