import { Badge, Button, Col, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Blog = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Col sm={4} className="mb-2">
      <div className="card p-5">
        <h5 className="mb-2">{data.title}</h5>
        <p>{data.description}</p>

        <div style={{ display: "flex", gap: "10px" }}>
          {data.genre.map((gen) => (
            <Badge
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
              }}
              bg="dark"
            >
              {gen}
            </Badge>
          ))}
        </div>

        <Stack direction="horizontal" gap={3}>
          <Button as={Link} to={`/blog/${data?._id}`} variant="outline-dark">
            Details
          </Button>
        </Stack>
      </div>
    </Col>
  );
};

export default Blog;
