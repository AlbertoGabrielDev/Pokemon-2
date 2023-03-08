import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import './pokedex.css';
const Pokedex = () => {
    const { pokemon, abilities } = useContext(GlobalContext);

    var h0 = "";
    var h1 = "";

    var t0 = "";
    var t1 = "";
    //console.log(pokemon.name)
    return (
        <>
        <div>
            {pokemon && pokemon.map((pokemons,index) => {
                return (
                    <div key={pokemons.name}>
                        <div className="card">
                            <div className="imagem">
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index +1 }.svg`} alt={`${pokemons.name}`} />
                            </div>
                            <span className="nome">{pokemons.name}</span>
                            {<p id='habilidade-0'>{pokemons.abilities[0]}</p>}
                            <p id='habilidade-1'>{pokemons.abilities[1]}</p>
                            <p id="tipo0">{pokemons.types[0]}</p>
                            <p id="tipo1">{pokemons.types[1] }</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
    );
}


export default Pokedex;