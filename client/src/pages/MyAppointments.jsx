import React from "react";

import HeaderPostLogin from "../components/HeaderPostLogin";
import AppointmentCard from "../components/appointmentcard";

const MyAppointments = () => {
  return (
    <div className="h-[100vh] w-[100vw] ">
      <HeaderPostLogin name="Nidhi Deshpande" />
      <div className="h-[50%]  w-full px-8 py-8">
        <p className="text-4xl font-bold px-2">Arranged Appointments</p>
        <div className="w-auto flex flex-col flex-wrap gap-x-6 mt-4 overflow-x-auto h-[95%] p-2">
          <AppointmentCard></AppointmentCard>
          <AppointmentCard></AppointmentCard>
          <AppointmentCard></AppointmentCard>
          <AppointmentCard></AppointmentCard>
          {/* <AppointmentCard></AppointmentCard> */}
          {/* <AppointmentCard></AppointmentCard> */}
          {/* <AppointmentCard></AppointmentCard> */}
        </div>
      </div>

      <div className="h-[50%]  w-full px-8 py-8">
        <p className="text-4xl font-bold px-2">Past Appointments</p>
        <div className="w-full flex flex-col flex-wrap gap-x-6 mt-4  overflow-x-auto h-[95%] p-2">
          {/* <AppointmentCard disabled={true}></AppointmentCard> */}
          <AppointmentCard disabled={true}></AppointmentCard>
          <AppointmentCard disabled={true}></AppointmentCard>
          <AppointmentCard disabled={true}></AppointmentCard>
          <AppointmentCard disabled={true}></AppointmentCard>
          <AppointmentCard disabled={true}></AppointmentCard>
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;
