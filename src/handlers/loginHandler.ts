import { DB } from "../database";
import * as type from "../contracts/types";
import * as api from "../contracts/api";
import * as help from "../helpers";

export const loginHandler: type.myHandler<
  api.SignInReq,
  api.SignInRes
> = async (req, res, next) => {
  const { email, password } = req.body;
  // ---------------- check if all field is existing ----------------
  if (!email || !password) {
    return res.status(400).send({ error: "Invalid Data" });
  }

  // ---------------- check if all inputs is valid  ----------------
  const is_email = await help.isEmail(email);
  if (!is_email || !help.isPassword(password)) {
    return res.status(400).send({ error: "Data is not valid" });
  }

  // -------------- get user from db -------------------------
  let existing: type.Doctor;
  try {
    existing = await DB.getDoctorByEmail(email);
  } catch (error) {
    return next(error);
  }

  if (!existing) {
    return res.status(403).send({ error: "Email Or Password Is Wrong" });
  }

  // ---------- check if password is correct or not ------------
  const isMatch = await help.comparePassword(password, existing.password);
  if (!existing || !isMatch) {
    return res.status(403).send({ error: "Email Or Password Is Wrong" });
  }

  // create token without expire date
  const jwt = help.createToken({
    id: existing.id,
    verified: existing.verified,
  });

  // send response to client
  const response: api.SignInRes = {
    id: existing.id,
    name: existing.name,
    email: existing.email,
    verified: existing.verified,
    jwt,
  };
  return res.status(200).send(response);
};
