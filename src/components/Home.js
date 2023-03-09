import React from "react";
import "./Home.css";
import Arrow from "./Arrow";

export default function Home() {
  return (
    <div>
      <div className="container">
        <div>
          <h1 style={{ fontSize: 45, color: "white" }}>
            C A L E B <br />
            <span style={{ display: "block", textAlign: "center" }}>H A N</span>
          </h1>
        </div>
        <div className="image-container">
          <img
            src={require("../assets/ProjectSF_Avatar.jpeg")}
            className="avatar"
          />
          <Arrow />
        </div>
      </div>
    </div>
  );
}
