"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const deliverySchema = new mongoose_1.Schema({
    commentOne: {
        type: String,
    },
    commentTow: {
        type: String,
    },
    commentThree: {
        type: String,
    },
    commentFour: {
        type: String,
    },
    commentFive: {
        type: String,
    },
    feedback: {
        type: String,
    },
    preDeliveryNumber: {
        type: Number,
    },
    student: {
        name: {
            type: String,
        },
        tutor: {
            type: String,
        },
        commission: {
            type: Number,
        },
        course: {
            type: String,
        },
    },
    result: {
        type: String,
    },
});
const Delivery = (0, mongoose_1.model)('Delivery', deliverySchema);
exports.default = Delivery;
