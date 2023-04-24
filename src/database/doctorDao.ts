import * as type from "../contracts/types";

export interface DoctorDao {
  insertDoctor(doctor: type.Doctor): Promise<void>;

  getDoctorById(id: string): Promise<type.Doctor | undefined>;

  getDoctorByEmail(email: string): Promise<type.Doctor | undefined>;

  updateDoctorVerification(id: string): Promise<void>;

  createPatient(patient: type.Patient): Promise<void>;

  getAllPatient(doctor_id: string): Promise<type.Patient[] | undefined>;

  getPatientById(id: string): Promise<type.Patient | undefined>;

  updatePatientPotion(id: string, potion: string): Promise<void>;

  deletePatient(id: string): Promise<void>;
}
