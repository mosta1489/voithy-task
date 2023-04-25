import axios from "axios";

export const loginService = (data) => {
  axios
    .post("http://172.190.14.21/api/v1/login", data)
    .then((response) => {
      const jwt = response.data.jwt;
      localStorage.setItem("jwt", jwt);
    })
    .catch((error) => {
      console.log(error);
    });
};
