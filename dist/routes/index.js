"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const delivery_routes_1 = __importDefault(require("./delivery.routes"));
const router = (0, express_1.Router)();
router.use('/delivery', delivery_routes_1.default);
exports.default = router;
