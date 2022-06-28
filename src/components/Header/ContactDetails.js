import React from "react";
import { Container } from "react-bootstrap";
import "./ContactDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const ContactDetails = () => {
  return (
    <React.Fragment>
      <Container>
        <div className="d-flex pt-2 pb-2 contact-details-container align-items-center">
          <img className="logo_img" src="/logo.png" alt="logo" />
          <div className="me-auto logo-container">
            <div className="logo_name">
              Med<span className="logo_name-colored">Vet</span>
            </div>
            <span className="logo_name-tagline">Veterinary Clinic</span>
          </div>
          <div className="contact_details-info d-flex">
            <div>
              <FontAwesomeIcon
                className="me-2 contact_details-icon"
                icon={faLocationDot}
              />
              <div>
                <span>Our Location</span>
                <h6 className="contact_details-info-colored">Banani, Dhaka</h6>
              </div>
            </div>
            <div>
              <FontAwesomeIcon
                className="me-2 contact_details-icon"
                icon={faClock}
              />
              <div>
                <span>We are open</span>
                <h6 className="contact_details-info-colored">08:00 - 21:00</h6>
              </div>
            </div>
            <div>
              <FontAwesomeIcon
                className="me-2 contact_details-icon"
                icon={faPhone}
              />
              <div className="me-1">
                <span>Call Us Now</span>
                <h6 className="contact_details-info-colored">01122332211</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default ContactDetails;
