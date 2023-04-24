import { DB } from "../database";
import { myHandlerWithParam } from "../contracts/types";
import * as api from "../contracts/api";

export const updatePatientPotionHandler: myHandlerWithParam<
  api.UpdatePotionParam,
  api.UpdatePotionReq,
  api.UpdatePotionRes
> = async (req, res) => {
  const patient_id = req.params.id;
  const { potion } = req.body;

  await DB.updatePatientPotion(patient_id, potion)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status(500).json({ error: "Something went wrong" });
    });
};
