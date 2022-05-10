import React from "react";
import "../style/contact.css";
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

// https://drive.google.com/file/d/17EMvIAe98n1G9qJ3Z4SWCoBhjjOYc9S6/view?usp=sharing
export default function Contact() {
  return (
    <div>
      <div className="contactheader">
        <h1>Contact Us</h1>
      </div>
      <div className="contactouter">
        <div className="contactcard">
          <div>
            <div className="iconouter">
              <div className="icon">
                <FiSmartphone id="icon" />
              </div>
            </div>
            <div className="cardcontent">
              <h3>Mobile</h3>
              <p>
                You can easily take an appointment by phone just call us. +91
                9971481804
              </p>
            </div>
          </div>
        </div>

        <div className="contactcard">
          <div>
            <div className="iconouter">
              <div className="icon">
                <AiOutlineMail id="icon" />
              </div>
            </div>
            <div className="cardcontent">
              <h3>Email</h3>
              <p>
                Even you can email us for take an appointment on
                hairsandskinsolution@gmail.com.
              </p>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
