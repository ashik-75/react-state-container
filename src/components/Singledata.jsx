import axios from "axios";
import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";

const getSingleComment = ({ queryKey }) => {
  console.log({
    queryKey,
  });
  return axios.get(
    `https://jsonplaceholder.typicode.com/comments/${queryKey[1]}`
  );
};

const Singledata = () => {
  const queryClient = useQueryClient();
  const { commentId } = useParams();

  const { data, isLoading } = useQuery(
    ["allData", commentId],
    getSingleComment,
    {
      initialData: () => {
        const data = queryClient
          .getQueryData("allData")
          ?.data?.find((prod) => prod?.id === parseInt(commentId));

        console.log("here is data", data);

        if (data) {
          return {
            data,
          };
        } else {
          return {
            data: undefined,
          };
        }
      },
    }
  );
  return (
    <div>
      {isLoading ? "Loading" : "no loading"}

      {data?.data ? <div>{data?.data?.name}</div> : <div>Nooooo</div>}
    </div>
  );
};

export default Singledata;
