import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Pokedex = () => {
    const { pokemon,abilities } = useContext(GlobalContext);

    var h0 = "";
    var h1 = "";

    var t0 = "";
    var t1 = "";
    //console.log(pokemon.name)
    return (
        <>
            <div>
                {/* {
                    pokemon && pokemon.map((e) => {
                        return (
                            <>
                                <div key={e.name}>{e.name}</div>
                               
                            </>
                        )
                    })
                } */}

                <h1>Lista</h1>
                {
                   pokemon && pokemon.map((pokemons)=>(
                        <div key={pokemons.name}>
                            <h2>{pokemons.name}</h2>
                            <p>Habilidades: {pokemons.types.join(", ")}</p>
                        </div>
                        
                    ))
                }

            </div>
        </>
    );
}


export default Pokedex;