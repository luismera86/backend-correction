"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    course: {
        type: String
    },
    commission: {
        type: Number
    },
    tutor: {
        type: String
    },
    reports: {
        type: Object
    },
});
const Student = (0, mongoose_1.model)('Student', studentSchema);
exports.default = Student;
