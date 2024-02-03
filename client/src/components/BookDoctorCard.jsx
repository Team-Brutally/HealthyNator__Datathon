// need to add props

import React, { useEffect, useState } from "react";

const BookDoctorCard = ({
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
}) => {
  console.log(qualification);
  const [selected, setSelected] = useState(false);
  //   const [confirmCancel, setConfirmCancel] = useState(false);
  //   useEffect(() => {
  //     if (disabled) {
  //       setCancelled(true);
  //     }
  //   }, []);

  return (
    <div
      className={`h-[50%] w-[30%]  rounded-2xl bg-[#545151] shadow-sm shadow-[#fff]`}
    >
      <div className="h-[45%] w-full p-4 flex gap-x-6 item-center justify-center">
        <img src={docimg} className="aspect-1 rounded-full" />
        <div className="h-full py-4">
          <p className="text-lg border-b">{docName}</p>
          <div className="text-xs">
            {qualification.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[50%] w-full  px-4 flex flex-col justify-center items-start gap-y-2">
        <div className="py-4">
          <div className="flex gap-x-4 items-center  px-4 ">
            <img src={require("../assets/bluetick.png")} className="h-6"></img>
            <p className="text-sm text-[#4BD472]">
              {rating}% ({numberOfPatientsTreated} patients)
            </p>
          </div>
          <div className="flex gap-x-4 items-center  px-4 ">
            <img src={require("../assets/cashicon.png")} className="h-6"></img>
            <p className="text-sm ">₹{price} /Appointment</p>
          </div>
          <div className="flex gap-x-4 items-center  px-4 ">
            <img src={require("../assets/cashicon.png")} className="h-6"></img>
            <p className="text-sm ">{experience} Years+ Exp</p>
          </div>
        </div>

        <button
          className={`px-4  h-16 w-[95%]  flex self-center items-center justify-center font-medium rounded-lg ease-in duration-300  ${
            selected ? "bg-[#444]" : "bg-[#4BD472]"
          }`}
          onClick={() => {
            setSelected(!selected);
          }}
        >
          {selected ? "Deselect" : "Book an apppointment"}
        </button>
      </div>
    </div>
  );
};

export default BookDoctorCard;
