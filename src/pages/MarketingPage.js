import React from 'react';
import '../styles/styles.css';
import Poster from "../pics/poster.png";

function MarketingPage(props) {
  return (
    <div className="poster-container">
      <img src={Poster}></img>
    </div>
  )
}

export default MarketingPage;
