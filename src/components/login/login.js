import React from "react";
import { Container } from "./login.styled";
import Button from "../button/button";
import {
  FaFacebookF,
  FaTwitter,
  FaGithubAlt,
  FaEnvelope,
} from "react-icons/fa";

function Login() {
  return (
    <Container>
      <div className="heading">
        <img className="heading-logo" src="images/logo.svg" alt="vuexy-logo" />
        <span className="heading-subtitle">Vuexy</span>
      </div>
      <h1 className="heading-title">Welcome to Vuexy! 👋</h1>
      <span className="heading-text">
        Please sign-in to your account and start the adventure
      </span>
      <div className="heading-modal">
        <span className="heading-modal-title">
          Admin: admin@demo.com | admin
        </span>
        <span className="heading-modal-title">
          Client: client@demo.com | client
        </span>
      </div>
      <div>
        <div className="heading-label-container">
          <label className="heading-label" for="email">
            Email
            <input
              className="heading-input"
              name="email"
              placeholder="admin@demo.com"
            ></input>
          </label>
        </div>
        <div className="heading-label-container">
          <label className="heading-label" for="password">
            Password
            <input
              className="heading-input"
              type="password"
              name="password"
              value="admin"
            ></input>
          </label>
        </div>
        <div className="heading-remember">
          <label className="heading-remember" for="remeber me">
            Remember Me
            <input
              className="heading-remember-checkbox"
              type="checkbox"
              name="remember me"
            ></input>
          </label>
        </div>
        <Button className="heading-button">Sign In</Button>
        <div class="heading-socials">
          <span className="heading-socials-title">
            New on our platform?{" "}
            <a className="heading-socials-link" href="/">
              Create an account
            </a>
          </span>
          <div className="heading-socials-divider">
            <div className="heading-socials-divider-element"></div>
            <div className="heading-socials-divider-text">or</div>
            <div className="heading-socials-divider-element"></div>
          </div>
        </div>
        <div className="heading-socials-container">
          <FaFacebookF className="heading-socials-icon" />
          <FaTwitter className="heading-socials-icon" />
          <FaEnvelope className="heading-socials-icon" />
          <FaGithubAlt className="heading-socials-icon" />
        </div>
      </div>
    </Container>
  );
}

export default Login;