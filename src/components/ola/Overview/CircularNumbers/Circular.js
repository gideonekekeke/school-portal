import { Button } from "antd";
import React from "react";
import "./Circular.css";
import sch from "../../Images/school.svg";
import ln from "../../Images/lines.svg";
import stud from "../../Images/students.svg";

function Circular() {
  return (
    <div>
      <div className="circleBg">
        <div className="Populace">
          <img />
          <div className="Buttoner">
            <Button>Get Started</Button>
          </div>
          <div className="plainText">Join Tynker’s Global Community</div>
          <div className="Space">
            <div className="spaceCircle">
              <div className="circle">
                <img src={sch} height="100%" width="100%" />
              </div>
              <div>
                <div className="Textf">
                  <div className="Textm">over</div>
                  <div className="Textb">90,000</div>
                </div>
                <div className="Text">used in schools</div>
              </div>
            </div>
            <div className="spaceCircle">
              <div className="circle">
                <img src={ln} height="100%" width="100%" />
              </div>
              <div className="Text">
                <div className="Textb">6 Billion</div>
                <div className="Text">lines of code written by kids</div>
              </div>
            </div>
            <div className="spaceCircle">
              <div className="circle">
                <img src={stud} height="100%" width="100%" />
              </div>
              <div>
                <div className="Textb">60 Million</div>
                <div className="Text">users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Circular;
