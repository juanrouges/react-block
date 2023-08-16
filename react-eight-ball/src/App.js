import React, { useState } from 'react';
import './App.css';
import { answers } from './answers';

function App() {
  const [message, setMessage] = useState(
    'Think of a question (Click to reveal)'
  );
  const [messageColor, setMessageColor] = useState(null);
  const [randomAnswer, setRandomAnswer] = useState(
    Math.floor(Math.random() * answers.length)
  );

  function magicTouch() {
    setMessage(answers[randomAnswer].msg);
    setMessageColor(answers[randomAnswer].color);
  }

  function restartMagic() {
    setMessage('Think of a question (Click to reveal)');
    setRandomAnswer(Math.floor(Math.random() * answers.length));
    setMessageColor(null);
  }

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Magic Eight Ball</h1>
        <button
          className="Eightball"
          onClick={magicTouch}
          style={{ backgroundColor: messageColor && messageColor }}
          disabled={messageColor && true}
        >
          {message}
        </button>
        {messageColor && (
          <div className="restart">
            <button onClick={restartMagic}>Ask again</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
