import React from "react";
import "./Login.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    googleSignInHandler,
    emailChangeHandler,
    passwordChangeHandler,
    emailLoginHandler,
    error,
    setError,
    resetPassword,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const redirectURL = location.state?.from || "/";

  const googleHandler = () => {
    googleSignInHandler()
      .then((result) => navigate(redirectURL))
      .catch((error) => setError(error.message));
  };

  const emailSignInHandler = (event) => {
    event.preventDefault();

    emailLoginHandler()
      .then((result) => {
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
              <img className="login_box-img pt-3" src="/logo.png" alt="" />

              <div className="px-5 py-4">
                <form
                  className="login__form d-flex flex-column"
                  onSubmit={emailSignInHandler}
                >
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
                    Sign in
                  </button>
                </form>
                <br />
                <div className="text-start">
                  Forgot password?
                  <a className="text-link" href="#" onClick={resetPassword}>
                    Click here to reset password
                  </a>
                </div>
                <p className="text-start">
                  New to E-School?
                  <Link className="text-link" to="/register">
                    Create account?
                  </Link>
                </p>

                <hr />
                <div className="text-center">OR</div>
                <br />
                <div className="d-flex justify-content-center">
                  <button onClick={googleHandler} className="btn-google">
                    Sign In With Google
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
