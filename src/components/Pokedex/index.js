import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { useContext } from "react";
import Spinner from "react-bootstrap/Spinner";
import { DataContext } from "../../hooks/useDataContext";
import { filterData, sortCards } from "../../utils";
import Card from "../Card";
import Sort from "../Sort";
import "./Pokedex.styles.css";

const Pokedex = ({ searchValue }) => {
  const pokemons = useContext(DataContext);
  const [pokemonList, setPokemonList] = useState(pokemons);

  useEffect(() => {
    if (searchValue) {
      const filteredData = filterData(pokemons, searchValue);
      return setPokemonList(filteredData);
    }
    if (pokemons.length) {
      setPokemonList(pokemons);
    }
  }, [pokemons, searchValue]);

  const handleSortCards = useCallback(
    (sortBy, order) => {
      if (pokemonList.length) {
        const sortedCards = sortCards(pokemonList, sortBy, order);
        setPokemonList(() => [...sortedCards]);
      }
    },
    [pokemonList]
  );

  return (
    <div className="container wrapper">
      <Sort sortCards={handleSortCards} />
      <div className="cards-container">
        {pokemonList.length ? (
          pokemonList.map((pokemon) => <Card key={pokemon.id} data={pokemon} />)
        ) : (
          <Spinner animation="border" />
        )}
      </div>
    </div>
  );
};

export default Pokedex;
