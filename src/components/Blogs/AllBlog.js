import React from "react";
import { Col, Card } from "react-bootstrap";

const AllBlog = (props) => {
  const { img, date, title, paragraph } = props.blog;
  return (
    <Col className="card-services">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <p className="section-intro">{date}</p>
          <Card.Title>{title}</Card.Title>
          <hr className="w-75 mx-auto" />
          <Card.Text className="text-grey">{paragraph}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AllBlog;
