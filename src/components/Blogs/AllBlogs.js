import React from "react";
import useBlogs from "../../hooks/useBlogs";
import { Container, Row } from "react-bootstrap";
import AllBlog from "./AllBlog";

const AllBlogs = () => {
  const { blogs } = useBlogs();
  return (
    <div>
      <h2 className="section-headline m-5">Blogs</h2>
      <Container className="all-services">
        <Row xs={1} md={2} className="g-4">
          {blogs.map((blog) => (
            <AllBlog key={blog.id} blog={blog}></AllBlog>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllBlogs;
