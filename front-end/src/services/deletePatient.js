import axios from "axios";

export const deletePatientService = async (id, token) => {
  let config = {
    method: "delete",
    url: `http://172.190.14.21/api/v1/patient/${id}`,
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
