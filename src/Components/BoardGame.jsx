import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function BoardGame(props) {
  let [gamerCard, setGamerCard] = useState(0);
  let [computerCard, setComputerCard] = useState(0);
  let [link, setLink] = useState("/game");

  return (
    <div id="game">
      <div id="board">
        {" "}
        <h1>Computer</h1>
        <h2>Computer score: {props.computer.victorys}</h2>
        <div className="card">
          <div>{computerCard}</div>
        </div>
        <div className="card">
          <div>{gamerCard}</div>
        </div>
        <h2>Your score: {props.gamer.victorys}</h2>
        <h1>You</h1>{" "}
        <Link
          id="next"
          className="links"
          to={link}
          onClick={() => {
            setGamerCard(props.gamer.gamerCards.pop());
            setComputerCard(props.computer.computerCards.pop());
            if (gamerCard > computerCard) {
              props.gamer.victorys++;
              props.computer.losses++;
            } else if (computerCard > gamerCard) {
              props.computer.victorys++;
              props.gamer.losses++;
            }
            if (props.gamer.gamerCards.length === 0) {
              setLink("/end-game");
            }
          }}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
