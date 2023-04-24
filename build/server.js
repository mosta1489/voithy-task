"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const middleware_1 = require("./middleware");
const doctorRouter_1 = require("./routes/doctorRouter");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/test", (_, res) => {
    res.status(200).send({ status: "✌️" });
});
app.use(middleware_1.loggerMiddleware);
app.use("/test", (_, res) => {
    res.status(404).send({ status: "🤷‍♂️" });
});
app.use("/api/v1", doctorRouter_1.doctorRouter);
app.use(middleware_1.notFound);
app.listen(3000, () => {
    console.log(`\n\t ✌️ \n\n server listening on port ${3000} ...`);
});
exports.default = app;
//# sourceMappingURL=server.js.map