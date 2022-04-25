import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataTable from "./components/DataTable";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Singledata from "./components/Singledata";
import TestBar from "./components/TestBar";

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Navbar />
        <TestBar />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/data" element={<DataTable />} />
          <Route path="/comments/:commentId" element={<Singledata />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
