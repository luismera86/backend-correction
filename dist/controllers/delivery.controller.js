"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postDeliveryById = exports.getDeliveryById = void 0;
const models_1 = require("../models");
const getDeliveryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const delivery = yield models_1.Delivery.findById(id);
        res.status(200).json({ delivery });
    }
    catch (error) {
        res.json({
            msg: error,
        });
        console.log(error);
    }
});
exports.getDeliveryById = getDeliveryById;
const postDeliveryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const delivery = new models_1.Delivery(req.body);
        yield delivery.save();
        res.status(200).json({ delivery });
    }
    catch (error) {
        res.json({
            msg: error,
        });
        console.log(error);
    }
});
exports.postDeliveryById = postDeliveryById;
