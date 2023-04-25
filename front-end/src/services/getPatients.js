import axios from "axios";

export const getPatients = async (token) => {
  let config = {
    method: "get",
    url: "http://172.190.14.21/api/v1/patient",
    headers: {
      authorization: token,
    },
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
