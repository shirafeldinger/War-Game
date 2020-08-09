import React, { useState } from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import BoardGame from "./Components/BoardGame";
import EndGame from "./Components/EndGame";

function App() {
  const packOfCards = [
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    6,
    6,
    6,
    6,
    7,
    7,
    7,
    7,
    8,
    8,
    8,
    8,
    9,
    9,
    9,
    9,
    10,
    10,
    10,
    10,
    11,
    11,
    11,
    11,
    12,
    12,
    12,
    12,
    13,
    13,
    13,
    13,
  ];
  const [gamer, setGamer] = useState({
    fullname: "",
    victorys: 0,
    losses: 0,
    numberOfGames: 0,
    gamerCards: [],
  });

  const [computer, setComputer] = useState({
    victorys: 0,
    losses: 0,
    numberOfGames: 0,
    computerCards: [],
  });

  const shuffle = (packOfCards) => {
    for (let i = packOfCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [packOfCards[i], packOfCards[j]] = [packOfCards[j], packOfCards[i]];
    }
    return packOfCards;
  };
  shuffle(packOfCards);

  const passGamerCards = () => {
    let i = 0;
    while (i < packOfCards.length / 2) {
      gamer.gamerCards.push(packOfCards[i]);
      i++;
    }
    setGamer({ ...gamer });
  };

  const passComputerCards = () => {
    let i = packOfCards.length / 2;
    while (i < packOfCards.length) {
      computer.computerCards.push(packOfCards[i]);
      i++;
    }
    setComputer({ ...computer });
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return (
                <Home
                  passGamerCards={passGamerCards}
                  passComputerCards={passComputerCards}
                  packOfCards={packOfCards}
                />
              );
            }}
          ></Route>
          <Route
            exact
            path="/game"
            component={() => {
              return (
                <BoardGame
                  gamer={gamer}
                  computer={computer}
                  setGamer={setGamer}
                  setComputer={setComputer}
                />
              );
            }}
          ></Route>
          <Route
            exact
            path="/end-game"
            component={() => {
              return <EndGame gamer={gamer} computer={computer} />;
            }}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
