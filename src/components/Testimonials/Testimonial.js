import React from "react";
import { Carousel } from "react-bootstrap";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial-container p-5">
      <h6 className="section-intro--2 mt-4">Testimonials</h6>
      <h2 className="section-headline">What Our Clients Say</h2>
      <Carousel variant="dark" className="w-50 mx-auto p-5 pt-0">
        <Carousel.Item>
          <img
            className="d-block testimonial-img"
            src="/images/doctor-6.jpg"
            alt="First slide"
          />
          <p className="w-75 mx-auto">
            I cannot stress enough how wonderful this vet clinic is. Dr. Foster
            and his team are wonderful, caring, helpful and so knowledgeable!
            Every time I've taken Lola in, I receive the best service and I know
            that she is in good hands. I would recommend this vet clinic to
            anyone and everyone. Keep up the great work!
          </p>
          <h5 className="mt-4">Shawn Mendes</h5>
          <span>
            <small>Pet Owner</small>
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block testimonial-img"
            src="/images/doctor-5.jpg"
            alt="Second slide"
          />
          <p className="w-75 mx-auto">
            I cannot stress enough how wonderful this vet clinic is. Dr. Foster
            and his team are wonderful, caring, helpful and so knowledgeable!
            Every time I've taken Lola in, I receive the best service and I know
            that she is in good hands. I would recommend this vet clinic to
            anyone and everyone. Keep up the great work!
          </p>
          <h5 className="mt-4">Tailor Swift</h5>
          <span>
            <small>Pet Owner</small>
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block testimonial-img"
            src="/images/doctor-4.jpg"
            alt="Third slide"
          />
          <p className="w-75 mx-auto">
            I cannot stress enough how wonderful this vet clinic is. Dr. Foster
            and his team are wonderful, caring, helpful and so knowledgeable!
            Every time I've taken Lola in, I receive the best service and I know
            that she is in good hands. I would recommend this vet clinic to
            anyone and everyone. Keep up the great work!
          </p>
          <h5 className="mt-4">Ketty Perry</h5>
          <span>
            <small>Pet Owner</small>
          </span>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonial;
