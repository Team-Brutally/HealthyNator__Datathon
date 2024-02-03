import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
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
        <div className="logoContainer" onClick={() => {
          navigate('/');
        }}>
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
          <ScrollLink to="/" onClick={toggleMobileMenu} style={{
            cursor: 'pointer'
          }}>
          <Link><p className="navbarText">Home</p></Link>
          </ScrollLink>
          <ScrollLink to="features"  spy={true} smooth={true} duration={500} offset={-50} onClick={toggleMobileMenu}><p className="navbarText" style={{
            cursor: 'pointer'
          }}>About
          </p></ScrollLink>
          <ScrollLink to="/sign" id="signUp" onClick={toggleMobileMenu} style={{
            cursor: 'pointer'
          }}>
          <Link to='sign'>
            <p className="signBut" style={{
              color:'black'
            }}>Sign Up</p></Link>
          </ScrollLink>
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
