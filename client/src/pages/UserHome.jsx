import React from "react";
import Navbar from "../components/Navbar";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const UserHome = () => {
  const textFieldInputProps = {
    style: {
      width: "450px", // Set your desired width
      backgroundColor: "#101010", // Set the background color to white
      color: "#fff",
    },
  };

  const textFieldInputLabelProps = {
    style: {
      color: "white", // Set the label text color to white
    },
  };

  return (
    <div>
      <Navbar />
      <div className="w-[100vw] h-[80vh] flex items-center justify-center  mt-24">
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
              <TextField
                id="outlined-basic"
                label="E-Mail"
                placeholder="Enter your email"
                variant="filled"
                InputProps={textFieldInputProps}
                InputLabelProps={textFieldInputLabelProps}
                required={true}
              />

              <TextField
                id="outlined-basic"
                label="Password"
                variant="filled"
                placeholder="Enter your password"
                InputProps={textFieldInputProps}
                InputLabelProps={textFieldInputLabelProps}
                required={true}
              />
              <p className="text-end text-xs text-[#C7C7C7]">
                Recover Password?
              </p>
              <button className="w-full bg-[#4461F2] mt-10 rounded-lg h-[8%] font-bold ">
                Sign In
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
                <p>if you don't have an account </p>

                <p>
                  you can
                  <Link to="/">
                    <span className="text-[#4461F2]"> Register here</span>
                  </Link>
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
