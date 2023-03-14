import React from "react";

function GuessInput({ isDisable, onAddGuess }) {
  const [input, setInput] = React.useState("");

  const handleChange = (event) => {
    setInput(event.target.value.toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onAddGuess(input);
    setInput("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={input}
        onChange={handleChange}
        disabled={isDisable}
      />
    </form>
  );
}

export default GuessInput;
