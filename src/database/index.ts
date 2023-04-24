import conn from "../connection";
import { DoctorDao } from "./doctorDao";
import * as type from "../contracts/types";
import myQuery from "./query";

class DoctorDaoImpl implements DoctorDao {
  private static _instance: DoctorDaoImpl;
  private constructor() {}
  static get Instance() {
    return this._instance || (this._instance = new this());
  }

  async insertDoctor(doctor: type.Doctor): Promise<void> {
    try {
      await conn.query(myQuery.insertDoctor, [
        doctor.id,
        doctor.name,
        doctor.email,
        doctor.password,
      ]);
      return Promise.resolve();
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }

  async getDoctorById(id: string): Promise<type.Doctor | undefined> {
    try {
      const result = await conn.query(myQuery.getDoctorById, [id]);
      return Promise.resolve(result.rows[0]);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }

  async getDoctorByEmail(email: string): Promise<type.Doctor | undefined> {
    try {
      const result = await conn.query(myQuery.getDoctorByEmail, [email]);
      return Promise.resolve(result.rows[0]);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }

  async updateDoctorVerification(id: string): Promise<void> {
    try {
      await conn.query(myQuery.updateDoctorVerification, [id]);
      return Promise.resolve();
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }

  async createPatient(patient: type.Patient): Promise<void> {
    try {
      await conn.query(myQuery.createPatient, [
        patient.id,
        patient.name,
        patient.age,
        patient.gender,
        patient.potion,
        patient.doctor_id,
      ]);
      return Promise.resolve();
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }

  async getAllPatient(doctor_id: string): Promise<type.Patient[] | undefined> {
    try {
      const result = await conn.query(myQuery.getAllPatient, [doctor_id]);
      return Promise.resolve(result.rows);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }

  async getPatientById(id: string): Promise<type.Patient | undefined> {
    try {
      const result = await conn.query(myQuery.getPatientById, [id]);
      return Promise.resolve(result.rows[0]);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }

  async updatePatientPotion(id: string, potion: string): Promise<void> {
    try {
      await conn.query(myQuery.updatePatientPotion, [potion, id]);
      return Promise.resolve();
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }

  async deletePatient(id: string): Promise<void> {
    try {
      await conn.query(myQuery.deletePatient, [id]);
      return Promise.resolve();
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
}

export const DB = DoctorDaoImpl.Instance;
