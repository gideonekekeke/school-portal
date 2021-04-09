import React from "react";
import "./Sele.css";
import { motion } from "framer-motion";
import { Button } from "antd";
import pics from "../img/mob.png";
import { RightOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

function SelectCourse() {
  const hist = useHistory();
  return (
    <>
      <motion.div
        className="backdrop2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        // className="thin1"
      >
        <div className="backdrop_content2">
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              margin: "20px",
              // justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <h4>Start your Journey</h4>
            <div className="pre">
              Please choose your preffered course your want to study{" "}
            </div>
            <br />

            <div
              style={{
                display: "flex",
                width: "60%",
                alignItems: "center",
              }}
            >
              <Button
                onClick={() => {
                  hist.push("/pry");
                }}
                style={{ width: "300px", height: "40px", borderRadius: "10px" }}
              >
                BASIC
              </Button>
              <div style={{ marginLeft: "10px", color: "silver" }}>
                (primary)
              </div>
            </div>
            <br />

            <div
              style={{
                display: "flex",
                width: "80%",
                alignItems: "center",
              }}
            >
              <Button
                onClick={() => {
                  hist.push("/jun");
                }}
                style={{ width: "200px", height: "40px", borderRadius: "10px" }}
              >
                INTERMEDIATE
              </Button>
              <div style={{ marginLeft: "10px", color: "silver" }}>
                (Junior sec.)
              </div>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                width: "80%",
                alignItems: "center",
              }}
            >
              <Button
                onClick={() => {
                  hist.push("/sen");
                }}
                style={{ width: "200px", height: "40px", borderRadius: "10px" }}
              >
                ADVANCED
              </Button>
              <div style={{ marginLeft: "10px", color: "silver" }}>
                (Senior sec.)
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default SelectCourse;
