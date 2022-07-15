import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/features/postsSlice";

const Landing = () => {
  const dispatch = useDispatch();
  const { posts, error, status } = useSelector((state) => state.posts);

  console.log({ posts, error, status });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, []);
  return (
    <div>
      {status === "loading" ? (
        <div>Loading...</div>
      ) : status === "failed" ? (
        <div>{error}</div>
      ) : (
        posts?.map((dt) => <div>{dt.title}</div>)
      )}
    </div>
  );
};

export default Landing;
