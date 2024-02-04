// need to add props

import React, { useEffect, useState } from "react";

const AppointmentCard = ({
  disabled,
  onClick,
  className,
  docName,
  docimg,
  experience,
  numberOfPatientsTreated,
  price,
  qualification,
  rating,
  specialization,
  index,
  selected,
  onSelect,

  selectedTime,
  selectedDate,
}) => {
  const [cancelled, setCancelled] = useState(false);
  const [confirmCancel, setConfirmCancel] = useState(false);
  // console.log(qualification);
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
        <img src={docimg} className="aspect-1 rounded-full" />{" "}
        <div className="h-full py-4">
          <p className="text-lg border-b">{docName}</p>{" "}
          <div className="text-xs">{qualification + ""}</div>
          <p className="text-sm ">{experience} Years+ Exp</p>
        </div>
      </div>
      <div className="h-[50%] w-full  px-4 flex flex-col justify-center items-start gap-y-2">
        <div className="py-4">
          <div className="flex gap-x-4 items-center  px-4 ">
            <img src={require("../assets/time.png")} className="h-6"></img>
            <p className="text-xl text-[#4BD472]"> {selectedTime}</p>
          </div>
          <div className="flex gap-x-4 items-center  px-4  text-xl ">
            <img src={require("../assets/date.png")} className="h-6 "></img>
            <p className="text-xl">{selectedDate}</p>
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
            disabled={cancelled}
          >
            {cancelled ? "Cancelled" : "Cancelled Appoinment"}
          </button>
        )}
      </div>
    </div>
  );
};

export default AppointmentCard;
