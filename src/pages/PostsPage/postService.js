import axios from "axios";
import { useQuery } from "react-query";

const fetchPosts = () => {
  return axios.get("http://localhost:5000/api/blog");
};

export const useGetAllPosts = () => {
  const { data, isLoading, isError, isSuccess, isFetched, status, error } =
    useQuery(["posts"], fetchPosts);

  console.log({
    data,
    isLoading,
    isError,
    isSuccess,
    isFetched,
    status,
    error,
  });

  return { data, isLoading, isError, isSuccess, isFetched, status, error };
};
