import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: fit-content;
  min-width: 180px;
  padding: 10px;
  margin: 20px auto;
  & p {
    text-align: left;
  }
  & span {
    font-weight: bold;
  }
  & p:first-child {
    text-align: center;
    text-transform: capitalize;
  }
`;

const Titulo = styled.span`
  font-size: 32px;
  font-weight: bold;
`;

function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [props.pokemon]);

  return (
    <Card>
      <p>
        <Titulo>{pokemon.name}</Titulo>
      </p>
      <p>
        <span>Weight</span>: {pokemon.weight} Kg
      </p>
      <p>
        <span>Type</span>: {pokemon.types && pokemon.types[0].type.name}
      </p>
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </Card>
  );
}

export default PokeCard;
