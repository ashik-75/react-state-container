import { Row } from "react-bootstrap";
import Blog from "../BlogsPage/Blog";

const PostList = ({ posts }) => {
  return (
    <Row>
      {posts.map((post) => (
        <Blog data={post} key={post._id} />
      ))}
    </Row>
  );
};

export default PostList;
