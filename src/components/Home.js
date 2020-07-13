import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => (
  <Fragment>
    <Helmet>
      <title>දැනුම මිණුම - Home</title>
    </Helmet>
    <div id="home">
      <section>
        <div style={{ textAlign: "center" }}>
          <span className="mdi mdi-nix mdi-spin mdi-96px cube">
            {/* <img src={logo} alt="logo" /> */}
          </span>
        </div>
        <h1>දැනුම මිණුම</h1>
        <div className="play-button-container">
          <ul>
            <li>
              <Link className="play-button" to="/play/instructions">
                Play
              </Link>
            </li>
          </ul>
        </div>
        <div className="auth-container">
          <Link className="auth-buttons" id="login-button" to="/login">
            Login
          </Link>
          <Link className="auth-buttons" id="signup-button" to="/register">
            Register
          </Link>
        </div>
      </section>
    </div>
  </Fragment>
);

export default Home;
