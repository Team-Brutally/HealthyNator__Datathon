import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    id: { type: String },
    password: { type: String, required: true },
    hospital: { type: String, required: true },
    medicalHistory: { type: String }
});

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;
