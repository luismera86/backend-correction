import { model, Schema } from "mongoose";
import { Student } from "./interfaces";

const studentSchema = new Schema<Student>({
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
})

const Student = model<Student>('Student', studentSchema)

export default Student