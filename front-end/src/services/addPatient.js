import axios from "axios";

export const addPatientService = async (data, token) => {
  let config = {
    method: "post",
    url: "http://172.190.14.21/api/v1/patient",
    headers: {
      authorization: token,
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
