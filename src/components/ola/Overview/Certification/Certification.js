import React from "react";
import "./Certification.css";
import aw1 from "../../Images/aw.png";
import aw2 from "../../Images/awc.webp";
import aw3 from "../../Images/awd.png";
import aw4 from "../../Images/awdd.webp";
import aw5 from "../../Images/awm.png";
import aw6 from "../../Images/awn.png";
import aw7 from "../../Images/awp.webp";
import aw8 from "../../Images/aws.png";
import aw9 from "../../Images/awt.png";

function Certification() {
  return (
    <div>
      <div className="certBg">
        <div className="certmod">
          <img src={aw2} height="100%" width="100%" />
        </div>
        <div className="certmod">
          <img src={aw1} height="100%" width="100%" />
        </div>
        <div className="certmod">
          <img src={aw3} height="100%" width="100%" />
        </div>
        <div className="certmod">
          <img src={aw4} height="100%" width="100%" />
        </div>
        <div className="certmod">
          <img src={aw5} height="100%" width="100%" />
        </div>
        <div className="certmod">
          <img src={aw6} height="100%" width="100%" />
        </div>
        <div className="certmod">
          <img src={aw7} height="100%" width="100%" />
        </div>
        <div className="certmod">
          <img src={aw8} height="100%" width="100%" />
        </div>
        <div className="certmod">
          <img src={aw9} height="100%" width="100%" />
        </div>
      </div>
    </div>
  );
}

export default Certification;
