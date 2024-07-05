"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("../express");
const userRoute_1 = __importDefault(require("./userRoute"));
const index = () => {
    express_1.app.use("/", (0, userRoute_1.default)());
};
exports.default = index;
