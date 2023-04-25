"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const helpers_1 = require("../helpers");
let connectionString = (0, helpers_1.accessEnv)("DATABASE_URI_LOCAL");
let conn;
conn = new pg_1.Pool({ connectionString });
conn
    .connect()
    .then(() => {
    console.log("Database connected successfully ✅ ✅ ✅ ");
})
    .catch((error) => {
    console.log("Error connecting to Data Base  ❌ ❌ ❌ ❌ ❌ ❌ ❌", error.message);
});
exports.default = conn;
//# sourceMappingURL=index.js.map