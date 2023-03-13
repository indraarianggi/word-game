import React from "react";

function GuessInput({ isDisable, onAddGuess }) {
  const [guess, setGuess] = React.useState("");

  const handleChange = (event) => {
    setGuess(event.target.value.toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onAddGuess(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        pattern="\w{5,5}"
        disabled={isDisable}
      />
    </form>
  );
}

export default GuessInput;
