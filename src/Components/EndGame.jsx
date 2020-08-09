import React from "react";
import { Link } from "react-router-dom";

export default function EndGame(props) {
  const showResult = () => {
    let result;
    if (props.gamer.victorys > props.computer.victorys) {
      result = "You Win!";
    } else {
      result = "You Lose!";
    }
    return result;
  };

  return (
    <div id="end-game">
      <h1 id="result">{showResult()}</h1>
      <div id="result-numbers">
        <div className="score">You: {props.gamer.victorys}</div>
        <div className="score"> Computer: {props.gamer.losses}</div>
      </div>
      <Link className="links" to="/">
        again?
      </Link>
    </div>
  );
}
