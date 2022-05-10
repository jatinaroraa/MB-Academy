import React from "react";
import "../style/popup.css";
import { imageUrl } from "../data/Programoffer";
export default function Popup(props) {
  var url = `${imageUrl}${props.url}`;

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <div className="popupcontent">
          <img src={url} />
          <h3>{props.name}</h3>
          {props.description.map((des) => {
            return <p>{des}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
