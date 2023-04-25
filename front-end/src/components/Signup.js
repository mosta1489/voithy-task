import React, { useState } from "react";
import { signupService } from "../services/signupService";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let data = {
      name,
      email,
      password,
    };

    console.log(data);

    signupService(data);

    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  return (
    <div className="container">
      <h1 className="mb-4">Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="form2Example1"
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-4">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
