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
exports.updatePatientPotionHandler = void 0;
const database_1 = require("../database");
const updatePatientPotionHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const patient_id = req.params.id;
    const { potion } = req.body;
    yield database_1.DB.updatePatientPotion(patient_id, potion)
        .then((result) => {
        res.sendStatus(200);
    })
        .catch((err) => {
        res.status(500).json({ error: "Something went wrong" });
    });
});
exports.updatePatientPotionHandler = updatePatientPotionHandler;
//# sourceMappingURL=updatePatient.js.map