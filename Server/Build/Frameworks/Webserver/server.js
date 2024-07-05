"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../Configurations/config");
const express_1 = require("./express");
const serverStaer = () => {
    express_1.app.listen(config_1.PORTNO, () => {
        console.log(`Server listening at port: ${config_1.PORTNO}`);
    });
};
exports.default = serverStaer;
