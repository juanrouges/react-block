import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const API_URL = 'https://deckofcardsapi.com/api/deck/new/';

  useEffect(() => {
    async function getDeck() {
      try {
        const { data } = await axios.get(API_URL);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    getDeck();
  }, []);

  return (
    <div className="App">
      <h1>Effects and Refs</h1>
    </div>
  );
}

export default App;
