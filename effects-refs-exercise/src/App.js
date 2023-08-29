import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const API_URL = "https://deckofcardsapi.com/api/deck";

  const [deck, setDeck] = useState("");
  const [cards, setCards] = useState([]);

  const rotateRand = () => Math.floor(Math.random() * 100) + 1;

  async function drawCard() {
    try {
      const { data } = await axios.get(`${API_URL}/${deck}/draw`);
      data.cards[0].angle = rotateRand();
      setCards((cards) => [...cards, ...data.cards]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function getDeck() {
      try {
        const { data } = await axios.get(`${API_URL}/new`);
        setDeck(data.deck_id);
      } catch (err) {
        console.log(err);
      }
    }
    getDeck();
  }, []);

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  return (
    <div className="App">
      <h1>Effects and Refs</h1>
      <div>
        <button onClick={drawCard}>Give me a card</button>
        <div className="Deck">
          {!cards
            ? "Draw a card!"
            : cards.map((card) => (
                <div
                  className="Card"
                  key={card.code}
                  style={{ transform: `rotate(${card.angle}deg)` }}
                >
                  <img src={card.image} alt={card.suit} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default App;
