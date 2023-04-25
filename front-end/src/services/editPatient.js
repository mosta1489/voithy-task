import axios from "axios";

export const editPatientService = async (id, potion, token) => {
  let config = {
    method: "put",
    url: `http://172.190.14.21/api/v1/patient/${id}`,
    headers: {
      authorization: token,
    },
    data: { potion: potion },
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
