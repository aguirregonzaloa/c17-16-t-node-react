import { useQuery } from "@tanstack/react-query";
import { getUsers, getUserID, LoginUser } from "../api/Users/Users";

export const useGetUsers = () => {
  return useQuery({ queryKey: ["users"], queryFn: getUsers });
};

export const useGetUser = (id) => {
  return useQuery({ queryKey: ["user", id], queryFn: () => getUserID(id) });
};

export const useLoginUser = () => {
  return useQuery({ queryKey: ["login"], queryFn: LoginUser });
};

// export const useGetPostById = (id) => {

//   const service = getQueryService();
//     const queryClient = useQueryClient();
//     const { data: post } = useQuery(["post", id], () => {
//       return service.getPostById(id);
//     });
//     return {
//       post,
//     };
//   };
