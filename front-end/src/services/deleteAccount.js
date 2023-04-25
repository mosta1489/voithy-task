import axios from "axios";

export const deleteAccountService = async (token) => {
  let config = {
    method: "delete",
    url: `http://172.190.14.21/api/v1/doctor/`,
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
