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
exports.checkVerification = exports.jwtParseMiddleware = void 0;
const helpers_1 = require("../helpers");
const database_1 = require("../database");
const jwtParseMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send({ error: "Bad Token" });
    }
    let payload;
    try {
        payload = (0, helpers_1.verifyToken)(token);
    }
    catch (error) {
        return res.status(401).send({ error: "Bad Token" });
    }
    const user = yield database_1.DB.getDoctorById(payload.id);
    if (!user) {
        return res.status(401).send({ error: "User not found" });
    }
    res.locals.id = user.id;
    res.locals.verified = user.verified;
    return next();
});
exports.jwtParseMiddleware = jwtParseMiddleware;
const checkVerification = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!res.locals.verified) {
        return res.status(401).send({ error: "Not Verified" });
    }
    return next();
});
exports.checkVerification = checkVerification;
//# sourceMappingURL=authMiddleware.js.map