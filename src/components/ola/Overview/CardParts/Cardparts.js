import React from "react";
import "./Cardpart.css";
import roadmap from "../../Images/roadmap.png";
import inter from "../../Images/interactive.png";
import multi from "../../Images/imglay.png";

function Cardparts() {
  return (
    <div>
      <div className="introText">
        Learn to Code Faster and Easier with Tynker
      </div>
      <div className="introAd">
        Individualized learning with built-in tutorials and hands-on projects{" "}
      </div>
      <div className="CardContainer">
        <div className="CardContentA">
          <div className="CardImg">
            <img src={roadmap} height="100%" width="100%" />
          </div>
          <div className="CardText">
            <div className="Topics">Comprehensive Learning Path </div>
            <div className="introTopics">
              Fun adventures, game-like lessons and interest-based activities
              motivate kids to continue learning.{" "}
            </div>
            <div className="listed">
              <div>600+ hours of content </div>
              <div>40+ story-based courses</div>
              <div>3,700+ activities</div>
              <div>Engaging coding puzzles & challenges </div>
              <div>Minecraft, game design, art & music</div>
              <div>Robotics, Java, web design & Python</div>
            </div>
          </div>
        </div>
      </div>
      <div className="CardContainer">
        <div className="CardContentB">
          <div className="CardText">
            <div className="Topics">Guided Interactive Learning </div>
            <div className="introTopics">
              Learn independently with a guided, hands-on approach that
              individualizes the learning experience from block coding to Python
              and JavaScript. Easy to track their progress.{" "}
            </div>
            <div className="listed">
              <div>Built-in tutorials </div>
              <div>How-to videos</div>
              <div>Interactive explanations</div>
              <div>Mini-games, guided progress </div>
              <div>Free play mode </div>
              <div>Parent dashboard </div>
            </div>
          </div>
          <div className="CardImg">
            <img src={inter} height="100%" width="100%" />
          </div>
        </div>
      </div>
      <div className="CardContainer">
        <div className="CardContentC">
          <div className="CardImg">
            <img src={multi} height="100%" width="100%" />
          </div>
          <div className="CardText">
            <div className="Topics">Powerful Creativity Tools </div>
            <div className="introTopics">
              If kids can imagine it, they can build it with code using our
              creativity suite tools{" "}
            </div>
            <div className="listed">
              <div>Tynker Workshop </div>
              <div>Drawing & animation tools</div>
              <div>3D modeling for Minecraft</div>
              <div>Code Editor for Python & JS </div>
              <div>Jupyter-style notebooks </div>
              <div>Physics engine</div>
              <div>Rich media gallery</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardparts;
