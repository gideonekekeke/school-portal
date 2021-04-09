import { Button } from "antd";
import React from "react";
import "./Curricard.css";
import c1 from "../../Images/cardpy.png";
import c2 from "../../Images/cardgl.png";
import c3 from "../../Images/cardjs.png";
import c4 from "../../Images/cardmn.png";

function Curricard() {
  return (
    <div>
      <div className="curContainer">
        <div className="curText">
          <h1>Award winning Curriculum</h1>
          <div>
            Tynker interactive courses and projects make your child’s computer
            time productive, educational and creative. Over 600 hours of content
            for all levels and ages.{" "}
          </div>
          <div>Check out our full curriculum.</div>
        </div>
        <div className="curImg">
          <div className="imgterms">
            <img src={c1} height="100%" width="100%" />
          </div>
          <div className="imgterms">
            <img src={c2} height="100%" width="100%" />
          </div>
          <div className="imgterms">
            <img src={c3} height="100%" width="100%" />
          </div>
          <div className="imgterms">
            <img src={c4} height="100%" width="100%" />
          </div>
        </div>
        <div className="curButton">
          <Button>Curriculum</Button>
        </div>
      </div>
    </div>
  );
}

export default Curricard;
