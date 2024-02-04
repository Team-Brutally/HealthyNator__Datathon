import React from "react";

import HeaderPostLogin from "../components/HeaderPostLogin";
import AppointmentCard from "../components/appointmentcard";
import { useAppContext } from "../App";

const MyAppointments = () => {
  const { bookedAppointment } = useAppContext();

  const docList = bookedAppointment;
  const pastDocList = docList.slice(2, 3);
  const userObject = JSON.parse(localStorage.getItem("user"));
  const finalUserObject = userObject
    ? Object.fromEntries(
        Object.entries(userObject).slice(0, -7) // Remove the last 7 fields
      )
    : userDetails;

  console.log(finalUserObject);
  // console.log(docList);

  return (
    <div className="h-[100vh] w-[100vw] ">
      <HeaderPostLogin name={finalUserObject.name} />
      <div className="h-[50%]  w-full px-8 py-8">
        <p className="text-4xl font-bold px-2">Arranged Appointments</p>
        <div className="w-auto flex flex-col flex-wrap gap-x-6 mt-4 overflow-x-auto h-[95%] p-2 justify-start items-start">
          {/* <AppointmentCard></AppointmentCard> */}
          {/* <AppointmentCard></AppointmentCard> */}
          {/* <AppointmentCard></AppointmentCard> */}
          {docList.map((doc, index) => {
            console.log(doc);
            return <AppointmentCard key={index} {...doc}></AppointmentCard>;
          })}
        </div>
      </div>

      <div className="h-[50%]  w-full px-8 py-8">
        <p className="text-4xl font-bold px-2">Past Appointments</p>
        <div className="w-full flex flex-col flex-wrap gap-x-6 mt-4  overflow-x-auto h-[95%] p-2">
          {/* <AppointmentCard disabled={true}></AppointmentCard> */}
          {pastDocList.map((doc, index) => {
            console.log(doc);
            return (
              <AppointmentCard
                disabled={true}
                key={index}
                {...doc}
              ></AppointmentCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;
