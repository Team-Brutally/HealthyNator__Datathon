import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <div className='footerHolder'>
        <div className='footerContainer'>

          <div className='ThelogoContainer'>
            <img src='/NavLogo.svg' alt='' style={{
              width: '200px',
              height: '70px',
              margin: '0'
            }}/>
            <p>Generalizing aid from home </p>
            <ul>
              <li>
                <img src="/SocialMedia/Facebook.svg"></img>
              </li>
              <li>
                <img src="/SocialMedia/Instagram.svg"></img>
              </li>
              <li>
                <img src="/SocialMedia/LinkedIn.svg"></img>
              </li>
              <li>
                <img src="/SocialMedia/Twitter.svg"></img>
              </li>
              <li>
                <img src="/SocialMedia/YouTube.svg"></img>
              </li>
            </ul>
          </div>

          <div className="footerContacts">
            <p className="footerGreen">Contact Us</p>
            <span>
              <span>
                <img src="/Contacts/Email.svg"></img>
              </span>
              <span>rhythm.juneja@somaiya.com</span>
            </span>
            <span>
              <span>
                <img src="/Contacts/Phone.svg"></img>
              </span>
              <span>+91 96256 45274</span>
            </span>
            <span>
              <span>
                <img src="/Contacts/Mark.svg"></img>
              </span>
              <span>KJSCE, Somaiya Vidyavihaar University, Mumbai, 400067</span>
            </span>
          </div>
        </div>
         
          <div>
            <hr className="divLine"></hr>
          <p className='copyrightContainer'>
          © Copyright {new Date().getFullYear()} - Team Brutal.ly. All rights reserved. For more information on our Terms and Conditions Click Here
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
