import { DB } from "../database";
import { myHandlerWithParam } from "../contracts/types";
import * as api from "../contracts/api";

export const deletePatientHandler: myHandlerWithParam<
  api.DeletePatientParam,
  api.DeletePatientReq,
  api.DeletePatientRes
> = async (req, res) => {
  const patient_id = req.params.id;

  await DB.deletePatient(patient_id)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status(500).json({ error: "Something went wrong" });
    });
};
