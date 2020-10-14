import React from 'react';
import '../styles/styles.css';
import Poster from "../pics/flyer.png";

function MarketingPage(props) {
  return (
    <div className="poster-container">
      <img src={Poster} alt="flyer"></img>
    </div>
  )
}

export default MarketingPage;
