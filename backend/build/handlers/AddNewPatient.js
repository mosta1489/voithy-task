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
exports.addNewPatientHandler = void 0;
const database_1 = require("../database");
const crypto_1 = __importDefault(require("crypto"));
const addNewPatientHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age, gender, potion } = req.body;
    if (!name || !age || !gender || !potion) {
        return res
            .status(400)
            .send({ error: "All data about patient are required" });
    }
    const id = crypto_1.default.randomBytes(16).toString("hex");
    // ---------------- create new patient ----------------
    const patient = {
        id,
        name,
        age,
        gender,
        potion,
        doctor_id: res.locals.id,
    };
    yield database_1.DB.createPatient(patient).catch((error) => {
        return res.status(500).send({ error: "Something went wrong" });
    });
    return res.status(200).json({ patient });
});
exports.addNewPatientHandler = addNewPatientHandler;
//# sourceMappingURL=AddNewPatient.js.map