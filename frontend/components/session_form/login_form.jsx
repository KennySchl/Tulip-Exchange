import React, { useState } from "react";

const LoginForm = ({ errors, login }) => {
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

  const renderErrors = () => {
    return (
      <ul className="sign-up-errors">
        {errors.map((error, idx) => (
          <li key={idx} className="sign-up-error">
            {error}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Welcome to Robinhood</h1>
        <label htmlFor="login-email">
          Email
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
          Password
          <input
            type="password"
            className="login-input"
            value={user.password}
            onChange={handleChange}
            name="password"
            id="login-password"
          />
        </label>
        <input type="submit" value="Sign In" className="login-input-button" />
        {renderErrors()}
      </form>
    </div>
  );
};

export default LoginForm;
