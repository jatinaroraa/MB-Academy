import React from "react";
import "../style/recruiters.css";

const ur = "https://docs.google.com/uc?id=";
const image = [
  {
    name: "jawed",
    id: "14ok7rpl-QW1w-lH-AW4JH33ed6277ff1",
  },
  {
    name: "kaya",
    id: "1nk_b_lKBqwURZRXXWXddUUNziSLQgp9a",
  },
  {
    name: "Lakme",
    id: "1_NsSUU2CmmnnFo8Jrf1ChDW5yjjlrA7b",
  },
  {
    name: "Mraiden",
    id: "1hRoGzG-0Xk6RyoaGwxNKf3Wm0hmVl3V0",
  },
  {
    name: "glamp",
    id: "1EMvN2RTAPzk6fGtC-m68EuZe7mWSwZwq",
  },
  {
    name: "Nyka",
    id: "1I_0icCS3_xY6W8ghMAsZHosaVMYlYyYI",
  },
  {
    name: "tonyguy",
    id: "1fD31OvZmEzunysvnxWDORzjeyedoBIUd",
  },
  {
    name: "vlcc",
    id: "1fKwHTCDClKcRlI8LHS7KhRb0njQPWRX9",
  },
];
const Recruiterimg = (props) => {
  var url = `${ur}${props.id}`;

  return <img src={url} />;
};
export default function Recruiters() {
  var url = `${ur}1fKwHTCDClKcRlI8LHS7KhRb0njQPWRX9`;
  return (
    <div className="recruiters">
      <h2>Recruiters</h2>
      {/* <div className="recruitersimg">
        <img src={ur} />
        <img src={ur} />
        <img src={ur} />
      </div> */}
      <div className="recruitersimg">
        {image.map((item) => {
          return <Recruiterimg id={item.id} />;
        })}
      </div>
    </div>
  );
}
