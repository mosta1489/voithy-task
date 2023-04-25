import validator from "validator";

export const isEmail = async (email: string) => {
  const isEmail = await validator.isEmail(email);
  return isEmail;
};

export const isPassword = (password: string) => {
  return password.length >= 6;
};

export const isName = (name: string) => {
  return name.length >= 5;
};
