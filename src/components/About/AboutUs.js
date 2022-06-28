import React from "react";
import { Container } from "react-bootstrap";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <Container className="aboutus_container p-5 mt-5">
      <div className="aboutus_container-img">
        <img
          className="aboutus_container-img--1"
          src="images/about2.jpg"
          alt=""
        />
        <img
          className="aboutus_container-img--2"
          src="images/about1.jpg"
          alt=""
        />
      </div>
      <div className="aboutus_container-content">
        <h6 className="section-intro">About MedVet</h6>
        <h2 className="section-headline">
          Your Pet's Nutritional Health is Very Important & Our Priority
        </h2>
        <p>
          At MedVet, the ambition is that you should always feel welcome both as
          an advertiser and a visitor. A modern and easy-to-manage page makes it
          easier for Users to maneuver forward. or then randomised words which
          don't look even slightly believable you need to be sure there isn't
          anything embarrassing vestibu lum at eros.
        </p>
        <button className="btn-first">Read More</button>
      </div>
    </Container>
  );
};

export default AboutUs;
