"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataInfo = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.dataInfo = {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/correction',
    PORT: process.env.PORT || 3000,
};
