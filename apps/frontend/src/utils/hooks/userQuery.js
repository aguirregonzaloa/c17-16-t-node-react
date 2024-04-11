import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/Users/Users";

export const useGetUsers = () => {
  return useQuery({ queryKey: ["users"], queryFn: getUsers });
};
