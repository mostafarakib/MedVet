import React from "react";
import { Card, Col } from "react-bootstrap";

const Doctor = (props) => {
  const { name, img, type } = props.doctor;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="text-grey">{type}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Doctor;
