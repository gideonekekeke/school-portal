import { Button } from "antd";
import React from "react";
import Cardparts from "../CardParts/Cardparts";
import Certification from "../Certification/Certification";
import Circular from "../CircularNumbers/Circular";
import Curricard from "../Curriculum/Curricard";
import Partner from "../Partner/Partner";
import Positive from "../Positive/Positive";
import Pricing from "../Pricing/Pricing";
import Recognition from "../Recognition/Recognition";
import thumb from "../../Images/svg.gif";
import "./Overview.css";

function Overview() {
  return (
    <div>
      <div className="mainContainer">
        <div className="mainContent">
          <div className="mainPart">
            <div className="bold1">The easiest way</div>

            <div className="bold2"> to learn to code!</div>
            <div className="plain1">
              Kids learn to code: block coding, JavaScript, and Python as they
              play games and solve challenging puzzles.
            </div>

            <div className="wayboth">
              <Button className="wayBoth">GET STARTED FOR FREE</Button>
              <div className="salesText">
                Access all home courses for <p className="stike">$10</p> $7
              </div>
            </div>
          </div>
          <div className="imgBack">
            <img
              src={thumb}
              height="100%"
              width="100%"
              alt="display of image"
            />
          </div>
        </div>
      </div>
      <Cardparts />
      <Circular />
      <Recognition />
      <Positive />
      <Curricard />
      <Pricing />
      <Partner />
    </div>
  );
}

export default Overview;
// <Certification />
