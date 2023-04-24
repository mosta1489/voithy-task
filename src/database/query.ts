class MyQuery {
  private static _instance: MyQuery;
  private constructor() {}
  static get Instance() {
    return this._instance || (this._instance = new this());
  }

  insertDoctor = `INSERT INTO doctor (id, name, email, password) VALUES ($1, $2, $3, $4);`;

  getDoctorById = `SELECT * FROM doctor WHERE id = $1;`;

  getDoctorByEmail = `SELECT * FROM doctor WHERE email = $1;`;

  updateDoctorVerification = `UPDATE doctor SET verified = true WHERE id = $1;`;

  createPatient = `INSERT INTO patient (id, name, age, gender, potion, doctor_id)
          VALUES ($1, $2, $3, $4, $5, $6);`;

  getAllPatient = `SELECT * FROM patient WHERE doctor_id = $1;`;

  getPatientById = `SELECT * FROM patient WHERE id = $1;`;

  updatePatientPotion = `UPDATE patient SET potion = $1 WHERE id = $2;`;

  deletePatient = `DELETE FROM patient WHERE id = $1;`;
}

const myQuery = MyQuery.Instance;

export default myQuery;
