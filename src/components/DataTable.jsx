import axios from "axios";
import React from "react";
import { Button, Table } from "react-bootstrap";
import { useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";

const initialData = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et",
  },
  {
    postId: 1,
    id: 3,
    name: "odio adipisci rerum aut animi",
    email: "Nikita@garfield.biz",
    body: "quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium omnis quibusdam delectus saepe quia accusamus maiores nam est cum et ducimus et vero voluptates excepturi deleniti ratione",
  },
];

const getComments = () => {
  return axios.get("https://jsonplaceholder.typicode.com/comments");
};

const DataTable = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, isSuccess, refetch } = useQuery(
    "allData",
    getComments
  );

  console.log("show data", queryClient.getQueryData("allData"));

  console.log({ data, isLoading, isError });
  return (
    <div>
      <Button onClick={refetch} variant="warning">
        Fetch
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && <div>Loading....</div>}
          {isSuccess &&
            data?.data?.map((comment) => (
              <tr>
                <td>{comment?.id}</td>
                <td>{comment?.name}</td>
                <td>{comment?.email}</td>
                <td>
                  <Link to={`/comments/${comment?.id}`}> view details</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
