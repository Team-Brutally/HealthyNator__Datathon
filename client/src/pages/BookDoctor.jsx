import React from "react";
import HeaderPostLogin from "../components/HeaderPostLogin";
import { useAppContext } from "../App";
import BookDoctorCard from "../components/BookDoctorCard";

const BookDoctor = () => {
  const { docList, setDocList } = useAppContext();
  console.log(docList);

  return (
    <div className="h-[100vh] w-[100vw] ">
      <HeaderPostLogin name="Nidhi Deshpande" />
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
                  docimg={doctor.docimg}
                  docName={doctor.docName}
                  experience={doctor.experience}
                  numberOfPatientsTreated={doctor.numberOfPatientsTreated}
                  price={doctor.price}
                  qualification={doctor.qualification}
                  rating={doctor.rating}
                  specialization={doctor.specialization}
                ></BookDoctorCard>
              );
            })}
          </div>
        </div>

        <div className="w-[30%]  h-full px-8 py-8">
          <p className="text-4xl font-bold px-2">Past Appointments</p>
          <div className="w-full flex flex-col flex-wrap gap-x-6 mt-4  overflow-x-auto h-[95%] p-2"></div>
        </div>
      </div>
    </div>
  );
};

export default BookDoctor;
