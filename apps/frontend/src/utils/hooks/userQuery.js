import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getUsers,
  getUserID,
  LoginUser,
  RegisterUser,
} from "../api/Users/Users";

//******PRUEBA DE QUERY*******/
export const useGetUsers = () => {
  return useQuery({ queryKey: ["users"], queryFn: getUsers });
};

export const useGetUser = (id) => {
  return useQuery({ queryKey: ["user", id], queryFn: () => getUserID(id) });
};
//********************************* */

//***********************************/
//LOGIN DE USUARIOS
export const useLoginUser = () => {
  return useMutation({
    mutationFn: LoginUser,
    onSuccess: (data) => {
      // console.log(data);
      const message = "Se ha logeado correctamente";
      alert(message);
      return data;
    },
    onError: () => {
      alert("there was an error");
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries('create');
    // }
  });
};
//******************************* */
//REGISTRO DE NUEVO USUARIO
export const useRegisterUser = () => {
  return useMutation({
    mutationFn: RegisterUser,
    onSuccess: (data) => {
      const message = "Se ha registrado correctamente!!!";
      alert(message);
      return data;
    },
    onError: () => {
      alert("there was an error");
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries('create');
    // }
  });
};
//*****************// */
