import { verifyToken } from "../helpers";
import { DB } from "../database";
import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "../contracts/types";

export const jwtParseMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({ error: "Bad Token" });
  }

  let payload: JwtPayload;

  try {
    payload = verifyToken(token);
  } catch (error) {
    return res.status(401).send({ error: "Bad Token" });
  }

  const user = await DB.getDoctorById(payload.id);
  if (!user) {
    return res.status(401).send({ error: "User not found" });
  }

  res.locals.id = user.id;
  res.locals.verified = user.verified;
  return next();
};

export const checkVerification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!res.locals.verified) {
    return res.status(401).send({ error: "Not Verified" });
  }

  return next();
};
