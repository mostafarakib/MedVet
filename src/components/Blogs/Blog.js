import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Blog = (props) => {
  const { title, img, paragraph, date, id } = props.blog;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <p className="section-intro">{date}</p>
          <Card.Title>{title}</Card.Title>
          <hr className="w-75 mx-auto" />
          <Card.Text className="text-grey">
            {paragraph.slice(0, 175)}
            <br />
            ...
          </Card.Text>
          <Link to={`blogs/${id}`}>
            <button className="btn-first">Read More</button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Blog;
