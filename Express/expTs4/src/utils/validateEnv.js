"use strict";
exports.__esModule = true;
var envalid_1 = require("envalid");
function validateEnv() {
    (0, envalid_1.cleanEnv)(process.env, {
        PORT: (0, envalid_1.port)(),
        NODE_ENV: (0, envalid_1.str)()
    });
}
exports["default"] = validateEnv;
