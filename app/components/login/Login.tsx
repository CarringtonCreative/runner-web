import React from "react";
import "./Login.css";

import GitHubIcon from "../../../public/github.png";
import LinkedinIcon from "../../../public/linkedin.png";
import Image from "next/image";

export interface LoginProps {}

const Login = (props: LoginProps) => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Welcome Back</h2>
        <h3>Login</h3>
      </div>
      <div className="login-content">
        <div className="login-socials">
          <Image src={GitHubIcon} alt="GitHub" />
          <Image src={LinkedinIcon} alt="LinkedinIcon" />
        </div>
        <div className="login-inputs">
          <input className="login-input" type="email" placeholder="Email" />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
          />
          <button className="login-button">Sign In</button>
        </div>
      </div>
      <div className="login-footer">
        <p className="login-text">
          Don&lsquo;t have an account? Create one{" "}
          <span className="login-link">here.</span>
        </p>
        <p className="login-copyright-text">Welcome Back</p>
      </div>
    </div>
  );
};

export default Login;
