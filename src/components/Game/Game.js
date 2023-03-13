import React from 'react';

import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [status, setStatus] = React.useState(null);

  const [guesses, setGuesses] = React.useState(range(NUM_OF_GUESSES_ALLOWED));

  const handleAddGuess = (value) => {
    const filledGuesses = guesses.filter((item) => typeof item !== "number");

    if (filledGuesses.length === NUM_OF_GUESSES_ALLOWED) return;

    const newGuess = checkGuess(value, answer);
    setGuesses((prevGuesses) => {
      const newGuesses = [...prevGuesses];
      newGuesses[filledGuesses.length] = newGuess;
      return newGuesses;
    });

    const inCorrectChar = newGuess.find(
      (item) => item.status === "incorrect" || item.status === "misplaced"
    );
    if (!inCorrectChar) {
      setStatus("happy");
    } else if (
      inCorrectChar &&
      filledGuesses.length + 1 === NUM_OF_GUESSES_ALLOWED
    ) {
      setStatus("sad");
    }
  };

  const guessLength = guesses.filter((item) => typeof item !== "number").length;

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput isDisable={!!status} onAddGuess={handleAddGuess} />
      {status && (
        <div className={`banner ${status}`}>
          {status === "happy" ? (
            <p>
              <strong>Congratulations!</strong> Got it in{" "}
              <strong>{guessLength} guesses</strong>.
            </p>
          ) : (
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          )}
        </div>
      )}
    </>
  );
}

export default Game;
