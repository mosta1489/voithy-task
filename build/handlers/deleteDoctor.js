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
exports.deleteDoctorHandler = void 0;
const database_1 = require("../database");
const deleteDoctorHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const doctor_id = req.params.id;
    yield database_1.DB.deleteDoctor(doctor_id)
        .then((result) => {
        res.sendStatus(200);
    })
        .catch((err) => {
        res.status(500).json({ error: "Something went wrong" });
    });
});
exports.deleteDoctorHandler = deleteDoctorHandler;
//# sourceMappingURL=deleteDoctor.js.map