import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useServices from "../../hooks/useServices";
import Service from "./Service";
import "./Services.css";

const Services = () => {
  const { services } = useServices();

  return (
    <div className="services-container pb-5">
      <h6 className="section-intro--2">What We Offer</h6>
      <h2 className="section-headline">Our Services</h2>
      <Container className="mt-5">
        <Row xs={1} md={2} className="g-4">
          {services.slice(0, 6).map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </Container>
      <Link to="/services">
        <button className="btn-third mt-5">all services</button>
      </Link>
    </div>
  );
};

export default Services;
