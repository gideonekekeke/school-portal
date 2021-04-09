import React from "react";
import "./Recognition.css";
import map from "../../Images/map.png";

function Recognition() {
  return (
    <div className="cleanBg">
      <div className="bigBg">
        <img src={map} height="100%" width="100%" />
      </div>
    </div>
  );
}

export default Recognition;
