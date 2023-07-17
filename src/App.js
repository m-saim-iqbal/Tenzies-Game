import React from "react";
import Dice from "./components/Dice"
import dices from "./dices"
import Win from "./components/Win"
import "./index.css";

function App() {

  const [squares, setSquares] = React.useState(dices)
  const [allSame, setAllSame] = React.useState(false)

  function toggle(id) {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square
      })
    })
  }

  function randomRoll() {

    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.on === false ? { ...square, num: Math.floor(Math.random() * 6) + 1 } : square
      })
    })
  }

  const diceElements = squares.map(square => (
    <Dice
      key={square.id}
      on={square.on}
      num={square.num}
      toggle={() => toggle(square.id)}
    />
  ))

  function Reset() {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return { ...square, num: Math.floor(Math.random() * 6) + 1, on: false }
      })
    })
  }

  React.useEffect(() => {
    let isallSame = squares.reduce((accumulator, square) => {
      return accumulator === square.num ? accumulator : false;
    }, squares[0].num);
    const areAllOn = squares.every(square => square.on);
    setAllSame(isallSame && areAllOn)
  }, [squares])


  return (
    <main>
      {
        allSame ?
          <Win onClick = {() => Reset()} /> :
          <div className="main--box">
            <h1>Tenzies</h1>
            <p>Roll until all the dices are the same. Click
              each dice to freeze it at its current value
              between rolls.
            </p>
            <div className="alldices">
              {diceElements}
            </div>
            <div className="roll--button">
              <button type="button" onClick={randomRoll} className="roll">Roll</button>
            </div>
          </div>
      }
    </main>
  );
}

export default App;
