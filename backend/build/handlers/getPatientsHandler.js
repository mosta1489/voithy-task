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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPatientHandler = exports.getAllPatientsHandler = void 0;
const database_1 = require("../database");
const getAllPatientsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const doctor_id = res.locals.id;
    let patients;
    yield database_1.DB.getAllPatient(doctor_id)
        .then((data) => {
        patients = data;
    })
        .catch((err) => {
        return res.status(500).send({ error: "Something Wrong" });
    });
    return res.status(200).send({ patients });
});
exports.getAllPatientsHandler = getAllPatientsHandler;
const getPatientHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const patient_id = req.params.id;
    let patient;
    yield database_1.DB.getPatientById(patient_id)
        .then((data) => {
        patient = data;
    })
        .catch((err) => {
        return res.status(500).send({ error: "Something Wrong" });
    });
    return res.status(200).send({ patient });
});
exports.getPatientHandler = getPatientHandler;
//# sourceMappingURL=getPatientsHandler.js.map