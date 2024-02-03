import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
    age: {type: Number,required:true},
    name: {type: String,required:true},
    gender: {type: String,required:true},
    height: {type: Number,required:true},
    weight: {type: Number,required:true},
    contactno: {type: Number,required:true},
    address: {type: String},
    bloodgroup: {type: String,required:true},
    allergies: [String],
    medicalhistory: [String],
    currentmedication: [String],
    familymedicalhistory: [String],
    email: {type: String,required:true}, 
    id: {type: String,required:true},
    password: {type: String,required:true},
    createdAt: {type: Date,default: new Date()}
});

export default mongoose.model("Patient", patientSchema);
