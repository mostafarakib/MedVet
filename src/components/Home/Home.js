import React from "react";
import HeaderContent from "../Header/HeaderContent";
import AboutUs from "../About/AboutUs";
import Services from "../Services/Services";
import Doctors from "../Doctors/Doctors";
import Testimonial from "../Testimonials/Testimonial";
import Footer from "../Footer/Footer";
import Blogs from "../Blogs/Blogs";

const Home = () => {
  return (
    <div>
      <HeaderContent></HeaderContent>
      <AboutUs></AboutUs>
      <Services></Services>
      <Doctors></Doctors>
      <Testimonial></Testimonial>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
