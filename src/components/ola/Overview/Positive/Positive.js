import React from "react";
import "./Positive.css";
import std1 from "../../Images/stud2.png";
import std2 from "../../Images/stud3.png";
import std3 from "../../Images/stud1.png";

function Positive() {
  return (
    <div className="cam">
      <div className="PosContainer">
        <div className="majorText">
          <h1>Make Screen time Positive </h1>
          <div>
            Coding is the Language of the Digital Age and the Blueprint to
            Innovation in Technology{" "}
          </div>
        </div>
        <div className="posContentA">
          <div className="posText">
            <h1>Create Technology</h1>
            <div>
              Your child will quickly learn to build games, art, apps, websites
              with code. They will also learn to animate, create music and art.
              They will become true makers of technology.{" "}
            </div>
          </div>
          <div className="posImg">
            <img src={std1} height="100%" width="100%" />
          </div>
        </div>
      </div>
      <div className="PosContainer">
        <div className="posContentB">
          <div className="posImg">
            <img src={std2} height="100%" width="100%" />
          </div>
          <div className="posText">
            <h1>Improve STEM Skills</h1>
            <div>
              Your kids will learn to break down and analyze problems that will
              help them in math, reading and science while developing their
              critical thinking skills.{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="PosContainer">
        <div className="posContentC">
          <div className="posText">
            <h1>Build Confidence </h1>
            <div>
              Coding builds confidence and 21st century skills important to
              future success as independent, and resourceful problem solvers.{" "}
            </div>
          </div>
          <div className="posImg">
            <img src={std3} height="100%" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Positive;
