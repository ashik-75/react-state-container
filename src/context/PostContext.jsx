import { createContext, useReducer } from "react";
const intialState = 0;
function counterReducer(state, action) {
  console.log({ type: action.type });
  switch (action.type) {
    case "inc":
      console.log("Entered");
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return state;
  }
}

function postReducer(state, action) {
  switch (action.type) {
    case "fetch":
      return action.payload;
    case "remove":
      return [];
    default:
      return state;
  }
}

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [posts, dispatch] = useReducer(postReducer, []);
  const [count, dispatchCounter] = useReducer(counterReducer, intialState);

  console.log({ posts, count });

  return (
    <PostContext.Provider value={{ posts, dispatch, dispatchCounter, count }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
