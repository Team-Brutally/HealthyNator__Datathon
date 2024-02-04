import React from "react";
import logo from "../assets/healthynatorlogo.png";
import { Link, useNavigate } from "react-router-dom";

const HeaderPostLogin = ({ name }) => {
  const getInitials = (name) => {
    const nameArray = name.split(" ");
    return nameArray.map((word) => word.charAt(0).toUpperCase()).join("");
  };

  const initials = getInitials(name);

  const navigate = useNavigate();

  return (
    <div className="w-full h-[15%] item-center justify-between flex px-2 py-2">
      <div
        className="flex justify-center items-center px-10
      
      "
      >
        <img src={logo}></img>
      </div>
      <div className="flex items-center justify-center gap-x-24 text-xl font-semibold mt-8">
        <Link to="/">Home</Link>
        <Link to="/">About us</Link>
        <div
          className="flex items-center justify-center gap-x-4 px-6"
          onClick={() => navigate("/home")}
        >
          <div className="w-fit h-fit bg-[#D9D9D9] p-2 rounded-full text-black text-sm ">
            {initials}
          </div>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderPostLogin;
