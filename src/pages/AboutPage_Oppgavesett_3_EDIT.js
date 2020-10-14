import React, {useState} from "react";
import Magikarp from "../resources/flopping.jpg";
import "../styles/aboutpagestyles.css";
import styled from 'styled-components'

const Badge = styled.a`
  transition: 0.2s;
  :hover {
    transform: scale(1.2) rotate(10deg);
  }
`

const BadgeImage = styled.img``

const AboutPage = () => {
  var mysteryHeaders = [
    "VmlzaW9u",
    "TWFuYWdlbWVudA==",
    "QXdhcmRzIGFuZCBhY2hpZXZlbWVudHM=",
    "T3VyIGNvbnN1bHRhbnRz",
  ];

  // Oppgave 1: Noe rart har skjedd med overskriftene på denne siden. Finn ut hva som er galt og
  //            skriv koden som gjør at correctHeaders blir en dekodet liste med riktige overskrifter.
  var correctHeaders = mysteryHeaders.map(atob);

  const badgeImageUrls = [
    "https://vignette.wikia.nocookie.net/pokemon/images/2/24/Boulderbadge.png/revision/latest/scale-to-width-down/50?cb=20100418182312",
    "https://vignette.wikia.nocookie.net/pokemon/images/4/4d/Cascadebadge.png/revision/latest?cb=20140907085215",
    "https://vignette.wikia.nocookie.net/pokemon/images/a/a8/Thunderbadge.png/revision/latest?cb=20100418182457",
    "https://vignette.wikia.nocookie.net/pokemon/images/b/b5/Rainbow_Badge.png/revision/latest?cb=20141009005938",
    "https://vignette.wikia.nocookie.net/pokemon/images/6/64/Soulbadge.png/revision/latest?cb=20100418182548",
    "https://vignette.wikia.nocookie.net/pokemon/images/1/1c/Marshbadge.png/revision/latest/scale-to-width-down/49?cb=20100418182532",
    "https://vignette.wikia.nocookie.net/pokemon/images/d/d9/Volcanobadge.png/revision/latest?cb=20081229171449",
    "https://vignette.wikia.nocookie.net/pokemon/images/c/cc/Earthbadge.png/revision/latest/scale-to-width-down/50?cb=20101029071826",
  ];

  // Oppgave 2: Legg til en css-animasjon som utløses av at man holder musepekeren over hver av badgene.
  // Oppgave 3: Gjør slik at man blir viderekoblet til siden https://pokemon.fandom.com/wiki/Gym_Badges
  //            hvis man trykker på en badge.
  var badgeimages = badgeImageUrls.map((url) => {
    return (
      <Badge href='https://pokemon.fandom.com/wiki/Gym_Badges' key={url}>
        <BadgeImage src={url} alt="new" className="badge-image" />
      </Badge>
    );
  });

  // Oppgave 4: For hver person i teamet deres:
  //            Legg til navn, rolle i teamet og en url/filsti til et bilde av personen
  //            som json-objekter i listen "consultants"
  var consultants = [
    {
      name: "Hanne Ødegård",
      position: "Developer",
      imgUrl:
        "https://avatars0.githubusercontent.com/u/44879629?s=460&u=338eb4a5f92af34e0f61d7e5f60c27a04c43ff28&v=4",
    },
    {
      name: "Chris Johnson",
      position: "Tester",
      imgUrl:
        "https://scontent.fosl3-1.fna.fbcdn.net/v/t1.0-9/72314962_2383764858337970_5515805625264635904_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=h9Mp2AGRQWMAX90-rsL&_nc_ht=scontent.fosl3-1.fna&oh=0c5ce29b056a8ca66c0c73d481b872db&oe=5FAAFBD3",
    },
    {
      name: "Eirik Midtun",
      position: "Project leader",
      imgUrl:
        "https://www.kindpng.com/picc/m/253-2533471_brock-pokemon-png-transparent-png.png",
    },
    {
      name: "Niklas Molnes Hole",
      position: "Project leader",
      imgUrl:
        "https://scontent.fosl3-1.fna.fbcdn.net/v/t1.15752-9/117159019_302190144169984_8996085123963486804_n.jpg?_nc_cat=108&_nc_sid=ae9488&_nc_ohc=b1kRoL5h0vIAX9ikVYp&_nc_ht=scontent.fosl3-1.fna&oh=b3605fa5d35126082a4e1c7ffc895016&oe=5FABE2F6",
    },
  ];

  // Oppgave 5: Lag en funksjon som returnerer et ansatt-kort for hvert teammedlem i listen "consultants"
  // Hint: Se på kortene som allerede er laget for ledelsen i Pokémon4Cash.
  // Oppgave 6: Style baksiden av ansattkortene slik dere selv mener de bør være stylet
  let consultantCards = consultants.map(({name, position, imgUrl}) => {
    return (
      <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={imgUrl}
                alt="new"
                className="flip-card-image"
              />
            </div>
            <div className="flip-card-back" >
              <h1>{name}</h1>
              <h2>{position}</h2>
            </div>
          </div>
        </div>
    );
  });
   // = *Funksjon som returnerer et ansattkort for hvert objekt i consultants*

  const [showMagik, setShowMagik] = useState(false);

  return (
    <div
      style={{ fontFamily: "sans-serif", maxWidth: "960px", margin: "auto" }}
    >
      <h2 className="subheader">{correctHeaders[0]}</h2>
      <p className="visionQuote">
        Pokémon4Cash aims to offer cute, ready-to-fight and deadly pets for
        everyone!
      </p>
      <h2 className="subheader">{correctHeaders[1]}</h2>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://www.pngkit.com/png/detail/62-623222_pokemon-png-pack-ash-ketchum.png"
                alt="new"
                className="flip-card-image"
              />
            </div>
            <div className="flip-card-back">
              <h1>Ash</h1>
              <h2>CEO</h2>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://www.clipartkey.com/mpngs/m/8-88479_pokemon-misty-png.png"
                alt="new"
                className="flip-card-image"
              />
            </div>
            <div className="flip-card-back">
              <h1>Misty</h1>
              <h2>IT-Director</h2>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://www.kindpng.com/picc/m/253-2533471_brock-pokemon-png-transparent-png.png"
                alt="new"
                className="flip-card-image"
              />
            </div>
            <div className="flip-card-back" onClick={() => {setShowMagik(!showMagik)}}>
            {!showMagik ?
              <React.Fragment>
                <h1>Brock</h1>
                <h2>Trainer</h2>
              </React.Fragment>
              :
              <React.Fragment>
                <img
                src={Magikarp}
                style={{ objectFit: "contain" }}
                alt="Fish in a barrel" 
                title="The secret word is: UGFsbGV0IFRvd24="
                />
              </React.Fragment>
              }
            </div>
          </div>
        </div>
      </div>
      <h2 className="subheader">{correctHeaders[2]}</h2>
      <div className="badge-container">{badgeimages}</div>
      <h2 className="subheader">{correctHeaders[3]}</h2>
      <div className="flip-card-container">{consultantCards}</div>
    </div>
  );
};

export default AboutPage;
