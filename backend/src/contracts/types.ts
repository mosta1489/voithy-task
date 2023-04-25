import { RequestHandler } from "express";

export interface Doctor {
  id: string;
  name: string;
  email: string;
  password: string;
  verified: boolean;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  potion: string;
  doctor_id: string;
}

export interface JwtPayload {
  id: string;
  verified: boolean;
}

export type DoctorRegisterReq = Pick<Doctor, "name" | "email" | "password">;
export type DoctorLoginReq = Pick<Doctor, "email" | "password">;

export type DoctorRes = Omit<Doctor, "password"> & {
  jwt: string;
};

type withError<T> = T & { error: string };
export type myHandler<ReqBody, ResBody> = RequestHandler<
  string,
  Partial<withError<ResBody>>,
  Partial<ReqBody>
>;

export type myHandlerWithParam<Param, ReqBody, ResBody> = RequestHandler<
  Partial<Param>,
  Partial<withError<ResBody>>,
  Partial<ReqBody>
>;

export type myHandlerWithQuery<Query, ReqBody, ResBody> = RequestHandler<
  string,
  Partial<withError<ResBody>>,
  Partial<ReqBody>,
  Partial<Query>
>;
