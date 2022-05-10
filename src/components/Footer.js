import React, { useState } from "react";
import "../style/footer.css";
import emailjs from "@emailjs/browser";

import { BsInstagram } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";

export default function Footer() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setmessage] = useState();
  var publicKey = "PLpU_UIVHVLAHBxR6";
  const template = "template_hxc6qbq";
  const services = "service_hrerpqp";
  function send(email, name, message) {
    // console.log(email, message, name, "data");

    const data = {
      name: name,
      email: email,
      message: message,
    };
    emailjs.send(`${services}`, `${template}`, data, `${publicKey}`).then(
      function (response) {
        console.log("SUCCESS! ");
      },
      function (err) {
        console.log("FAILED...", err);
      }
    );
    setName("");
    setmessage("");
    setEmail("");
  }
  return (
    <div>
      <div className="footer">
        <div className="footerform">
          <label>Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Your Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Your message</label>

          <textarea
            type="text"
            rows="4"
            cols="50"
            value={message}
            onChange={(e) => setmessage(e.target.value)}
          />

          <input
            type="button"
            value="Send"
            id="button"
            onClick={() => {
              send(email, name, message);
            }}
          />
        </div>
        <div className="follow">
          <div className="followheader">
            <h1>Follow us </h1>
          </div>
          <div className="icons">
            <a
              href="https://www.instagram.com/nikitaskinaesthetician_/"
              target="_blank"
            >
              <BsInstagram id="icon" />
            </a>
            <a
              href="https://www.facebook.com/NIKITASKINAESTHETICIAN/"
              target="_blank"
            >
              <AiFillFacebook id="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="designmark">
        <p>
          <a href="https://www.instagram.com/jatin___arora__/" target="_blank">
            Designed by Jatin Arora | copyright 2022
          </a>
        </p>
      </div>
    </div>
  );
}
