import React, {useState} from 'react';
import '../css/App.css';

import Quote from '../Components/Quote';
import {quotes} from '../data/quotes';

export default function App() {

  let [shuffle, setShuffle] = useState(0);

  const shuffleQuotes = () => {
    let getRandomIndex = Math.floor(Math.random() * quotes.length);
    setShuffle(shuffle = getRandomIndex);
  }

  return (
    <div className="container">
      <Quote 
        key={quotes[shuffle]}
        {...quotes[shuffle]}
      />
      <button id="loadQuote" onClick={shuffleQuotes}>Show another quote</button>
    </div>
  );
}
