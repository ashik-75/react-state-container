import "bootstrap/dist/js/bootstrap.js";
import "bootswatch/dist/lux/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import App from "./App";
import PostContextProvider from "./context/PostContext";
import UserContextProvider from "./context/UserContext";
import { fetchPosts } from "./store/features/postsSlice";
import store from "./store/store";

store.dispatch(fetchPosts());

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <UserContextProvider>
        <PostContextProvider>
          <App />
        </PostContextProvider>
      </UserContextProvider>
    </Provider>
  </QueryClientProvider>
);
