import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";

const Home = () => {
  const info = useContext(PostContext);

  const { posts, dispatch, count, dispatchCounter } = info;

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await response.json();
    if (response.ok && result) {
      console.log("yes i am enter");
      dispatch({ type: "fetch", payload: result });
    }
  };
  return (
    <div className="h-[100vh] d-flex items-center justify-center">
      <div className="tracking-2 text-2xl">
        Home Page (Protected: authenticated user required)
      </div>
      <button class="btn" onClick={fetchPosts}>
        Fetch
      </button>
      <button
        class="btn btn-secondary"
        onClick={() => dispatch({ type: "remove" })}
      >
        Remove
      </button>
      {posts.length > 0 && (
        <ul>
          {posts.map((post) => (
            <li>{post.title}</li>
          ))}
        </ul>
      )}

      <div>
        <kbd>{count}</kbd>
        <button onClick={() => dispatchCounter({ type: "inc" })}>Inc</button>
        <button onClick={() => dispatchCounter({ type: "dec" })}>Dec</button>
      </div>
    </div>
  );
};

export default Home;
