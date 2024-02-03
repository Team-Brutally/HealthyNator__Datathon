// need to add props

import React, { useEffect, useState } from "react";

const AppointmentCard = ({ disabled, onClick, className }) => {
  const [cancelled, setCancelled] = useState(false);
  const [confirmCancel, setConfirmCancel] = useState(false);
  useEffect(() => {
    if (disabled) {
      setCancelled(true);
    }
  }, []);

  return (
    <div
      className={`w-[20%] h-full  rounded-2xl  ${
        cancelled
          ? "bg-[#151313] opacity-30 inset-1 outline outline-red-300"
          : "bg-[#545151] shadow-sm shadow-[#fff]"
      } `}
    >
      <div className="h-[45%] w-full p-4 flex gap-x-6 item-center justify-center">
        <img src={require("../assets/docimg.png")} className="h-full mt-5" />
        <div className="h-full py-4">
          <p className="text-lg border-b">Dr. Vasudev</p>
          <div className="text-xs">
            <p>MBBS, MD</p>
            <p>Gynecologist</p>
            <p>Urologist</p>
            <p>Testicular Torsion</p>
          </div>
          <p className="font-medium text-xl">25 Years+</p>
        </div>
      </div>
      <div className="h-[50%] w-full  px-4 flex flex-col justify-center items-start gap-y-2">
        <div className="py-4">
          <div className="flex gap-x-4 items-center  px-4 ">
            <img src={require("../assets/bluetick.png")} className="h-6"></img>
            <p className="text-sm text-[#4BD472]">86% (201 patients)</p>
          </div>
          <div className="flex gap-x-4 items-center  px-4 ">
            <img src={require("../assets/cashicon.png")} className="h-6"></img>
            <p className="text-sm ">₹2000 /Appointment</p>
          </div>
        </div>
        {confirmCancel ? (
          <div className="options flex gap-x-4 w-full">
            <button
              className={`px-4  h-16 w-[60%]  flex self-center items-center justify-center font-medium rounded-lg ease-in duration-300  
            bg-[#4BD472]
            `}
              onClick={() => {
                if (!cancelled) {
                  setCancelled(true);
                  setConfirmCancel(false);
                }
              }}
            >
              Yes
            </button>
            <button
              className={`px-4  h-16 w-[50%]  flex self-center items-center justify-center font-medium rounded-lg ease-in duration-300  ${
                cancelled ? "bg-[#444]" : "bg-[#FF0404]"
              }`}
              onClick={() => {
                if (!cancelled) setConfirmCancel(null);
              }}
            >
              No
            </button>
          </div>
        ) : (
          <button
            className={`px-4  h-16 w-[95%]  flex self-center items-center justify-center font-medium rounded-lg ease-in duration-300  ${
              cancelled ? "bg-[#444]" : "bg-[#FF0404]"
            }`}
            onClick={() => {
              if (!disabled) setConfirmCancel(!confirmCancel);
            }}
          >
            {cancelled ? "Cancelled" : "Cancelled Appoinment"}
          </button>
        )}
      </div>
    </div>
  );
};

export default AppointmentCard;
