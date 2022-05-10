import React from "react";
import "./components.css";
import "../style/about.css";
import { FaAdjust } from "react-icons/fa";
import { popularCource, aboutImg } from "../data/Popularcource";
import { rightdiv, leftdiv } from "../data/Popularcource";
const RightDiv = (props) => {
  return (
    <div className="leftcontent">
      <div
        style={{
          backgroundColor: "#f864a6",
          borderRadius: "40px",
          width: "40px",
          fontSize: "40px",

          height: "40px",
          padding: "18px",
        }}
      >
        <FaAdjust color="white" />
      </div>
      <div className="right">
        <h5
          style={{
            padding: "0px 0px 10px",
            fontSize: "16px",
            textTransform: "uppercase",
            textAlign: "left",
          }}
        >
          {props.name}
        </h5>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
export const LeftDiv = (props) => {
  return (
    <div className="leftcontent">
      <div className="left">
        <h5
          style={{
            padding: "0px 0px 10px",
            fontSize: "16px",
            textTransform: "uppercase",
            textAlign: "right",
          }}
        >
          {props.name}
        </h5>
        <p>{props.description}</p>
      </div>
      <div
        style={{
          backgroundColor: "#f864a6",
          borderRadius: "40px",
          width: "40px",
          fontSize: "40px",

          height: "40px",
          padding: "18px",
        }}
      >
        <FaAdjust color="white" />
      </div>
    </div>
  );
};
export default function About() {
  return (
    <div>
      <div className="aboutheader">
        <h1>About us</h1>
      </div>
      <div className="whowe">
        <div className="whoweblock">
          <div className="whoweimg">
            <img src={aboutImg} />
          </div>
          <div className="whowecontent">
            <div className="whowetitle">
              <h1>WHO WE ARE</h1>
              <div className="programlogo"></div>
            </div>
            <div>
              <p>
                M.B ACADEMY CURRENTLY THE ONLY INSTITUTE IN DELHI THAT OFFERS
                STUDENTS THE OPPORTUNITY TO POLISH THEIR SKILLS IN BEAUTY
                INDUSTRY GIVING THEM FIRST HAND EXPOSURE OF THE REAL WORLD
                LAUNCHED WITH THE MISSION TO ELEVATE THE CULTURE OF BEAUTY
                INDUSTRY WITH LATEST TECHNIQUES ACROSS INDIA IN 2022 VISSION TO
                MAKE MORE CENTER ACROSS INDIA BY PROVIDING ADVANCE TEACHING
                METHODOLOGIES BY USING THE BEST OF COSMETIC BRANDS. MBA IMPARTS
                TRAINING UNDER SEVERAL SUB DOMAINS LIKE BEAUTY THERAPY, HAIR
                TECHNOLOGY, NAIL EXTENSION, SKIN AESTHETICS . IT OFFERS MORE
                THAN 15 BEAUTY COURSES AND ALSO CUSTOMIZES THE SAME BASED ON
                STUDENTS NEEDS MBA HAS MADE SURE THAT ALL THE COURSES ARE
                PRESENTED UNIQUELY , INCOMPARABLE TO THE OTHERS IN INDIA. MBA IS
                DELIGHTED TO WORK WITH THE FINEST FACULTY FROM THE INDUSTRY AND
                IT IS PLEASED TO HAVE MORE THAN 30+ TUTORS AND SUPPORT MERIT
                BEAUTY ACADEMY IS PROUD TO BE A PART OF MORE THAN 1500+ STUDENTS
                DREAM CAREER ALL FROM DELHI.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="popularcoures">
        <div className="popularblock">
          <div className="populartitle">
            <h1>OUR POPULAR COURCES</h1>
            <div className="programlogo"></div>
          </div>
          <div className="courcescontent">
            <div className="leftdiv">
              {leftdiv.map((item) => {
                return (
                  <LeftDiv name={item.name} description={item.description} />
                );
              })}
            </div>
            <div className="leftdiv">
              <img src="https://docs.google.com/uc?id=1aQkh-Nyz1X3q-7sAvyfe0cQuZeI5_zAw" />
            </div>
            <div className="leftdiv">
              <div>
                {rightdiv.map((item) => {
                  return (
                    <RightDiv name={item.name} description={item.description} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="director">
        <div className="directorhead">
          <h2>Director's Note</h2>
          <div className="programlogo"></div>
        </div>
        <div className="directortitle">
          <h3>
            <strong style={{ fontSize: "24px" }}>
              WELCOME TO MBA- MERIT BEAUTY ACADEMY
            </strong>
          </h3>
          <p>
            MBA,THE FIRST BEAUTY SCHOOL IN DELHI TO TEACH STUDENTS WITH BEST
            COSMETIC BRANDS. ESTABLISHED WITH ENVIABLE CONCEPT TO EXCEPTIONAL
            LEVELS OF SUPPORT AND GUIDANCE . FOLLOWING TRADITIONAL & ADVANCE
            METHODS WITH UNIQUE PROTOCOL STUDENTS NOT ONLY ACHIEVE PROFESSIONAL
            QUALIFICATION BUT ALSO BENIFITS WITH IMPRESSIVE AND REWARDING
            CAREER. MBA ALSO CONDUCT SALON STARTER COURSE FOR INDIVIDUAL WHO ARE
            NEW TO THIS FIELD AND WANT TO START THEIR NEW SALON. MBA ITS SISTER
            CONCERN CONSULTANCY, TOGETHER RENDER COMPLETE END TO END SALON
            CONSULTANCY TO STUDENTS FOR OPENING & RUNNING THEIR NEW PLACE. BRAND
            TEACHING METHODS ARE DESIGNED TO MEET UP THE RAPIDLY GROWING BEAUTY
            AND WELLNESS INDUSTRY. OUR HIGHLY QUALIFIED AND EXPERIENCED TUTORS
            PROVIDE ULTIMATE EDUCATION FOR THE COURSES OFFERED. TECHNICALLY
            SPECIFIC AND PRACTICAL SYLLABUS SET ENSURES FINEST EDUCATION WITH
            COMPREHENSIVE COURSES UNLIKE OTHER SCHOOLS WE SPECIALIZED IN TAILOR
            MADE COURSES, TO MEET SPECIFIC NEEDS AND REQUIREMENTS OF AN
            INDIVIDUAL. NESTLED WITH PRIVATE TRAINING FACILITY WE ENSURE THAT
            OUR COURSES ARE HIGHLY RELEVANT AND APPLICABLE TO THE INDUSTRY. WE
            TOGETHER WITH A TEAM AIM TO PROVIDE STUDENTS A VALUABLE HEAD STARTS
            IN THE INDUSTRY. FULLY EQUIPPED IN HOUSE SALONS OFFERS A PERFECT
            LOCATION WITH DEDICATED TREATMENT ROOMS AND ARE FASHIONED TO
            REPLICATE AN ACTUALLY WORKING ENVIRONMENT. ATMOSPHERE OF THE SCHOOL
            IS WARM, FRIENDLY AND POSITIVE. KEEPING THE PASSION OF OUR STUDENTS
            ABOVE THE REST, WE ENDORSE FLEXIBILITY IN IT'S BEST ORDER. OUR
            STUDENTS CAN SELECT TO OPT FOR WEEKEND CLASSES OR PERSONALIZED
            BATCHES ACCORDING TO THEIR PREFERRED TIME SLOTS. OUR TESTAMENT TO
            OUR REPUTATION IS THE 100% PLACEMENT GUARANTEED WITH SOME OF OUR
            STUDENTS PLACED ON AN ANNUAL PACKAGE OF 3 LAKHS AND ABOVE. WE ARE
            CERTAINLY MOVING IN PRODUCING SOME OF THE FINEST TALENTS WITHIN THIS
            SECTOR AND SO WE WELCOME YOU WITH AN ASSURANCE TO ACHIEVE YOUR
            DREAMS.
          </p>
        </div>
      </div>
      <div className="aboutdirector">
        <div className="aboutdirectorcontent">
          <h2>About Director</h2>
          <div class="programlogo"></div>
          <p>
            BEAUTY IS A RARE ART AND WHEN IT COMES TO EXPLORING THIS RARE ART,
            THERE IS NO ONE BETTER THAN (NIKITA CHANDNA OWNER, AND CO-FOUNDER,
            MERITE BEAUTY ACADEMY (MBA)) FOUNDED BY NIKITA CHANDNA AN
            INTERNATIONAL TECHNICAL EDUCATOR, WHO IS A GRADUATE OF LONDON SCHOOL
            OF BEAUTY AND MAKE UP AND AS A YOUNGEST ENTREPRENEUR IN 2022. IT WAS
            IN 2022 WHEN NIKITA DECIDED TO GIFT DELHI WITH IT'S VERY OWN BEAUTY
            DESTINATION. AND THUS, MBA WAS BORN. IT IS A NEW YEARS JOURNEY, MBA
            HAD JUST ADDED A NEW DIMENSION TO BEAUTY BUT ALSO HAD MADE IT'S MARK
            WHEN IT COMES TO IMPARTING QUALITY TEACHING AND TRAINING IN THE
            BEAUTY DOMAIN.
          </p>
        </div>
        <div className="directorimg">
          <img />
        </div>
      </div>
    </div>
  );
}
//
