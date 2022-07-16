import { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatePost } from "../../store/features/postsSlice";

const UpdateBlog = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const postInfo = useSelector((state) =>
    state.posts.posts.find((p) => p._id === blogId)
  );

  console.log({ blogId, postInfo });

  const dispatch = useDispatch();
  const [addPostStatus, setAddPostStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [post, setPost] = useState({
    title: postInfo?.title || "",
    description: postInfo?.description || "",
    author: postInfo?.author || "",
  });

  const { title, description, author } = post;

  const handlePost = (field, value) => {
    setPost({ ...post, [field]: value });
  };

  const canSave = [title, description, author].every(Boolean);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (canSave) {
      try {
        setAddPostStatus("pending");
        await dispatch(updatePost({ blogId, post })).unwrap();
        setPost({
          title: "",
          description: "",
          author: "",
        });
        setError(null);
        navigate(`/blog/${blogId}`);
      } catch (error) {
        setError("Something Went Wrong");
        setAddPostStatus("idle");
      } finally {
        setAddPostStatus("idle");
      }
    }
  };

  useEffect(() => {
    if (postInfo) {
      setPost({
        title: postInfo?.title || "",
        description: postInfo?.description || "",
        author: postInfo?.author || "",
      });
    }
  }, [postInfo]);
  return (
    <Row className="m-5">
      <Col sm={6} className="mx-auto">
        {error && <Alert variant="warning">{error}</Alert>}
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Post Title</Form.Label>
            <Form.Control
              placeholder="Enter title.."
              value={title}
              onChange={(e) => handlePost("title", e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={description}
              placeholder="content here ..."
              onChange={(e) => handlePost("description", e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Author</Form.Label>
            <Form.Control
              value={author}
              placeholder="Author Name ..."
              onChange={(e) => handlePost("author", e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {addPostStatus === "pending" ? "Loading..." : "Update Post"}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default UpdateBlog;
