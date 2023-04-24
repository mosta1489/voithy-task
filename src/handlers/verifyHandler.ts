import { DB } from "../database";
import { myHandlerWithQuery } from "../contracts/types";
import * as api from "../contracts/api";
import * as help from "../helpers";
import * as type from "../contracts/types";

export const verifyHandler: myHandlerWithQuery<
  api.VerifyQuery,
  api.VerifyReq,
  api.VerifyRes
> = async (req, res) => {
  const jwt = req.query.key;
  if (!jwt) {
    return res.status(400).send({ error: "Bad Request" });
  }
  let payload: type.JwtPayload;
  try {
    payload = help.verifyToken(jwt);
  } catch (e) {
    return res.status(401).send({ error: "Unauthorized" });
  }
  const { id } = payload;

  const user = await DB.getDoctorById(id);
  if (!user) {
    return res.status(401).send({ error: "User not found" });
  }

  if (user.verified) {
    return res.status(400).send({ error: "Bad Request" });
  }
  await DB.updateDoctorVerification(id);
  return res.sendStatus(200);
};
