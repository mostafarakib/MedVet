import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Service.css";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { tagline, description, icon, id } = props.service;

  return (
    <Col>
      <Card>
        <div className="service_card">
          <div className="service-icon-container m-4">
            <img className="service-icon " src={icon} alt="" />
          </div>
          <Card.Body>
            <Card.Title>{tagline}</Card.Title>
            <Card.Text className="text-grey">{description}</Card.Text>
            <Link to={`services/${id}`}>
              <button className="btn-first">View Details</button>
            </Link>
          </Card.Body>
        </div>
      </Card>
    </Col>
  );
};

export default Service;
