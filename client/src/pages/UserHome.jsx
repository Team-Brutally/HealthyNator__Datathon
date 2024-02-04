import React from "react";
import Navbar from "../components/Navbar";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AppProvider } from "../App";
import { useAppContext } from "../App";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SignUp from "./SignUp";

const initialPatientState = {
  age: null,
  name: "",
  gender: "",
  height: null,
  weight: null,
  contactno: null,
  address: "",
  bloodgroup: "",
  allergies: [],
  medicalhistory: [],
  currentmedication: [],
  familymedicalhistory: [],
  email: "",
  id: "",
  password: "",
  createdAt: new Date(),
};

const UserHome = () => {
  const [confirmPassword, setCPassword] = useState("");
  const [user, setUser] = useState(initialPatientState);

  const { isSigned } = useAppContext();
  const { setIsSignedIn } = useAppContext();
  const { setAppUser } = useAppContext();
  const { appUser } = useAppContext();
  const [isSignUp, setIsSignUp] = useState(true);

  const [userFlow, setUserFlow] = useState(1);
  const navigate = useNavigate();

  const textFieldInputProps = {
    style: {
      width: "450px",
      backgroundColor: "#101010",
      color: "#fff",
      borderBottom: "1px solid #fff",
    },
  };

  const textFieldInputLabelProps = {
    style: {
      color: "white",
    },
  };

  return (
    <div className="pb-24">
      <Navbar />
      <div className="w-[100vw] h-[80vh] flex items-center justify-center mt-24">
        {/* Blur bg  */}

        <div className=" absolute top-[100px] left-[60%] ">
          <div className="w-full h-full rainbow2 flex">
            <div className="h-[350px] w-[350px] bg-indigo-600 z-[0]"></div>
          </div>
        </div>

        <div className=" absolute top-2/3 left-1/2">
          <div className="w-full h-full rainbow flex">
            <div className="h-[150px] w-[150px] bg-red-600 ">hi</div>
            <div className="h-[150px] w-[150px] bg-yellow-600 ">hi</div>
            <div className="h-[150px] w-[150px] bg-green-600 ">hi</div>
            <div className="h-[150px] w-[150px] bg-cyan-600 ">hi</div>
            <div className="h-[150px] w-[150px] bg-indigo-600 ">hi</div>
          </div>
        </div>

        <div className="flex h-full w-full px-28">
          <div className="w-[50%] h-full " style={{ flex: "20%" }}>
            <p className="text-5xl font-semibold w-full h-[20%] py-10 ">
              Welcome
            </p>

            <div className="w-full h-full flex flex-col gap-y-6">
              {userFlow === 1 && isSignUp ? (
                <TextField
                  id="outlined-basic"
                  label="Name"
                  placeholder="Enter Your Full name"
                  variant="filled"
                  InputProps={textFieldInputProps}
                  InputLabelProps={textFieldInputLabelProps}
                  required={true}
                  onChange={(e) => {
                    setUser({ ...user, name: e.target.value });
                    console.log(user);
                  }}
                  value={user.name}
                  type="string"
                />
              ) : null}
              {userFlow === 1 && (
                <>
                  <TextField
                    id="outlined-basic"
                    label="E-mail"
                    placeholder="Enter your email"
                    variant="filled"
                    InputProps={textFieldInputProps}
                    InputLabelProps={textFieldInputLabelProps}
                    required={true}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        email: e.target.value,
                        id: e.target.value,
                      });
                      console.log(user);
                    }}
                    value={user.email}
                    type="email"
                  />

                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="filled"
                    placeholder="Enter your password"
                    InputProps={textFieldInputProps}
                    InputLabelProps={textFieldInputLabelProps}
                    required={true}
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value });
                      console.log(user);
                    }}
                    type="password"
                    value={user.password}
                  />
                </>
              )}
              {isSignUp && (
                <>
                  {userFlow === 1 && (
                    <TextField
                      id="outlined-basic"
                      label="Confirm Password"
                      variant="filled"
                      placeholder="Enter your password"
                      InputProps={textFieldInputProps}
                      InputLabelProps={textFieldInputLabelProps}
                      required={true}
                      value={confirmPassword}
                      onChange={(e) => {
                        setCPassword(e.target.value);
                        console.log(user);
                      }}
                      type="password"
                    />
                  )}

                  {userFlow === 2 && (
                    <>
                      <TextField
                        id="gender"
                        label="Gender"
                        variant="filled"
                        select
                        value={user.gender}
                        required={true}
                        onChange={(e) => {
                          setUser({ ...user, gender: e.target.value });
                          console.log(user);
                        }}
                        InputProps={textFieldInputProps}
                        InputLabelProps={textFieldInputLabelProps}
                        SelectProps={{
                          IconComponent: ArrowDropDownIcon,
                          style: {
                            color: "white",
                            borderBottom: "1px solid #fff",
                          },
                        }}
                      >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </TextField>

                      <TextField
                        id="bloodgroup"
                        label="Blood Group"
                        variant="filled"
                        select
                        required
                        value={user.bloodgroup}
                        InputProps={textFieldInputProps}
                        InputLabelProps={textFieldInputLabelProps}
                        SelectProps={{
                          IconComponent: ArrowDropDownIcon,
                          style: {
                            color: "white",
                            borderBottom: "1px solid #fff",
                          },
                        }}
                        onChange={(e) => {
                          setUser({ ...user, bloodgroup: e.target.value });
                          console.log(user);
                        }}
                      >
                        <MenuItem value="A+">A+</MenuItem>
                        <MenuItem value="A-">A-</MenuItem>
                        <MenuItem value="B+">B+</MenuItem>
                        <MenuItem value="B-">B-</MenuItem>
                        <MenuItem value="O+">O+</MenuItem>
                        <MenuItem value="O-">O-</MenuItem>
                        <MenuItem value="AB+">AB+</MenuItem>
                        <MenuItem value="AB-">AB-</MenuItem>
                      </TextField>
                    </>
                  )}
                  {userFlow === 3 && (
                    <>
                      <TextField
                        id="contactno"
                        label="Contact Number"
                        value={user.contactno}
                        variant="filled"
                        placeholder="Enter your contact number"
                        InputProps={textFieldInputProps}
                        InputLabelProps={textFieldInputLabelProps}
                        required={true}
                        onChange={(e) => {
                          setUser({ ...user, contactno: e.target.value });
                          console.log(user);
                        }}
                      />

                      <TextField
                        id="address"
                        label="Address"
                        variant="filled"
                        value={user.address}
                        placeholder="Enter your address"
                        InputProps={textFieldInputProps}
                        InputLabelProps={textFieldInputLabelProps}
                        required={true}
                        onChange={(e) => {
                          setUser({ ...user, address: e.target.value });
                          console.log(user);
                        }}
                      />

                      <TextField
                        id="age"
                        label="Age"
                        variant="filled"
                        value={user.age}
                        placeholder="Enter your age"
                        InputProps={textFieldInputProps}
                        InputLabelProps={textFieldInputLabelProps}
                        required={true}
                        onChange={(e) => {
                          setUser({ ...user, age: e.target.value });
                          console.log(user);
                        }}
                      />

                      <TextField
                        id="height"
                        label="Height"
                        value={user.height}
                        variant="filled"
                        placeholder="Enter your height"
                        InputProps={textFieldInputProps}
                        InputLabelProps={textFieldInputLabelProps}
                        required={true}
                        onChange={(e) => {
                          setUser({ ...user, height: e.target.value });
                          console.log(user);
                        }}
                      />

                      <TextField
                        id="weight"
                        label="Weight"
                        variant="filled"
                        value={user.weight}
                        placeholder="Enter your weight"
                        InputProps={textFieldInputProps}
                        InputLabelProps={textFieldInputLabelProps}
                        required={true}
                        onChange={(e) => {
                          setUser({ ...user, weight: e.target.value });
                          console.log(user);
                        }}
                      />

                      <TextField
                        id="allergies"
                        label="Allergies"
                        value={user.allergies.join(",")}
                        variant="filled"
                        placeholder="Enter your allergies with comma separated values"
                        InputProps={textFieldInputProps}
                        InputLabelProps={textFieldInputLabelProps}
                        required={true}
                        onChange={(e) => {
                          setUser({
                            ...user,
                            allergies: e.target.value.split(","),
                          });
                          console.log(user);
                        }}
                      />
                    </>
                  )}
                </>
              )}

              <p className="text-end text-xs text-[#C7C7C7]">
                Recover Password?
              </p>
              <button
                className="w-full bg-[#4461F2] mt-10 rounded-lg h-[8%] font-bold"
                onClick={async () => {
                  if (isSignUp) {
                    if (userFlow === 1) {
                      if (user.password === confirmPassword) {
                        if (user.password === "") {
                          alert("Password cannot be empty");
                          return;
                        }
                        setUserFlow(2);
                        console.log("Set to 2");
                      } else {
                        alert("Password doesnt match");
                        return;
                      }
                    } else if (userFlow === 2) {
                      console.log("Set to 3");
                      setUserFlow(3);
                    } else {
                      localStorage.setItem("user", JSON.stringify(user));
                      try {
                        const userObj = await axios.post(
                          "http://localhost:3000/users/patients",
                          user,
                          {
                            headers: {
                              "Access-Control-Allow-Origin":
                                "http://localhost:5173",
                              "Access-Control-Allow-Methods":
                                "GET, POST, PUT, DELETE",
                              "Access-Control-Allow-Headers": "Content-Type",
                            },
                            withCredentials: true,
                          }
                        );
                        console.log(userObj);
                      } catch (err) {
                        console.log(err);
                      }

                      navigate("/home");
                    }
                  } else {
                    navigate("/home");
                  }
                }}
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </div>
          <div className="w-[50%] h-full " style={{ flex: "70%" }}>
            <div className="w-full h-[70%] flex flex-col justify-start items-start text-6xl font-bold ml-[25rem] mt-8">
              <div className="text-start z-[1]">
                <p className=" ">Sign In to </p>
                <p>your Health </p>
              </div>
              <div className="text-xl mt-16 text-start">
                <p>
                  {isSignUp
                    ? "I already have an account"
                    : " If you dont have an account "}{" "}
                </p>

                <p>
                  you can
                  <button
                    onClick={() => {
                      if (userFlow === 2) {
                        setUserFlow(1);
                      }

                      setIsSignUp(!isSignUp);
                    }}
                  >
                    <span className="text-[#4461F2]">
                      &nbsp; {isSignUp ? " Sign in" : " Register here"}
                    </span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
