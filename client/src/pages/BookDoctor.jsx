import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderPostLogin from "../components/HeaderPostLogin";
import { useAppContext } from "../App";
import BookDoctorCard from "../components/BookDoctorCard";

const BookDoctor = () => {
  const navigate = useNavigate();

  const { docList, setDocList } = useAppContext();
  const { bookedAppointment, setBookedAppointment } = useAppContext();
  //   const [selectedDoctorr, setSelectedDoctorr] = useState();

  console.log(docList);
  console.log(bookedAppointment);

  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardSelect = (index) => {
    setSelectedCardIndex(index);
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    console.log("Selected date:", selectedDate);
    setSelectedDate(selectedDate);
  };

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    console.log("Selected date:", selectedTime);
    setSelectedTime(selectedTime);
  };

  const userObject = JSON.parse(localStorage.getItem("user"));
  const finalUserObject = userObject
    ? Object.fromEntries(
        Object.entries(userObject).slice(0, -7) // Remove the last 7 fields
      )
    : userDetails;

  console.log(finalUserObject);

  return (
    <div className="h-[100vh] w-[100vw] ">
      <HeaderPostLogin name={finalUserObject.name} />
      <div className="h-full w-full flex">
        <div className="h-[100%]  w-[70%] px-8 py-8">
          <p className="text-4xl font-bold px-2">Available Doctors:</p>
          <div className="w-auto flex flex-wrap gap-4 mt-4 overflow-x-auto h-[95%] p-2 ">
            {/* <BookDoctorCard></BookDoctorCard>
            <BookDoctorCard></BookDoctorCard>
            <BookDoctorCard></BookDoctorCard> */}
            {docList.map((doctor, index) => {
              return (
                <BookDoctorCard
                  key={index}
                  {...doctor}
                  onSelect={() => handleCardSelect(index)}
                  selected={index === selectedCardIndex}
                  selectedIndex={selectedCardIndex}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                ></BookDoctorCard>
              );
            })}
          </div>
        </div>

        <div className="w-[30%]  h-full px-8 py-8">
          <p className="text-4xl font-bold px-2">Fill up the details</p>
          <div className="w-full flex flex-col flex-wrap gap-x-6 mt-4  overflow-x-auto h-[95%] p-2 gap-y-4">
            <label className="text-lg font-medium">Select Date</label>
            <input
              type="date"
              onChange={handleDateChange}
              className="h-10 rounded-lg text-black px-2 outline outline-green-400"
            />
            <label className="text-lg font-medium mt-4">Select Time</label>
            <input
              type="time"
              onChange={handleTimeChange}
              className="h-10 rounded-lg text-black px-2 outline outline-green-400"
            />
            <button
              className={`px-4 mt-5 h-16 w-full  flex self-center items-center justify-center font-medium rounded-lg ease-in duration-300 bg-[#4BD472]
              `}
              onClick={() => {
                navigate("/myappointments");
              }}
            >
              Confirm Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDoctor;
