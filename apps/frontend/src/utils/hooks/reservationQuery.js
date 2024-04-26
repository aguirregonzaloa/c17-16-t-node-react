import { useQuery, useMutation } from "@tanstack/react-query";
import {
  createReservation,
  getReservations,
} from "../api/Reservations/Reservations";

export const useAddPet = () => {
  return useMutation({
    mutationFn: createReservation,
    onSuccess: (data) => {
      //"Se ha logeado correctamente";
      return data;
    },
    onError: (errors) => {
      return errors;
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries('create');
    // }
  });
};

export const useGetPets = () => {
  return useQuery({
    queryKey: ["reservations"],
    queryFn: getReservations,
  });
};
