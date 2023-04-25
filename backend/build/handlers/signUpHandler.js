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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpHandler = void 0;
const crypto_1 = __importDefault(require("crypto"));
const database_1 = require("../database");
const help = __importStar(require("../helpers"));
const signUpHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    // ---------------- check if all field is existing ----------------
    if (!name || !email || !password) {
        return res
            .status(400)
            .send({ error: "Email, name, and password are required" });
    }
    // ---------------- check if all inputs is valid  ----------------
    const is_email = yield help.isEmail(email);
    if (!is_email || !help.isPassword(password) || !help.isName(name)) {
        return res.status(400).send({ error: "Data is not valid" });
    }
    // ------------- check if Doctor is already exist or not ------------
    try {
        const doctor = yield database_1.DB.getDoctorByEmail(email);
        if (doctor) {
            return res.status(400).send({ error: "Doctor already exist" });
        }
    }
    catch (error) {
        return res.status(500).send({ error: "Something went wrong" });
    }
    // ---------------- hash the new password to store it --------------
    const hashedPassword = yield help.hashPassword(password);
    const id = crypto_1.default.randomBytes(16).toString("hex");
    // ---------------- create new doctor ----------------
    const newDoctor = {
        id,
        name,
        email,
        password: hashedPassword,
        verified: false,
    };
    // ---------------- insert new doctor to database ----------------
    yield database_1.DB.insertDoctor(newDoctor).catch((error) => {
        return res.status(500).send({ error: "Something went wrong" });
    });
    // ---------------- create token to use it in verification ----------------
    const token = help.createToken({ id, verified: false }, "1d");
    // ---------------- send verification email to doctor ----------------
    help.sendEmail(email, token, name);
    // ---------------- send response to client ----------------
    return res.sendStatus(200);
});
exports.signUpHandler = signUpHandler;
//# sourceMappingURL=signUpHandler.js.map