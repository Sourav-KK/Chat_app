"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DummyData_1 = __importDefault(require("../../../Utilities/DummyData"));
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
    router.get("/api/chats", (_req, res) => {
        res.send(DummyData_1.default);
    });
    router.get("/direct", (_req, res) => {
        res.send("in signup");
    });
    return router;
};
exports.default = userRoute;
