import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Tipos from "../componets/Selects/Tipos";
import api from "../serve/api";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [typesUrl, setTypesUrl] = useState(
        "https://pokeapi.co/api/v2/type?limit=100"
    );
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(false);
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState("");

    useEffect(() => {
        const getPokemonList = async () => {
            try {
                const response = await axios.get(url);
                setNextUrl(response.data.next);
                setPrevUrl(response.data.previous);

                const results = response.data.results;
                const pokemonData = await Promise.all(
                    results.map(async (result) => {
                        const pokemonResponse = await axios.get(result.url);
                        return {
                            id: pokemonResponse.data.id,
                            name: pokemonResponse.data.name,
                            abilities: pokemonResponse.data.abilities.map(
                                (ability) => ability.ability.name
                            ),
                            types: pokemonResponse.data.types.map((type) => type.type.name),
                            stats: pokemonResponse.data.stats.map(
                                (status) => status.base_stat
                            ),
                            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonResponse.data.id}.svg`,
                        };
                    })
                );
                setPokemon(pokemonData);
            } catch (error) {
                console.log(error);
                setError(true);
            }
        };
        getPokemonList();
    }, [url]);

    useEffect(() => {
        const getTypesList = async () => {
            try {
                const response = await axios.get(typesUrl);
                const results = response.data.results;
                const typesData = results.map((result) => {
                    return {
                        name: result.name,
                        url: result.url,
                    };
                });
                setTypes(typesData);
            } catch (error) {
                console.log(error);
                setError(true);
            }
        };
        getTypesList();
    }, [typesUrl]);

    const goToNextPage = () => {
        setUrl(nextUrl);
    };

    const goToPrevPage = () => {
        setUrl(prevUrl);
    };

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    };

    return (
        <GlobalContext.Provider
            value={{
                pokemon,
                error,
                setError,
                setPokemon,
                types,
                selectedType,
                handleTypeChange,
            }}
        >
            {children}
            {prevUrl && <button onClick={goToPrevPage}>Previous</button>}
            {nextUrl && <button onClick={goToNextPage}>Next</button>}
            <Tipos />
        </GlobalContext.Provider>
    );
};