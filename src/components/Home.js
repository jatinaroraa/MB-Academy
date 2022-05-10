import React, { useState, useRef } from "react";
import "../style/home.css";
import { FaBook } from "react-icons/fa";
import Popup from "./Popup";
// import { programData } from "../../src/data/Programoffer";
import { programData } from "../data/Programoffer";
import Recruiters from "./Recruiters";
const Pop = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [data, setData] = useState();

  var handleClose = () => {
    setIsShown(false);
  };
  return (
    <div
      className="programsdata"
      onMouseEnter={() => {
        // setData(programData[i]);

        setIsShown(true);
      }}
      onMouseLeave={() => setIsShown(false)}
    >
      {isShown && (
        <Popup
          handleClose={handleClose}
          url={props.name.id}
          name={props.name.name}
          description={props.name.description}
        />
      )}

      <FaBook
        color="white"
        style={{
          backgroundColor: "#44895f",
          font: "20px",
          padding: "10px",
          borderRadius: "15px",
          marginRight: "5px",
        }}
      />

      <h4> {props.name.name}</h4>
    </div>
  );
};
export default function Home() {
  const program = useRef();
  function smoothScroll(target) {
    const { top } = target.getBoundingClientRect();
    window.scrollTo({
      top: top + window.pageYOffset,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <div className="imagecrousel">
        <img src="https://docs.google.com/uc?id=10dIDneMlX7eHW1vrq11ZNAlVrtqbXQUo" />
      </div>

      <div style={{ padding: "100px 0px", backgroundColor: "#f9f5f3" }}>
        <div className="statistc">
          <div className="statistcsheader">
            <h3> Statistics</h3>
            <p>we serving since 2018</p>
          </div>
          <div className="statisticsblock1">
            <div
              style={{
                width: "8vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  color: "#222222",
                  fontSize: "36px",
                  fontWeight: "400",
                }}
              >
                10
              </h3>
              <p style={{ color: "#666666", fontSize: "14px" }}>
                Prestigious Awards
              </p>
            </div>
          </div>
          <div className="statisticsblock1">
            <div
              style={{
                width: "8vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  color: "#222222",
                  fontSize: "36px",
                  fontWeight: "400",
                }}
              >
                500+
              </h3>
              <p style={{ color: "#666666", fontSize: "14px" }}>Students</p>
            </div>
          </div>
          <div className="statisticsblock1">
            <div
              style={{
                width: "8vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  color: "#222222",
                  fontSize: "36px",
                  fontWeight: "400",
                }}
              >
                10+
              </h3>
              <p style={{ color: "#666666", fontSize: "14px" }}>Events</p>
            </div>
          </div>
        </div>
      </div>
      <div className="programcontent">
        <div ref={program} className="programtitle" id="program">
          <h3>Programs we offers</h3>
          <div className="programlogo"></div>
        </div>
        <div className="programs">
          {programData.map((item, i) => {
            return <Pop name={item} />;
          })}
        </div>
      </div>
      <Recruiters />
    </div>
  );
}
