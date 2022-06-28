import React from "react";
import { Card, Col } from "react-bootstrap";
import "./AllService.css";

const AllService = (props) => {
  const { tagline, img, description } = props.service;
  return (
    <Col className="card-services">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{tagline}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AllService;
