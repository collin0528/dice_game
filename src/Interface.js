import React from "react";
import './Interface.css';
import img1 from './images/play.png';
import img2 from './images/refresh.png';
import Music from "./Music.js";
export const Interface = props => {
  return (
    <div className="usebtn">
      <img
       className="mydice"
        alt="choose"
        // onClick={props.startGame}
        // style={{ cursor: "pointer" }}
        width="10%"
        src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-random.svg"
      />
      <img
        alt="choose"
        onClick={props.startGame}
        style={{ cursor: "pointer" }}
        width="5%"
        src={img1}
      />
      <img
        alt="choose"
        style={{ cursor: "pointer" }}
        onClick={() => window.location.reload(false)}
        width="5%"
        src={img2}
      />

      <span style={{ cursor: "pointer" }} onClick={props.clearState}>
        ClearScore
      </span>
      <Music />
      <div className="table" style={{ fontSize: "30px" }}>
        Player1: {props.yourChoice} Player2: {props.AIChoice}
      </div>
      Games: {props.games}
    </div>
  );
};