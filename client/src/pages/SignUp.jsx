import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import "../css/SignUp.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const bloodgroups = [
  {value: 'A+',label: 'A+',},{value: 'A-',label: 'A-',},{value: 'B+',label: 'B+',},{value: 'B-',label: 'B-',},{value: 'AB+',label: 'AB+',},{value: 'AB-',label: 'AB-',},{value: 'O+',label: 'O+',},{value: 'O-',label: 'O-',},
];

const genders = [
  {value: "male", label: "Male"}, {value: "Female", label: "Female"}
]
function SignUp() {
  return (
    
    <>
    <Navbar />
      <div className="masterSignUp">
        <div className="suCont">
          <span>Please enter the details...</span>
          <span><TextField label="Name: " placeholder="Name"/></span>
          <span><TextField label="Age: " placeholder="Age"/></span>
          <span><TextField label="Email: " placeholder="Email"/></span>
          <span><TextField label="Contact: " placeholder="Contact"/></span>
          <span><TextField
          select
          label="Please select your Blood group"
          defaultValue="A+"
          fullWidth
        >
          {bloodgroups.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField></span>
        <span><TextField
          select
          label="Please select your gender"
          fullWidth
          defaultValue="male"
          helperText=""
        >
          {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField></span>
            <span><TextField label="Height-Feet"></TextField><TextField label="Inches"></TextField></span>
            <span><TextField label="Weight-kg"></TextField></span>
            <span><TextField label="Any Previous allergies?" fullWidth></TextField></span>
            <span><TextField label="Your address" fullWidth></TextField></span>
            <span><Button variant="contained" style={{ backgroundColor: '#4461F2', color: 'white' }}>Sign Up</Button></span>
            
        </div>
      </div>
    </>
  );
}

export default SignUp;
