import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import './pokedex.css';

const Pokedex = () => {
    const { pokemon ,typesUrl, setTypes} = useContext(GlobalContext);
  
    useEffect(() => {
        async function fetchPokemon() {
          const response = await fetch(typesUrl);
          const data = await response.json();
          setTypes(data.results);
         
        }
    
        fetchPokemon();
      }, [typesUrl, setTypes]);

    const pokemonList = [];
console.log(pokemon)
    if (pokemon) {
        pokemon.forEach((pokemons) => {
            pokemonList.push(
                <div key={pokemons.name}>
                    <div className="card" key={pokemons.id}>
                        <div className="imagem">
                        <img src={pokemons.image} alt={`${pokemons.name}`} />
                        </div>
                        <span className="nome">{pokemons.name}</span>
                        {<p id='habilidade-0'>{pokemons.abilities[0]}</p>}
                        <p id='habilidade-1'>{pokemons.abilities[1]}</p>
                        <p id="tipo0">{pokemons.types[0]}</p>
                        <p id="tipo1">{pokemons.types[1]}</p>
                    </div>
                </div>
            );
        });
    }

    return (
        <div>
            {pokemonList}
        </div>
    );
}

export default Pokedex;