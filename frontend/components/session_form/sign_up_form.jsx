import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SignUpForm = ({ errors, signUp, clearErrors }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(user);
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    return () => {
      clearErrors();
    };
  }, []);

  const renderErrors = () => {
    return (
      <ul className="sign-up-errors-list">
        {errors.map((error, idx) => (
          <li key={idx} className="sign-up-error">
            {error}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="signup-form-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <Link to="/">
          <h1 className="website-name">
            Tulip Exchange <FontAwesomeIcon icon={faLeaf} />
          </h1>
        </Link>
        <div className="signup-form-headers">
          <h1 className="sign-up-header">Make Your Money Move</h1>
          <p className="sign-up-text">
            Tulip Exchange lets you invest in companies you love,
            commission-free.
          </p>
          <br />
          <p className="sign-up-text-2">
            <strong>
              Please enter your full legal name. Your legal name should match
              any form of government ID.
            </strong>
          </p>
        </div>
        <div className="signup-inputs">
          <input
            type="text"
            placeholder="First name"
            className="signup-input signup-fname"
            value={user.firstName}
            onChange={handleChange}
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last name"
            className="signup-input signup-lname"
            value={user.lastName}
            onChange={handleChange}
            name="lastName"
          />
          <input
            type="email"
            placeholder="Email"
            className="signup-input"
            value={user.email}
            onChange={handleChange}
            name="email"
          />
          <input
            type="password"
            placeholder="Password (min. 6 character)"
            className="signup-input"
            value={user.password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <input type="submit" value="Sign Up" className="signup-input-button" />
        <div className="sign-up-errors">{renderErrors()}</div>
      </form>
      <div className="test-space-signup"></div>
    </div>
  );
};

export default SignUpForm;
