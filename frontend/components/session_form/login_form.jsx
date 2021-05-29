import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const LoginForm = ({ errors, login, clearErrors }) => {
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
      <div className="test-space">
        <img
          src="https://cdn.robinhood.com/assets/generated_assets/1e23d6b90f0d905b425ea289de345ab1.jpg"
          object-fit="cover"
        />
      </div>
      <div className="login-contain">
        <form className="login-form" onSubmit={handleSubmit}>
          <Link to="/">
            <h1 className="login-form-header">Welcome to Tulip Exchange</h1>
          </Link>
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
          <input
            type="button"
            value="Demo Login"
            onClick={() =>
              login({ email: "test@mail.com", password: "123456" })
            }
            className="login-input-button"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
