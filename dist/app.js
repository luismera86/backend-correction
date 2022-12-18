"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_config_1 = require("./config/data.config");
const express_1 = __importDefault(require("express"));
const dbMongo_config_1 = require("./config/dbMongo.config");
const routes_1 = __importDefault(require("./routes"));
const { PORT } = data_config_1.dataInfo;
const app = (0, express_1.default)();
(0, dbMongo_config_1.main)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', routes_1.default);
app.listen(PORT, () => {
    console.log(`Conectado al servidor en el puerto ${PORT}`);
});
