import React from "react";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Arrow from "./components/Arrow";

export default function App() {
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer style={{}}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 style={{ fontSize: 75, color: "black" }}>
              C A L E B <br />
              <span style={{ display: "block", textAlign: "center" }}>
                H A N
              </span>
            </h1>
          </div>
          <div className="container">
            <div className="image-container">
              <Arrow />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          sticky={{ start: 0, end: 2 }}
        >
          <img
            src={require("./assets/ProjectSF_Avatar.jpeg")}
            className="avatar-image"
          />
        </ParallaxLayer>
        <ParallaxLayer></ParallaxLayer>
      </Parallax>
    </div>
  );
}
