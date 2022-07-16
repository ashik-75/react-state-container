import { useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNewPost } from "../../store/features/postsSlice";

const AddBlog = () => {
  const dispatch = useDispatch();
  const [addPostStatus, setAddPostStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [post, setPost] = useState({
    title: "",
    description: "",
    author: "",
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
        await dispatch(addNewPost(post)).unwrap();
        setPost({
          title: "",
          description: "",
          author: "",
        });
        setError(null);
      } catch (error) {
        setError("Something Went Wrong");
        setAddPostStatus("idle");
      } finally {
        setAddPostStatus("idle");
      }
    }
  };
  return (
    <Row>
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
            {addPostStatus === "pending" ? "Loading..." : "Add Post"}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default AddBlog;
