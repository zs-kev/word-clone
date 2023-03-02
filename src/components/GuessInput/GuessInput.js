import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(guess);

    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        disabled={gameStatus !== 'running'}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={(event) => {
          event.target.value = event.target.value.toUpperCase();
          setGuess(event.target.value);
        }}
      />
    </form>
  );
}

export default GuessInput;
