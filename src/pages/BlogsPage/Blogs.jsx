import { Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import AddBlog from "./AddBlog";
import Blog from "./Blog";

const Blogs = () => {
  const { posts, error, status } = useSelector((state) => state.posts);

  return (
    <div className="m-5">
      <div className="mb-4">
        <AddBlog />
      </div>
      {status === "loading" ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "400px",
          }}
        >
          <Spinner animation="border" />
        </div>
      ) : error ? (
        <div>Something went wrong</div>
      ) : posts.length === 0 ? (
        <div>Emptty post</div>
      ) : (
        <Row className="">
          {posts.map((post) => (
            <Blog data={post} />
          ))}
        </Row>
      )}
    </div>
  );
};

export default Blogs;
