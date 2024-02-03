import React from "react";
import "../css/SignUp.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SignUp() {
  return (
    
    <>
    <Navbar />
      <div className="masterSignUp">
        <div className="suCont">
          <span>Please enter the details...</span>
          <span><input type="text" value="name" placeholder="Name"></input></span>
          <span><input type="text" value="age" placeholder="Age"></input></span>
          <span><input type="text" value="email" placeholder="Email"></input></span>
          <span><label>BloodGroup: </label><select name="blood">
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="A-">O-</option>
            <option value="AB">AB</option>
            </select></span>
            <span><label>Gender:</label><select name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              </select></span>
            <span><input type="text" value="contact" placeholder="Contact No."></input></span>
            <span><label>Height: </label><input type="Number"></input><label>'</label><input type="number"></input><label>''</label></span>
            <span><label>Weight</label><input type="Number"></input><label>kg</label></span>
            <span><input type="text" name="alergies" placeholder="Any previous allergies"></input></span>
            <span><input type="text" name="address" placeholder="Address"></input></span>
            <span><button>Sign Up</button></span>
        </div>
      </div>
    </>
  );
}

export default SignUp;
