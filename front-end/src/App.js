import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/home";

const App = () => {
  const jwt = localStorage.getItem("jwt");

  return (
    <div>
      {jwt ? (
        <Home />
      ) : (
        <>
          <Signup />
          <hr />
          <Login />
        </>
      )}
    </div>
  );
};

export default App;
