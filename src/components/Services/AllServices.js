import React from "react";
import { Container, Row } from "react-bootstrap";
import useServices from "../../hooks/useServices";
import AllService from "./AllService";
import "./AllServices.css";

const AllServices = () => {
  const { services } = useServices();
  return (
    <div>
      <h2 className="section-headline m-5">Services</h2>
      <Container className="all-services">
        <Row xs={1} md={2} lg={3} className="g-4">
          {services.map((service) => (
            <AllService key={service.id} service={service}></AllService>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllServices;
