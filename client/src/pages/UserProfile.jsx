import React, { useEffect } from "react";
import "../components/HeaderPostLogin";
import Footer from "../components/Footer";
import HeaderPostLogin from "../components/HeaderPostLogin";

function UserProfile() {
  return (
    <div>
      <HeaderPostLogin name="Parth Bhanushali" />
      <div className="w-[100vw] h-[95vh] flex items-center justify-left mt-10">
        <div className="flex flex-row gap-[24px] mx-48 text-[21px]">
          <div className="flex flex-col gap-[2vh] bg-[#222222] px-5 py-4 rounded-[32px]">
            <div className="rounded-[32px] bg-[#ffffff] w-[12vw] h-[12vw] flex items-center justify-center text-[#101010] text-[64px] font-bold">
              PB
            </div>
            <div className="font-bold">Name: Parth Bhanushali</div>
            <div>Email: parth.b@somaiya.edu</div>
            <div>No.: +91 98337 30477</div>
            <div>Age: 7</div>
            <div>Gender: Prefer not to say</div>
            <div>Blood Group: N/A</div>
            <div>Height: 5’ 4’’</div>
            <div>Weight: 164 kg</div>
            <div className="text-[16px]">Allergies: Intellectualness</div>
            <div className="text-[16px]">
              Address: Hiranandalani Medows,<br></br> Thane, Maharhashtra, India
            </div>
          </div>
          <div className="flex flex-col gap-[3vh]"> 
            <div className="flex flex-row gap-[5vw] text-[36px] font-bold">
              <button className="rounded-[16px] border-4 border-[#CCFFBA] bg-gradient-to-br from-[#0EFD35] to-[#97FFA8] px-16 py-3">Chat with AI</button>
              <button className="border-4 border-[#ffffff] rounded-[16px] px-4 py-3">Check Appointments</button>
            </div>
            <div className="rounded-[32px] w-[53vw] h-[81.5vh] bg-[#222222]">
              History here please
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
export default UserProfile;