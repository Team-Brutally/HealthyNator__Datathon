import mongoose from "mongoose";

const doctorSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contactno: { type: Number, required: true },
    address: { type: String, required: true },
    specialisation: { type: [String], required: true },
    experience: { type: Number, required: true },
    id: { type: String, required: true },
    password: { type: String, required: true },
    joinedOn: { type: Date, required: true },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
