import React from 'react';

import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [status, setStatus] = React.useState("running");

  const [guesses, setGuesses] = React.useState([]);

  const handleAddGuess = (value) => {
    const nextGuesses = [...guesses, value];
    setGuesses(nextGuesses);

    if (value === answer) {
      setStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
  };

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput
        isDisable={status !== "running"}
        onAddGuess={handleAddGuess}
      />
      {status === "won" && <WonBanner numOfGueses={guesses.length} />}
      {status === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
