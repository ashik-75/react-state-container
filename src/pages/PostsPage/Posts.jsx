import PostList from "./PostList";
import { useGetAllPosts } from "./postService";

const Posts = () => {
  const { data, isLoading, isError, isSuccess } = useGetAllPosts();
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error</div>
      ) : data.data.length === 0 ? (
        <div>Emptry</div>
      ) : (
        <PostList posts={data.data} />
      )}
    </div>
  );
};

export default Posts;
