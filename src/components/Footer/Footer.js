import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container p-5">
      <Container className="footer-container--main">
        <div>
          <div className="d-flex align-items-center footer_logo-container">
            <img className="logo_img" src="/logo1.png" alt="logo" />
            <div className="logo-container">
              <div className="logo_name">
                Med<span className="logo_name-colored">Vet</span>
              </div>
              <span className="logo_name-tagline--footer">
                Veterinary Clinic
              </span>
            </div>
          </div>
          <p className="mt-5 pe-5">
            We only care about our customers satisfaction. We are a renowned
            Veterinary Clinic in Dhaka Bangladesh. Please feel free to share us
            your opinion about us.
          </p>
        </div>

        <div className="footer_sections">
          <h5 className="mb-5">Contact Info</h5>

          <div className="d-flex align-items-center">
            <FontAwesomeIcon className="me-3" icon={faLocationDot} />
            <div>
              <span>Our Location</span>
              <h6 className="contact_details-info-colored">Banani, Dhaka</h6>
            </div>
          </div>
          <div className="d-flex align-items-center mt-2">
            <FontAwesomeIcon className="me-3" icon={faClock} />
            <div>
              <span>We are open</span>
              <h6 className="contact_details-info-colored">08:00 - 21:00</h6>
            </div>
          </div>
          <div className="d-flex align-items-center mt-2">
            <FontAwesomeIcon className="me-3" icon={faPhone} />
            <div className="me-1">
              <span>Call Us Now</span>
              <h6 className="contact_details-info-colored">01122332211</h6>
            </div>
          </div>
        </div>

        <div className="footer_sections">
          <h5 className="mb-5">Useful Links</h5>
          <Link className="footer-links mb-2" to="/services">
            <span> &rsaquo;</span> Services
          </Link>
          <br />
          <Link className="footer-links mb-2" to="/doctors">
            <span> &rsaquo;</span> Doctors
          </Link>
          <br />
          <Link className="footer-links" to="/login">
            <span> &rsaquo;</span> Login
          </Link>
        </div>
      </Container>
      <hr />
      <span className="text-grey">
        &copy; Mostafa Rakib 2022. All rights reserved
      </span>
    </div>
  );
};

export default Footer;
