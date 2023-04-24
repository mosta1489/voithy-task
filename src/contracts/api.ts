import * as type from "./types";

// ----------- Sign up api ------------------------
export type SignUpReq = type.DoctorRegisterReq;
export type SignupRes = {};

// ------------------ Sign In  -----------------------------

export type SignInReq = type.DoctorLoginReq;
export type SignInRes = type.DoctorRes;

// ----------------- Verify -------------------------------

export interface VerifyQuery {
  key: string;
}
export interface VerifyReq {}
export interface VerifyRes {
  jwt: string;
}

// ------------------ Send Verification Email ---------------------

export interface resendVerificationParam {
  id: string;
}
export interface resendVerificationReq {}
export interface resendVerificationRes {}

// ----------------- Delete Doctor ------------------------------

export interface DeleteDoctorParam {
  id: string;
}
export interface DeleteDoctorReq {}
export interface DeleteDoctorRes {}

// ------------------ Add New Patient ------------------------------
export interface AddNewPatientReq {
  name: string;
  age: number;
  gender: string;
  potion: string;
}
export interface AddNewPatientRes {}

//  ------------------ Get All Patient Data ------------------------------
export interface GetAllPatientDataParam {}
export interface GetPatientDataReq {}
export interface GetAllPatientDataRes {
  patients: type.Patient[];
}

//  ------------------ Get One Patient Data ------------------------------
export interface GetPatientDataParam {
  id: string;
}
export interface GetPatientDataReq {}
export interface GetPatientDataRes {
  patient: type.Patient;
}

// ------------------ Update Patient potion --------------------------

export interface UpdatePotionParam {
  id: string;
}
export interface UpdatePotionReq {
  potion: string;
}
export interface UpdatePotionRes {}

// ----------------- Delete Patient ------------------------------

export interface DeletePatientParam {
  id: string;
}
export interface DeletePatientReq {}
export interface DeletePatientRes {}
