import React, { useState } from "react";

const SessionForm = ({ errors, formType, signUp }) => {
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
    })
  };

  console.log(errors);
  console.log(formType);
  console.log(signUp);
  console.log(user);
  return (
    <div className="signup-form-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Make Your Money Move</h1>
        <p>
          Tulip Exchange lets you invest in companies you love, commission-free.
        </p>
        <br />
        <p>
          <strong>
            Please enter your full legal name. Your legal name should match any
            form of government ID.
          </strong>
        </p>
        <input
          type="text"
          placeholder="First name"
          className="signup-input"
          value={user.firstName}
          onChange={handleChange}
          name="firstName"
        />
        <input
          type="text"
          placeholder="Last name"
          className="signup-input"
          value={user.lastName}
          onChange={handleChange}
          name="lastName"
        />
        <input
          type="text"
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
        <input type="submit" value="Sign Up" className="signup-input" />
      </form>
    </div>
  );
};

export default SessionForm;
