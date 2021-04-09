import React from "react";
import "./pry.css";
import { motion } from "framer-motion";
import { Button } from "antd";
import pics from "../img/mob.png";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { app } from "../../../Peter/firebase"

const courseSelection = app.firestore().collection("studentreg");

function JuniorPage() {
  const hist = useHistory();

  const jss1 = async () => {
    const addcourse = await app.auth().currentUser;
    if (addcourse) {
      await courseSelection.doc(addcourse.uid).collection("js1").doc().set({
        sub1: {
          title: " Intoduction To Python",
          Image: "https://firebasestorage.googleapis.com/v0/b/little-coders.appspot.com/o/python-2.png?alt=media&token=26b32bed-aa4b-4263-8f85-6738d21ffba1",
          desc: "After completing a tutorial, kids apply the concepts they've learned and experiment with what they've built."
        },
        sub2: {
          title: "Robotics",
          Image: "https://firebasestorage.googleapis.com/v0/b/little-coders.appspot.com/o/pexels-alex-knight-2599244.jpg?alt=media&token=e9733c8a-ac68-4343-be7f-0a962a68c112",
          desc: "After completing a tutorial, kids apply the concepts they've learned and experiment with what they've built."
        },
        sub3: {
          title: "JavaScript",
          Image: "https://firebasestorage.googleapis.com/v0/b/little-coders.appspot.com/o/pexels-markus-spiske-1089440.jpg?alt=media&token=df0bc189-a034-43f5-8589-8d887887182d",
          desc: "After completing a tutorial, kids apply the concepts they've learned and experiment with what they've built."
        },
      })

    }
    hist.push("/dasboard")
  }

  const jss2 = async () => {
    const addcourse = await app.auth().currentUser;
    if (addcourse) {
      await courseSelection.doc(addcourse.uid).collection("js2").doc().set({
        sub1: {
          title: " Intoduction To Python",
          Image: "https://firebasestorage.googleapis.com/v0/b/little-coders.appspot.com/o/python-2.png?alt=media&token=26b32bed-aa4b-4263-8f85-6738d21ffba1",
          desc: "After completing a tutorial, kids apply the concepts they've learned and experiment with what they've built."
        },
        sub2: {
          title: "Robotics",
          Image: "https://firebasestorage.googleapis.com/v0/b/little-coders.appspot.com/o/home-microbit-block.png?alt=media&token=8ceca8a9-147f-47d0-94fc-8785dff8794c",
          desc: "After completing a tutorial, kids apply the concepts they've learned and experiment with what they've built."
        },
        sub3: {
          title: "Nodejs",
          Image: "https://firebasestorage.googleapis.com/v0/b/little-coders.appspot.com/o/pexels-negative-space-169573.jpg?alt=media&token=aaa3adf0-4e43-459c-b5b7-3d3d3a13d4fc",
          desc: "After completing a tutorial, kids apply the concepts they've learned and experiment with what they've built."
        },
      })

    }
    hist.push("/dasboard")
  }

  const jss3 = async () => {
    const addcourse = await app.auth().currentUser;
    if (addcourse) {
      await courseSelection.doc(addcourse.uid).collection("js3").doc().set({
        sub1: {
          title: " Intoduction To Python",
          Image: "https://firebasestorage.googleapis.com/v0/b/little-coders.appspot.com/o/python-2.png?alt=media&token=26b32bed-aa4b-4263-8f85-6738d21ffba1",
          desc: "After completing a tutorial, kids apply the concepts they've learned and experiment with what they've built."
        },
        sub2: {
          title: "MindCraft",
          Image: "https://firebasestorage.googleapis.com/v0/b/little-coders.appspot.com/o/home-wedo-coding.png?alt=media&token=faf06071-c131-49cc-ba00-28dc6d21b413",
          desc: "After completing a tutorial, kids apply the concepts they've learned and experiment with what they've built."
        },
        sub3: {
          title: "Robotics",
          Image: "https://firebasestorage.googleapis.com/v0/b/little-coders.appspot.com/o/pexels-negative-space-169573.jpg?alt=media&token=aaa3adf0-4e43-459c-b5b7-3d3d3a13d4fc",
          desc: "After completing a tutorial, kids apply the concepts they've learned and experiment with what they've built."

        },
      })

    }
    hist.push("/dasboard")
  }
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
            <h4>Final Step</h4>
            <div style={{ width: "90%" }} className="pre1">
              Please choose your preffered class
            </div>
            <br />

            <div
              style={{
                display: "flex",
                width: "70%",
                alignItems: "center",
              }}
            >
              <Button
                style={{ width: "400px", height: "40px", borderRadius: "10px" }}
                onClick={jss1}
              >
                JSS 1
              </Button>
            </div>
            <br />

            <div
              style={{
                display: "flex",
                width: "70%",
                alignItems: "center",
              }}
            >
              <Button
                style={{ width: "400px", height: "40px", borderRadius: "10px" }}
                onClick={jss2}
              >
                JSS 2
              </Button>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                width: "70%",
                alignItems: "center",
              }}
            >
              <Button
                style={{ width: "400px", height: "40px", borderRadius: "10px" }}
                onClick={jss3}
              >
                JSS 3
              </Button>
            </div>

            <div className="my_button3">
              <LeftOutlined
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

export default JuniorPage;
