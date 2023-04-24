import { DB } from "../database";
import * as type from "../contracts/types";
import * as api from "../contracts/api";
import crypto from "crypto";

export const addNewPatientHandler: type.myHandler<
  api.AddNewPatientReq,
  api.AddNewPatientRes
> = async (req, res) => {
  const { name, age, gender, potion } = req.body;

  if (!name || !age || !gender || !potion) {
    return res
      .status(400)
      .send({ error: "All data about patient are required" });
  }

  const id = crypto.randomBytes(16).toString("hex");

  // ---------------- create new patient ----------------
  const patient: type.Patient = {
    id,
    name,
    age,
    gender,
    potion,
    doctor_id: res.locals.id,
  };

  await DB.createPatient(patient).catch((error) => {
    return res.status(500).send({ error: "Something went wrong" });
  });

  return res.sendStatus(200);
};
