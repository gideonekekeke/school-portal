import React from "react";
import "./new.css";
import { motion } from "framer-motion";
import { Button } from "antd";
import pics from "../img/mob.png";
import { useHistory } from "react-router";
import { RightOutlined } from "@ant-design/icons";
function Second() {
  const hist = useHistory();
  return (
    <>
      <motion.div
        className="backdrop1"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
      // className="thin1"
      >
        <div className="backdrop_content1">
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="backdrop_img1">
              <img
                src={pics}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                width: "80%",
                // background: "red",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              Learn Coding And Robotics. Build Awesome things like 3D games ,
              Websie, Web app, Mobile apps etc ...
            </div>
            <div className="my_button1">
              <RightOutlined
                onClick={() => {
                  hist.push("/course");
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Second;
