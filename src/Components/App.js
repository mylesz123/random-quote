import React from 'react';
import '../css/App.css';

function App() {
  return (
    <div className="container">
      <div id="quote-box">
        <p className="quote">Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.</p>
        <p className="name">Patrick McKenzie<span className="citation">Twitter</span><span className="year">2016</span></p>
      </div>
      <button id="loadQuote" >Show another quote</button>
    </div>
  );
}

export default App;
