const axios = require("axios");
let data = JSON.stringify({
  email: "mosta148999@gmail.com",
  password: "12345678",
});

let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "http://172.190.14.21/api/v1/login",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

axios
  .request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
