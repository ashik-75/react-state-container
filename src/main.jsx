import "bootstrap/dist/js/bootstrap.js";
import "bootswatch/dist/lux/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import PostContextProvider from "./context/PostContext";
import UserContextProvider from "./context/UserContext";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContextProvider>
        <PostContextProvider>
          <App />
        </PostContextProvider>
      </UserContextProvider>
    </Provider>
  </React.StrictMode>
);
