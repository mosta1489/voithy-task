import axios from "axios";

export const signupService = (data) => {
  axios
    .post("http://172.190.14.21/api/v1/signup", data)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });
};
