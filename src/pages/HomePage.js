import React, { useEffect, useState } from 'react';
import { ImageTextComp } from '../components/ImageTextComponent';
import pokeimg from '../resources/pokemon.png';
import flop from '../resources/meowmagi.png';
import '../styles/styles.css';

function HomePage(props) {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-10-14 21:00`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, i) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={i}>
        {timeLeft[interval]} {interval}{' '}
      </span>,
    );
  });

  return (
    <div className="App">
     

      <h1>Hello Shopper!</h1>
      <div>
        <p>
          Welcome to our page! Here you can check out Pokémon, buy your next pet
          and read more about our business.
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <ImageTextComp
          heading="Meowth recommends Magicarp!"
          text="Go ahead, buy one now!"
          img={flop}
          link="#"
          linkOnClick={() => {
            props.setValue(1);
          }}
        ></ImageTextComp>
        <ImageTextComp
          heading="GMO experiments ongoing"
          text="Ever dreamed of owning a Pikachu-Snorlax hybrid? Now's your chance!"
          img={pokeimg}
          link="https://pokemon.alexonsager.net/"
          linkOnClick={() => {}}
        ></ImageTextComp>
      </div>
    </div>
  );
}

export default HomePage;
