import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import './pokedex.css';

const Pokedex = () => {
    const { pokemon } = useContext(GlobalContext);
    const [h0, setH0] = useState("");
    const [h1, setH1] = useState("");
    const [t0, setT0] = useState("");
    const [t1, setT1] = useState("");

    const pokemonList = [];

    if (pokemon) {
        pokemon.forEach((pokemons, index) => {
            pokemonList.push(
                <div key={pokemons.name}>
                    <div className="card">
                        <div className="imagem">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index +1 }.svg`} alt={`${pokemons.name}`} />
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