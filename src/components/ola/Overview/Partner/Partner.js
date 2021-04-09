import React from "react";
import "./Partner.css";
import app from "../../Images/apple.png";
import goo from "../../Images/ggl.png";
import msc from "../../Images/msf.png";
import slv from "../../Images/slv.png";
import pbs from "../../Images/pbs.png";
import bbc from "../../Images/bbc.png";
import fcb from "../../Images/fcb.png";
import leg from "../../Images/lego.png";
import mnc from "../../Images/mc.png";
import mtl from "../../Images/mattel.png";
import hwl from "../../Images/hwl.png";
import brb from "../../Images/barbie.png";

function Partner() {
  return (
    <div>
      <div className="partnerBg">
        <div className="textTrust">
          <h2>Trusted by leading brands</h2>
        </div>
        <div className="ImgbgBox">
          <div className="partnerImg">
            <img src={app} height="100%" width="100%" />
          </div>
          <div className="partnerImg">
            <img src={goo} height="100%" width="100%" />
          </div>
          <div className="partnerImg">
            <img src={msc} height="100%" width="100%" />
          </div>
          <div className="partnerImg">
            <img src={mnc} height="100%" width="100%" />
          </div>
          <div className="partnerImg">
            <img src={fcb} height="100%" width="100%" />
          </div>
          <div className="partnerImg">
            <img src={bbc} height="100%" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
