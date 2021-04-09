import React from "react";
import "./pry.css";
import { motion } from "framer-motion";
import { Button } from "antd";
import pics from "../img/mob.png";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

import { AppContext } from "../../../GlobalAuth/GlobalAuth"
import { app } from "../../../Peter/firebase"
import course1 from "../img/course1.png"
import course2 from "../img/course2.png"
import course3 from "../img/course3.png"
import course4 from "../img/course4.png"
import course5 from "../img/course5.png"
import course6 from "../img/course6.png"

const courseSelection = app.firestore().collection("studentreg");

function PrimaryPage() {
  const hist = useHistory();
  // const { current } = React.useContext()

  const pr4 = async () => {
    const addcourse = await app.auth().currentUser;
    if (addcourse) {
      await courseSelection.doc(addcourse.uid).collection("pr4").doc().set({
        sub1: {
          title: "Scratch",
          Image: "https://firebasestorage.googleapis.com/v0/b/little-coders.appspot.com/o/167733540_10216246426393257_1525750981305819834_n.jpg?alt=media&token=3980bd51-d528-40bb-b70c-8565738e1ae3",
          desc: "jhlsgsyukdgvulizdfhd;fhdv;hvjkdvbjlvbzvljvb;jvg;bvjc;gjkbvc;x jb xcl jnbcl gjcnbcjhlbc hlc blxch bvxclbcl hcbjlxc jbccjkb ;jk b b;bjkdv;j kbcv;jcjbvcbjc;cjbljcx bjcx b;c j;jij"
        },
        sub2: {
          title: "App Inventor",
          Image: "https://firebasestorage.googleapis.com/v0/b/little-coders.appspot.com/o/home-space-cadet.png?alt=media&token=7ab58403-c779-4bb0-86e6-c0719fc443bc",
          desc: "jhlsgsyukdgvulizdfhd;fhdv;hvjkdvbjlvbzvljvb;jvg;bvjc;gjkbvc;x jb xcl jnbcl gjcnbcjhlbc hlc blxch bvxclbcl hcbjlxc jbccjkb ;jk b b;bjkdv;j kbcv;jcjbvcbjc;cjbljcx bjcx b;c j;jij"
        },
        sub3: {
          title: " Intoduction To Python",
          Image: "https://firebasestorage.googleapis.com/v0/b/little-coders.appspot.com/o/python-2.png?alt=media&token=26b32bed-aa4b-4263-8f85-6738d21ffba1",
          desc: "jhlsgsyukdgvulizdfhd;fhdv;hvjkdvbjlvbzvljvb;jvg;bvjc;gjkbvc;x jb xcl jnbcl gjcnbcjhlbc hlc blxch bvxclbcl hcbjlxc jbccjkb ;jk b b;bjkdv;j kbcv;jcjbvcbjc;cjbljcx bjcx b;c j;jij"
        }
      })

    }
    hist.push("/dasboard")
  }

  const pr5 = async () => {
    const addcourse = await app.auth().currentUser;
    if (addcourse) {
      await courseSelection.doc(addcourse.uid).collection("pr5").doc().set({
        sub1: {
          title: " Intoduction To Python",
          Image: "https://firebasestorage.googleapis.com/v0/b/little-coders.appspot.com/o/python-2.png?alt=media&token=26b32bed-aa4b-4263-8f85-6738d21ffba1",
          desc: "After completing a tutorial, kids apply the concepts they've learned and experiment with what they've built."
        },
        sub2: {
          title: " Build Box",
          Image: "https://firebasestorage.googleapis.com/v0/b/little-coders.appspot.com/o/7.png?alt=media&token=ebb5a94a-0568-47f4-a0dd-087a39edfe1c",
          desc: "After completing a tutorial, kids apply the concepts they've learned and experiment with what they've built."
        },
        sub3: {
          title: "Kodu",
          Image: "https://firebasestorage.googleapis.com/v0/b/little-coders.appspot.com/o/8.png?alt=media&token=3e93a8ef-0f50-496c-ad8a-64edb2a0c347",
          desc: "After completing a tutorial, kids apply the concepts they've learned and experiment with what they've built."
        }
      })

    }
    hist.push("/dasboard")
  }

  const pr6 = async () => {
    const addcourse = await app.auth().currentUser;
    if (addcourse) {
      await courseSelection.doc(addcourse.uid).collection("pr6").doc().set({
        sub1: {
          title: " Intoduction To Python",
          Image: "https://firebasestorage.googleapis.com/v0/b/little-coders.appspot.com/o/python-2.png?alt=media&token=26b32bed-aa4b-4263-8f85-6738d21ffba1",
          desc: "After completing a tutorial, kids apply the concepts they've learned and experiment with what they've built."
        },
        sub2: {
          title: "Build Box",
          Image: "https://firebasestorage.googleapis.com/v0/b/little-coders.appspot.com/o/1.jpg?alt=media&token=68e3c5f7-da34-47a4-b9f4-1c32ebaf14e0",
          desc: "After completing a tutorial, kids apply the concepts they've learned and experiment with what they've built."
        },
        sub3: {
          title: "JavaScript",
          Image: "https://firebasestorage.googleapis.com/v0/b/little-coders.appspot.com/o/1.jpg?alt=media&token=68e3c5f7-da34-47a4-b9f4-1c32ebaf14e0",
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

                onClick={pr4}
              >
                PRIMARY 4
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
                onClick={pr5}
              >
                PRIMARY 5
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
                onClick={pr6}
              >
                PRIMARY 6
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

export default PrimaryPage;
