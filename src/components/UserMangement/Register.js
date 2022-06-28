import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const {
    nameChangeHandler,
    emailChangeHandler,
    passwordChangeHandler,
    userRegistrationHandler,
    error,
    setError,
    updateUserProfile,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const redirectURL = location.state?.from || "/";

  const signUpHandler = (event) => {
    event.preventDefault();

    userRegistrationHandler()
      .then((result) => {
        setError("");
        updateUserProfile();
        navigate(redirectURL);
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <Container className="p-5">
        <Row>
          <Col>
            <div className="login_box mx-auto">
              <img className="login_box-img pt-5 pb-4" src="/logo.png" alt="" />

              <div className="px-5 py-3">
                <form
                  className="login__form d-flex flex-column"
                  onSubmit={signUpHandler}
                >
                  <input
                    type="text"
                    placeholder="Username"
                    onBlur={nameChangeHandler}
                  />
                  <br />
                  <input
                    type="email"
                    placeholder="E-mail"
                    onBlur={emailChangeHandler}
                  />
                  <br />
                  <input
                    type="password"
                    placeholder="Password"
                    onBlur={passwordChangeHandler}
                  />
                  {error && (
                    <div className="text-error text-start">{error}</div>
                  )}
                  <br />

                  <button
                    className="btn-third align-self-center ps-5 pe-5"
                    type="submit"
                  >
                    Sign up
                  </button>
                </form>
                <br />
                <p className="text-start">
                  Already an user?{" "}
                  <Link className="text-link" to="/login">
                    {" "}
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
