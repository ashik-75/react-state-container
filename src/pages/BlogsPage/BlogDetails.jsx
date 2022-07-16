import { useState } from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletePost } from "../../store/features/postsSlice";

const BlogDesign = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deleteStatus, setDeleteStatus] = useState("idle");

  const handleDelete = async () => {
    try {
      setDeleteStatus("pending");
      await dispatch(deletePost(post._id)).unwrap();
      navigate("/");
    } catch (error) {
      setDeleteStatus("idle");
    } finally {
      setDeleteStatus("idle");
    }
  };

  return (
    <Row>
      <Col sm={6} className="mx-auto m-5">
        <div className="card p-5">
          <h4 className="mb-3">Blog Details - {post._id}</h4>
          <h5>{post.title}</h5>
          <h5>{post.author || "Captch"}</h5>
          <div className="mb-3">{post.description}</div>
          <Stack direction="horizontal" gap={2}>
            <Button
              variant="outline-info"
              as={Link}
              to={`/blog/${post._id}/update`}
            >
              Update
            </Button>
            <Button variant="outline-danger" onClick={handleDelete}>
              {deleteStatus === "pending" ? "Loading..." : "Delete Post"}
            </Button>
          </Stack>
        </div>
      </Col>
    </Row>
  );
};

const BlogDetails = () => {
  const { blogId } = useParams();
  const post = useSelector((state) =>
    state.posts.posts?.find((post) => post._id === blogId)
  );

  return <div>{post ? <BlogDesign post={post} /> : <div>Npt Found</div>}</div>;
};

export default BlogDetails;
