"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.loginHandler = void 0;
const database_1 = require("../database");
const help = __importStar(require("../helpers"));
const loginHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    // ---------------- check if all field is existing ----------------
    if (!email || !password) {
        return res.status(400).send({ error: "Invalid Data" });
    }
    // ---------------- check if all inputs is valid  ----------------
    const is_email = yield help.isEmail(email);
    if (!is_email || !help.isPassword(password)) {
        return res.status(400).send({ error: "Data is not valid" });
    }
    // -------------- get user from db -------------------------
    let existing;
    try {
        existing = yield database_1.DB.getDoctorByEmail(email);
    }
    catch (error) {
        return next(error);
    }
    if (!existing) {
        return res.status(403).send({ error: "Email Or Password Is Wrong" });
    }
    // ---------- check if password is correct or not ------------
    const isMatch = yield help.comparePassword(password, existing.password);
    if (!existing || !isMatch) {
        return res.status(403).send({ error: "Email Or Password Is Wrong" });
    }
    // create token without expire date
    const jwt = help.createToken({
        id: existing.id,
        verified: existing.verified,
    });
    // send response to client
    const response = {
        id: existing.id,
        name: existing.name,
        email: existing.email,
        verified: existing.verified,
        jwt,
    };
    return res.status(200).send(response);
});
exports.loginHandler = loginHandler;
//# sourceMappingURL=loginHandler.js.map