import React, { useState, useEffect } from "react";
import Pokedex from "../Pokedex";

function Tipos() {
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [pokemonList, setPokemonList] = useState([]);
  
    useEffect(() => {
      async function fetchTypes() {
        const response = await fetch('https://pokeapi.co/api/v2/type'); //Tirar esse trecho e usar o que foi feito na linha 26
        const data = await response.json();
        setTypes(data.results);
      }
  
      fetchTypes();
    }, []);
  
    useEffect(() => {
      async function fetchPokemonList() {
        if (!selectedType) {
          return;
        }
  
        const response = await fetch(`${selectedType.url}`);
        const data = await response.json();
        setPokemonList(data.pokemon);
  
        // console.log(selectedType.url)
      }
      fetchPokemonList();
    }, [selectedType]);
  
    // var tipoPokemon = types
  
    return (
      <div>
        <h1>Pokemons por tipo</h1>
        <select onChange={e => setSelectedType(types.find(type => type.name === e.target.value))}>
          <option value="">Selecione um tipo</option>
          {types.map(type => (
            <option key={type.name} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
        {
            pokemonList.map(pokes =>(
                <Pokedex></Pokedex>
            ))
        }
      </div>
    );
  }

export default Tipos;