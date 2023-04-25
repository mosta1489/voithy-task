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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctorRouter = void 0;
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const handler = __importStar(require("../handlers"));
const middleware = __importStar(require("../middleware"));
exports.doctorRouter = (0, express_1.Router)();
exports.doctorRouter.post("/signup", (0, express_async_handler_1.default)(handler.signUpHandler));
exports.doctorRouter.get("/verify", (0, express_async_handler_1.default)(handler.verifyHandler));
exports.doctorRouter.post("/login", (0, express_async_handler_1.default)(handler.loginHandler));
exports.doctorRouter.delete("/doctor", middleware.jwtParseMiddleware, (0, express_async_handler_1.default)(handler.deleteDoctorHandler));
exports.doctorRouter.use("/patient", middleware.jwtParseMiddleware, middleware.checkVerification);
exports.doctorRouter.post("/patient", (0, express_async_handler_1.default)(handler.addNewPatientHandler));
exports.doctorRouter.get("/patient", (0, express_async_handler_1.default)(handler.getAllPatientsHandler));
exports.doctorRouter.get("/patient/:id", (0, express_async_handler_1.default)(handler.getPatientHandler));
exports.doctorRouter.put("/patient/:id", (0, express_async_handler_1.default)(handler.updatePatientPotionHandler));
exports.doctorRouter.delete("/patient/:id", (0, express_async_handler_1.default)(handler.deletePatientHandler));
//# sourceMappingURL=doctorRouter.js.map