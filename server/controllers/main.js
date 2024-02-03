import mongoose from "mongoose";
// Importing PostMessage schema
import Patient from "../models/patientUser.js";
// Create a new patient user
import Doctor from "../models/doctorUser.js";




export const getPatients=async (req,res)=>{
    try
    {
        const patientMessages = await Patient.find();
        res.status(200).json(patientMessages);
        console.log('Get Request Successful')
    }
    catch(err)
    {
        res.status(404).json({message:err.message});
    }
}

export const createPatient=async (req,res)=>{
    const patient = req.body;
    const newPatient = new Patient(patient);
    try
    {
        await newPatient.save();
        res.status(201).json(newPatient);
        console.log('Post Request Successful')
    }
    catch(err)
    {
        res.status(409).json({message:err.message});
    }
}

export const getDoctors=async (req,res)=>{
    try
    {
        const doctorMessages = await Doctor.find();
        res.status(200).json(doctorMessages);
        console.log('Get Request Successful')
    }
    catch(err)
    {
        res.status(404).json({message:err.message});
    }
}

export const createDoctor=async (req,res)=>{
    const doctor = req.body;
    const newDoctor = new Doctor(doctor);
    try
    {
        await newDoctor.save();
        res.status(201).json(newDoctor);
        console.log('Post Request Successful')
    }
    catch(err)
    {
        res.status(409).json({message:err.message});
    }
}

