import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guessValue, answer }) {
  const answerCheck = checkGuess(guessValue, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={
            'cell ' + (answerCheck ? answerCheck[num].status : '')
          }
        >
          {guessValue ? guessValue[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
