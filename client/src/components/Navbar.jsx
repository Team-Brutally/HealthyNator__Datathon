import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom"; 
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [screenSize, setScreenSize] = useState({
    width: undefined,
    height: undefined,
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    document.body.classList.toggle("menu-open", !isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navHolder">
      <div className="navbarContainer">
        <div className="logoContainer" onClick={() => {}}>
          <img
            src="/NavLogo.svg"
            alt=""
            className="navbarImage"
            width={150}
            height={50}
          />
        </div>
        <div className="navGap"></div>
        <ul
          className={`navbarTitle ${isMobileMenuOpen ? "" : "mobileMenuClose"}`}
        >
          <Link to="/" onClick={toggleMobileMenu}>
            <p className="navbarText">Home</p>
          </Link>
          <Link to="" onClick={toggleMobileMenu}><p className="navbarText">About</p></Link>
          <Link to="/signin" id="signUp" onClick={toggleMobileMenu}>
            <p className="signBut">Sign Up / Log In</p>
          </Link>
        </ul>
        <div className="buttonContainer">
          <button className="navbarMobileButton" onClick={toggleMobileMenu}>
            <img
              src={isMobileMenuOpen ? "/Close.png" : "/mobile-nav.png"}
              alt=""
              className="navbarButton"
              width={30}
              height={30}
              style={{fill: 'white'}}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
