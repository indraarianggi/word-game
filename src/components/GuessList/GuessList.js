import React from "react";

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, guessIdx) => (
        <p className="guess" key={guessIdx}>
          {typeof guess !== "number" ? (
            guess.map((item, itemIdx) => (
              <span className={`cell ${item.status}`} key={itemIdx}>
                {item.letter}
              </span>
            ))
          ) : (
            <>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
            </>
          )}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
