import React, { useState, useEffect } from "react";

const HomeHistoryCard = ({
  date,
  time,
  doctor,
  hospital,
  status,
  index,
  doctor_img,
}) => {
  const [cancelled, setCancelled] = useState(false);
  const [confirmCancel, setConfirmCancel] = useState(false);

  useEffect(() => {
    if (status === "Cancelled") {
      setCancelled(true);
    }
  }, []);

  return (
    <div
      className={`w-full h-24 rounded-2xl items-center justify-center flex flex-auto py-5 my-5 ${
        cancelled
          ? "bg-[#151313] opacity-30 inset-1 outline outline-red-300"
          : "bg-[#545151] shadow-sm shadow-[#fff]"
      }`}
    >
      <div className="h-[50%] w-full p-4 flex flex-row gap-x-6 justify-center items-center">
        <div className="h-full py-4 flex flex-row gap-x-6 items-center">
          <img src={doctor_img} className="h-16 rounded-full"></img>
          <div className="h-full py-4 flex flex-col justify-center w-[200px]">
            <p className="text-lg border-b">{doctor}</p>
            <p className="text-sm ">{hospital}</p>
          </div>
        </div>
      </div>
      <div className="h-[50%] w-full px-4 flex flex-col justify-center items-start gap-y-2">
        <div className="py-4">
          <div className="flex gap-x-4 items-center  px-4 ">
            <img src={require("../assets/time.png")} className="h-6"></img>
            <p className="text-sm text-[#4BD472]"> {time}</p>
          </div>
          <div className="flex gap-x-4 items-center  px-4 ">
            <img src={require("../assets/date.png")} className="h-6"></img>
            <p className="text-sm ">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHistoryCard;
