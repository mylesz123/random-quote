import React, {useState} from 'react';
import '../css/App.css';

import Quote from '../Components/Quote';
import {quotes} from '../data/quotes';
import {colors} from '../data/colors';

let randomize;

export default function App() {
  let [shuffle, setShuffle] = useState(0);
  randomize = (array) => Math.floor(Math.random() * array.length);
  const newColor = colors[randomize(colors)];

  const shuffleQuotes = () => {
    setShuffle(shuffle = randomize(quotes));
    document.body.style.backgroundColor = newColor;
  }

  return (
    <div className="container">
      <Quote 
        key={quotes[shuffle]}
        {...quotes[shuffle]}
      />
      <button id="loadQuote" 
        onClick={shuffleQuotes}
        style={{
          background: newColor
        }}
      >
        Show another quote
      </button>
    </div>
  );
}
