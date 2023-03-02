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
                
                {
                pokemon && pokemon.map((pokemons) => {
                    return (
                        <div key={pokemons.name}>
                            <div className="card">
                                <div className="imagem">
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={`${pokemon.name}`} />
                                </div>
                                <span className="nome">{pokemons.name}</span>

                                <p id='habilidade-0'>{pokemons.abilities.join(", ")}</p>
                                <p id="tipo0">{pokemons.types.join(", ")}</p>
                                
                                    {
                                            pokemons.abilities.forEach((poke, index) => {
                                                if (index == 0) {
                                                    h0 = poke.ability.name;

                                                } if (index == 1) {
                                                    h1 = poke.ability.name
                                                }

                                            })
                                        }
                            </div>
                            
                        </div>
                        
                    )
                })
                
                }
               

            </div>
        </>
    );
}


export default Pokedex;