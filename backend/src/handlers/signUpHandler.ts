import crypto from "crypto";
import { DB } from "../database";
import * as type from "../contracts/types";
import { SignUpReq, SignupRes } from "../contracts/api";
import * as help from "../helpers";

export const signUpHandler: type.myHandler<SignUpReq, SignupRes> = async (
  req,
  res
) => {
  const { name, email, password } = req.body;
  // ---------------- check if all field is existing ----------------
  if (!name || !email || !password) {
    return res
      .status(400)
      .send({ error: "Email, name, and password are required" });
  }

  // ---------------- check if all inputs is valid  ----------------
  const is_email = await help.isEmail(email);
  if (!is_email || !help.isPassword(password) || !help.isName(name)) {
    return res.status(400).send({ error: "Data is not valid" });
  }

  // ------------- check if Doctor is already exist or not ------------

  try {
    const doctor = await DB.getDoctorByEmail(email);
    if (doctor) {
      return res.status(400).send({ error: "Doctor already exist" });
    }
  } catch (error) {
    return res.status(500).send({ error: "Something went wrong" });
  }

  // ---------------- hash the new password to store it --------------
  const hashedPassword = await help.hashPassword(password);

  const id = crypto.randomBytes(16).toString("hex");

  // ---------------- create new doctor ----------------
  const newDoctor = {
    id,
    name,
    email,
    password: hashedPassword,
    verified: false,
  };

  // ---------------- insert new doctor to database ----------------
  await DB.insertDoctor(newDoctor).catch((error) => {
    return res.status(500).send({ error: "Something went wrong" });
  });

  // ---------------- create token to use it in verification ----------------
  const token = help.createToken({ id, verified: false }, "1d");

  // ---------------- send verification email to doctor ----------------
  help.sendEmail(email, token, name);

  // ---------------- send response to client ----------------
  return res.sendStatus(200);
};
