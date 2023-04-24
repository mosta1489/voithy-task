import { DB } from "../database";
import * as type from "../contracts/types";
import * as api from "../contracts/api";
import * as help from "../helpers";

export const getAllPatientsHandler: type.myHandlerWithParam<
  api.GetAllPatientDataParam,
  api.GetPatientDataReq,
  api.GetAllPatientDataRes
> = async (req, res) => {
  const doctor_id = res.locals.id;
  let patients: type.Patient[];

  await DB.getAllPatient(doctor_id)
    .then((data) => {
      patients = data;
    })
    .catch((err) => {
      return res.status(500).send({ error: "Something Wrong" });
    });

  return res.status(200).send({ patients });
};

export const getPatientHandler: type.myHandlerWithParam<
  api.GetPatientDataParam,
  api.GetPatientDataReq,
  api.GetPatientDataRes
> = async (req, res) => {
  const patient_id = req.params.id;
  let patient: type.Patient;

  await DB.getPatientById(patient_id)
    .then((data) => {
      patient = data;
    })
    .catch((err) => {
      return res.status(500).send({ error: "Something Wrong" });
    });

  return res.status(200).send({ patient });
};
