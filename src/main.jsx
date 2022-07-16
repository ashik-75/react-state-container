import "bootstrap/dist/js/bootstrap.js";
import "bootswatch/dist/lux/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import PostContextProvider from "./context/PostContext";
import UserContextProvider from "./context/UserContext";
import { fetchPosts } from "./store/features/postsSlice";
import store from "./store/store";

store.dispatch(fetchPosts());

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
