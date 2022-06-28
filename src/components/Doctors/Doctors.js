import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useDoctors from "../../hooks/useDoctors";
import Doctor from "./Doctor";

const Doctors = () => {
  const { doctors } = useDoctors();
  return (
    <div className="mt-4 p-5">
      <h6 className="section-intro">MedVet Stuffs</h6>
      <h2 className="section-headline">Meet Our Groomers</h2>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4 mt-3">
          {doctors.slice(0, 3).map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor}></Doctor>
          ))}
        </Row>
      </Container>
      <Link to="/doctors">
        <button className="btn-first mt-4">Meet All</button>
      </Link>
    </div>
  );
};

export default Doctors;
