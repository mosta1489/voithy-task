import React, { useState } from "react";
import { loginService } from "../services/loginService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = {
      email,
      password,
    };

    loginService(data);

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="form2Example1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="form2Example2" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
