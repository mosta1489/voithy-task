"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const connection_1 = __importDefault(require("../connection"));
const query_1 = __importDefault(require("./query"));
class DoctorDaoImpl {
    constructor() { }
    static get Instance() {
        return this._instance || (this._instance = new this());
    }
    insertDoctor(doctor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.query(query_1.default.insertDoctor, [
                    doctor.id,
                    doctor.name,
                    doctor.email,
                    doctor.password,
                ]);
                return Promise.resolve();
            }
            catch (error) {
                console.log(error);
                return Promise.reject(error);
            }
        });
    }
    getDoctorById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield connection_1.default.query(query_1.default.getDoctorById, [id]);
                return Promise.resolve(result.rows[0]);
            }
            catch (error) {
                console.log(error);
                return Promise.reject(error);
            }
        });
    }
    getDoctorByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield connection_1.default.query(query_1.default.getDoctorByEmail, [email]);
                return Promise.resolve(result.rows[0]);
            }
            catch (error) {
                console.log(error);
                return Promise.reject(error);
            }
        });
    }
    updateDoctorVerification(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.query(query_1.default.updateDoctorVerification, [id]);
                return Promise.resolve();
            }
            catch (error) {
                console.log(error);
                return Promise.reject(error);
            }
        });
    }
    deleteDoctor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.query(query_1.default.deleteDoctor, [id]);
                return Promise.resolve();
            }
            catch (error) {
                console.log(error);
                return Promise.reject(error);
            }
        });
    }
    createPatient(patient) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.query(query_1.default.createPatient, [
                    patient.id,
                    patient.name,
                    patient.age,
                    patient.gender,
                    patient.potion,
                    patient.doctor_id,
                ]);
                return Promise.resolve();
            }
            catch (error) {
                console.log(error);
                return Promise.reject(error);
            }
        });
    }
    getAllPatient(doctor_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield connection_1.default.query(query_1.default.getAllPatient, [doctor_id]);
                return Promise.resolve(result.rows);
            }
            catch (error) {
                console.log(error);
                return Promise.reject(error);
            }
        });
    }
    getPatientById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield connection_1.default.query(query_1.default.getPatientById, [id]);
                return Promise.resolve(result.rows[0]);
            }
            catch (error) {
                console.log(error);
                return Promise.reject(error);
            }
        });
    }
    updatePatientPotion(id, potion) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.query(query_1.default.updatePatientPotion, [potion, id]);
                return Promise.resolve();
            }
            catch (error) {
                console.log(error);
                return Promise.reject(error);
            }
        });
    }
    deletePatient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.query(query_1.default.deletePatient, [id]);
                return Promise.resolve();
            }
            catch (error) {
                console.log(error);
                return Promise.reject(error);
            }
        });
    }
}
exports.DB = DoctorDaoImpl.Instance;
//# sourceMappingURL=index.js.map