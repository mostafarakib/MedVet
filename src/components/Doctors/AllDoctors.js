import React from "react";
import { Container, Row } from "react-bootstrap";
import useDoctors from "../../hooks/useDoctors";
import AllDoctor from "./AllDoctor";

const AllDoctors = () => {
  const { doctors } = useDoctors();
  return (
    <div>
      <h2 className="section-headline m-5">Our Groomers</h2>
      <Container className="all-services">
        <Row xs={1} md={2} lg={3} className="g-4">
          {doctors.map((doctor) => (
            <AllDoctor key={doctor.id} doctor={doctor}></AllDoctor>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllDoctors;
