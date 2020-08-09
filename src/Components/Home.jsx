import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  let [gamerName, setGamerName] = useState("");

  return (
    <div id="home">
      <h1 id="headline">Ready for War?!</h1>
      <h2>How to play</h2>
      <p>
        The deck is divided evenly, with each player receiving 26 cards, dealt
        one at a time. <br /> The player with the higher card gets point,if the
        cards are equal none of the players gets point. <br /> The player with
        the heigher score win the game!{" "}
      </p>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => {
          setGamerName(e.target.value);
        }}
      />
      <Link
        className="links"
        to="/game"
        onClick={(e) => {
          if (gamerName === "") {
            alert("Please enter your name");
            e.preventDefault();
          } else {
            props.passGamerCards();
            props.passComputerCards();
          }
        }}
      >
        Start
      </Link>
    </div>
  );
}
