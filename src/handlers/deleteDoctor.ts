import { DB } from "../database";
import { myHandlerWithParam } from "../contracts/types";
import * as api from "../contracts/api";

export const deleteDoctorHandler: myHandlerWithParam<
  api.DeleteDoctorParam,
  api.DeleteDoctorReq,
  api.DeleteDoctorRes
> = async (req, res) => {
  const doctor_id = req.params.id;

  await DB.deleteDoctor(doctor_id)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status(500).json({ error: "Something went wrong" });
    });
};
