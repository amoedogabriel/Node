"use strict";
exports.__esModule = true;
var express_1 = require("express");
var logger_1 = require("./middlewares/logger");
var router_1 = require("./router/router");
var PORT = process.env.PORT || 3333;
var app = (0, express_1["default"])();
app.use((0, logger_1["default"])("completo"));
app.use(router_1["default"]);
app.get("/", function (req, res) {
    res.end("Welcome to Web Academy!");
});
app.listen(PORT, function () {
    console.log("Servidor escutando na porta ".concat(PORT));
});
