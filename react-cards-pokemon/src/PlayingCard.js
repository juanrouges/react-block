import React from 'react';
import backOfCard from './back.png';
import useFlip from './hooks/useFlip';
import './PlayingCard.css';

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [state, flipState] = useFlip(true);

  return (
    <img
      src={state ? front : back}
      alt="playing card"
      onClick={flipState}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
