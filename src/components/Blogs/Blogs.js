import React from "react";
import { Container, Row } from "react-bootstrap";
import useBlogs from "../../hooks/useBlogs";
import Blog from "./Blog";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { blogs } = useBlogs();
  return (
    <div className="p-5 mt-4">
      <h6 className="section-intro">Our Blogs</h6>
      <h2 className="section-headline">Latest News & Blogs</h2>
      <Container className="p-5 w-75">
        <Row xs={1} md={2} className="g-4">
          {blogs.slice(0, 2).map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </Row>
      </Container>
      <Link to="/blogs">
        <button className="btn-first">All Blogs</button>
      </Link>
    </div>
  );
};

export default Blogs;
