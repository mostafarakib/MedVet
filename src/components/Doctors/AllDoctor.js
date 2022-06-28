import React from "react";
import { Col, Card } from "react-bootstrap";

const AllDoctor = (props) => {
  const { name, img, type } = props.doctor;
  return (
    <div>
      <Col className="card-services">
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{type}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default AllDoctor;
