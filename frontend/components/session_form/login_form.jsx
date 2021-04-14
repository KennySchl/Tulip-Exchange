import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const LoginForm = ({ errors, login, clearErrors, fetchStocks }) => {
  const [user, setUser] = useState({
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
    fetchStocks()
    login(user);
    setUser({
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
      <ul className="login-errors-list">
        {errors.map((error, idx) => (
          <li key={idx} className="login-error">
            <FontAwesomeIcon icon={faExclamationCircle} /> {error}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="login-form-container">
      <div className="test-space"></div>
      <div className="login-contain">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="login-form-header">Welcome to Tulip Exchange</h1>
          <div className="login-inputs">
            <label htmlFor="login-email">
              <div className="login-label-bar">
                <span className="login-input-label">Email</span>
              </div>
              <input
                type="text"
                className="login-input"
                value={user.email}
                onChange={handleChange}
                name="email"
                id="login-email"
              />
            </label>
            <label htmlFor="login-password">
              <div className="login-label-bar">
                <span className="login-input-label">Password</span>
              </div>
              <input
                type="password"
                className="login-input"
                value={user.password}
                onChange={handleChange}
                name="password"
                id="login-password"
              />
            </label>
            <div className="login-errors">{renderErrors()}</div>
          </div>
          <input type="submit" value="Sign In" className="login-input-button" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
