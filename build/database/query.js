"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyQuery {
    constructor() {
        this.insertDoctor = `INSERT INTO doctor (id, name, email, password) VALUES ($1, $2, $3, $4);`;
        this.getDoctorById = `SELECT * FROM doctor WHERE id = $1;`;
        this.getDoctorByEmail = `SELECT * FROM doctor WHERE email = $1;`;
        this.updateDoctorVerification = `UPDATE doctor SET verified = true WHERE id = $1;`;
        this.createPatient = `INSERT INTO patient (id, name, age, gender, potion, doctor_id)
          VALUES ($1, $2, $3, $4, $5, $6);`;
        this.getAllPatient = `SELECT * FROM patient WHERE doctor_id = $1;`;
        this.getPatientById = `SELECT * FROM patient WHERE id = $1;`;
        this.updatePatientPotion = `UPDATE patient SET potion = $1 WHERE id = $2;`;
        this.deletePatient = `DELETE FROM patient WHERE id = $1;`;
    }
    static get Instance() {
        return this._instance || (this._instance = new this());
    }
}
const myQuery = MyQuery.Instance;
exports.default = myQuery;
//# sourceMappingURL=query.js.map