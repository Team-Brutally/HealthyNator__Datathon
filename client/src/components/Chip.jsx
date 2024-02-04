import React, { useState } from "react";

const Chip = ({ symptom, isActive, onClick }) => {
  const [active, setActive] = useState(isActive);

  const handleActive = () => {
    setActive(!active);
    if (onClick) {
      onClick(!active); // Call the onClick prop with the updated active state
    }
  };

  return (
    <div
      className={`h-fit w-fit  px-4 py-2 rounded-full border flex gap-x-2 items-center justify-center cursor-pointer ${
        active ? "border-black bg-[#fff] text-black" : " border-white bg-[#222]"
      }`}
      onClick={handleActive}
    >
      <p>{symptom}</p>
      {active && (
        <img className="h-5" src={require("../assets/closecircle2.svg")}></img>
      )}
    </div>
  );
};

export default Chip;
