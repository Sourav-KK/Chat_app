"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoute = () => {
    const router = express_1.default.Router();
    router.get("/", (_req, res) => {
        res.send("in login/home page ");
    });
    router.get("/signup", (_req, res) => {
        res.send("in signup");
    });
    router.get("/profile", (_req, res) => {
        res.send("in signup");
    });
    router.get("/direct", (_req, res) => {
        res.send("in signup");
    });
    router.get("/direct", (_req, res) => {
        res.send("in signup");
    });
    return router;
};
exports.default = userRoute;
