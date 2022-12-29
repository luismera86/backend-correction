"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const deliverySchema = new mongoose_1.Schema({
    evaluationOne: {
        comment: {
            type: String
        },
        status: {
            type: String
        },
    },
    evaluationTow: {
        comment: {
            type: String
        },
        status: {
            type: String
        },
    },
    evaluationThree: {
        comment: {
            type: String
        },
        status: {
            type: String
        },
    },
    evaluationFour: {
        comment: {
            type: String
        },
        status: {
            type: String
        },
    },
    evaluationFive: {
        comment: {
            type: String
        },
        status: {
            type: String
        },
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
