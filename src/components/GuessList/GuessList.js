import React from "react";

import GuessItem from "../GuessItem/GuessItem";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessList({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <GuessItem key={num} value={guesses[num]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessList;
