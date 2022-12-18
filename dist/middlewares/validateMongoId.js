"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMongoId = void 0;
const mongoose_1 = require("mongoose");
const validateMongoId = (req, res, nex) => {
    try {
        const { id } = req.params;
        const isMongoId = (0, mongoose_1.isValidObjectId)(id);
        if (!isMongoId) {
            return res.status(400).json({ msg: 'No es un id válido' });
        }
        nex();
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
    }
};
exports.validateMongoId = validateMongoId;
