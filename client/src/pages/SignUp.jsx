import * as React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import "../css/SignUp.css";

const bloodgroups = [
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "O-" },
];

const genders = [
  { value: "male", label: "Male" },
  { value: "Female", label: "Female" },
];
function SignUp() {
  const textFieldInputProps = {
    style: {
      width: "450px", // Set your desired width
      backgroundColor: "#101010", // Set the background color to white
      color: "#fffff",
      borderBottomWidth: "1px",
      borderColor: "white",
    },
  };

  const textFieldInputLabelProps = {
    style: {
      color: "white", // Set the label text color to white
    },
  };
  return (
    <>
      <div className="masterSignUp">
        <div className="suCont">
          <span>Please enter the details...</span>
          <span>
            <TextField
              variant="filled"
              label="Name: "
              placeholder="Name"
              InputProps={textFieldInputProps}
              InputLabelProps={textFieldInputLabelProps}
            />
          </span>
          <span>
            <TextField
              variant="filled"
              label="Age: "
              placeholder="Age"
              InputProps={textFieldInputProps}
              InputLabelProps={textFieldInputLabelProps}
            />
          </span>
          <span>
            <TextField
              label="Email: "
              placeholder="Email"
              InputProps={textFieldInputProps}
              InputLabelProps={textFieldInputLabelProps}
            />
          </span>
          <span>
            <TextField
              variant="filled"
              label="Contact: "
              placeholder="Contact"
              InputProps={textFieldInputProps}
              InputLabelProps={textFieldInputLabelProps}
            />
          </span>
          <span>
            <TextField
              variant="filled"
              InputProps={textFieldInputProps}
              InputLabelProps={textFieldInputLabelProps}
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
            </TextField>
          </span>
          <span>
            <TextField
              variant="filled"
              InputProps={textFieldInputProps}
              InputLabelProps={textFieldInputLabelProps}
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
            </TextField>
          </span>
          <span>
            <TextField
              variant="filled"
              label="Height-Feet"
              InputProps={textFieldInputProps}
              InputLabelProps={textFieldInputLabelProps}
            ></TextField>
            <TextField label="Inches"></TextField>
          </span>
          <span>
            <TextField
              variant="filled"
              label="Weight-kg"
              InputProps={textFieldInputProps}
              InputLabelProps={textFieldInputLabelProps}
            ></TextField>
          </span>
          <span>
            <TextField
              variant="filled"
              label="Any Previous allergies?"
              InputProps={textFieldInputProps}
              InputLabelProps={textFieldInputLabelProps}
              fullWidth
            ></TextField>
          </span>
          <span>
            <TextField
              variant="filled"
              label="Your address"
              fullWidth
              InputProps={textFieldInputProps}
              InputLabelProps={textFieldInputLabelProps}
            ></TextField>
          </span>
          <span>
            <TextField
              variant="filled"
              label="Password"
              fullWidth
              InputProps={textFieldInputProps}
              InputLabelProps={textFieldInputLabelProps}
            ></TextField>
          </span>
          <span>
            <TextField
              variant="filled"
              label="Confirm Password"
              fullWidth
              InputProps={textFieldInputProps}
              InputLabelProps={textFieldInputLabelProps}
            ></TextField>
          </span>
          <span>
            <Button
              variant="contained"
              style={{ backgroundColor: "#4461F2", color: "white" }}
            >
              Sign Up
            </Button>
          </span>
        </div>
      </div>
    </>
  );
}

export default SignUp;
