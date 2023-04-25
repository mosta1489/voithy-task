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
exports.isName = exports.isPassword = exports.isEmail = void 0;
const validator_1 = __importDefault(require("validator"));
const isEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const isEmail = yield validator_1.default.isEmail(email);
    return isEmail;
});
exports.isEmail = isEmail;
const isPassword = (password) => {
    return password.length >= 6;
};
exports.isPassword = isPassword;
const isName = (name) => {
    return name.length >= 5;
};
exports.isName = isName;
//# sourceMappingURL=validator.js.map