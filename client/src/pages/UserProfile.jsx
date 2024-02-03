import React, { useEffect } from "react";
import "../components/HeaderPostLogin";
import Footer from "../components/Footer";
import HeaderPostLogin from "../components/HeaderPostLogin";
import { Link } from "react-router-dom";

function UserProfile() {
  const userDetails = {
    name: "Parth Bhanushali",
    email: "parth.b@somaiya.edu",
    phoneNo: "+91 98337 30477",
    age: 7,
    gender: "Prefer not to say",
    bloodGroup: "N/A",
    height: "5’ 4’’",
    weight: "164 kg",
    allergies: "Intellectualness",
    address: "Hiranandalani Medows, Thane, Maharashtra, India",
  };

  return (
    <div>
      <HeaderPostLogin name="Parth Bhanushali" />
      <div className="w-[100vw] h-[80vh] flex items-center justify-center mt-10">

        
        <div className="flex flex-row gap-x-4 h-full mx-24 text-[21px]">
          <div
            className="flex flex-col gap-[2vh] bg-[#222222] px-5 py-4 rounded-[32px]"
            style={{ flex: "30%" }}
          >
            <div className="rounded-[32px] bg-[#ffffff] w-full  h-[30%] flex items-center justify-center text-[#101010] text-[64px] font-bold">
              PB
            </div>
            <div className="flex gap-y-4 flex-col w-[90%]">
              {Object.entries(userDetails).map(([key, value]) => (
                <p
                  key={key}
                  className={
                    key === "email" || key === "address"
                      ? "text-md flex-wrap"
                      : ""
                  }
                >
                  <span className="text-[#4BD472]">
                    {" "}
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </span>
                  : <span className="font-medium">{value}</span>
                </p>
              ))}
            </div>
          </div>
          <div
            className="flex flex-col gap-4 items-center"
            style={{ flex: "80%" }}
          >
            <div className="flex flex-row gap-4 text-[36px] font-black justify-between w-full">
              <button className="rounded-[16px] border-2 border-[#4BD472] bg-gradient-to-br from-[#4BD472] to-[#0e5c1b] px-[5.1vw] py-0.5 w-[50%]">
                <Link to="/ai">Chat with AI</Link>
              </button>

              <button className="bg-[#2a2a2a] border-2 border-[#ffffff] rounded-[16px] px-4 py-0.5 w-[50%]">
                <Link to="/myappointments"> Check Appointments</Link>
              </button>
            </div>
            <div className="rounded-[32px] w-full h-[86vh] bg-[#222222] px-16 py-16">
              History here please
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
