import React from "react";
import typeColor from "../resources/TypeColor"
import styled from 'styled-components'

//Oppgave 3:
// I resources så er det en fil som heter TypeColor, bruk denne for og sette farger på hver type i pokemonCard
//Hint: Importer typecolor og bruk inline style

const Type = styled.div`
  color:white;
  background-color:${props => props.backgroundColor};
`

const PokemonCard = (props) => {
  const pokemonInfo = props;
  console.log(pokemonInfo)
  return (
    <div
      className="pokeWrapper"
      onClick={() => {
        props.setPokemonSelected({ ...props });
      }}
    >
      <img
        className="pokeImg"
        alt="pokemon_sprite"
        src={pokemonInfo.sprites.front_default}
      />
      <h2 className="pokemonName">{pokemonInfo.name}</h2>
      <div className="infoContainer">
        {pokemonInfo.types.map((type, i) => (
          <Type className="pokemonType" key={i} backgroundColor={typeColor[type.type.name.toLowerCase()]}>
            {type.type.name}
          </Type>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
