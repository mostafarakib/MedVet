import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./NavigationBar.css";

const NavigationBar = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="sticky-nav">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/doctors">
                Doctors
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
            </Nav>
            {!user.email ? (
              <Link to="login">
                <button className="btn-second">Login</button>
              </Link>
            ) : (
              <NavDropdown
                title={
                  <img
                    className="thumbnail-image"
                    src={!user.photoURL ? "/sample-photo.jpeg" : user.photoURL}
                    alt=""
                  />
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item>
                  <h6>{user.displayName}</h6>
                </NavDropdown.Item>

                <hr />
                <NavDropdown.Item>Privacy Policy</NavDropdown.Item>
                <NavDropdown.Item>Terms & Conditions</NavDropdown.Item>
                <hr />
                <NavDropdown.Item onClick={logOut}>Sign Out</NavDropdown.Item>
              </NavDropdown>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
