import axios from "axios";
import {
    createContext,
    useEffect,
    useState
} from "react"
import api from "../serve/api";

export const GlobalContext = createContext();

export const GlobalProvaider = ({
    children
}) => {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getPokemonList = async () => {
            try {
                const response = await axios.get(url)
                const results = response.data.results
                const pokemonData = await Promise.all(results.map(async (result) => {
                    const pokemonResponse = await axios.get(result.url);
                    return {
                        name: pokemonResponse.data.name,
                        abilities: pokemonResponse.data.abilities.map((ability) => ability.ability.name),
                        types: pokemonResponse.data.types.map((type) => type.type.name),
                    }
                }))
                setPokemon(pokemonData);
            } catch (error) {
                console.log(error);
            }
        }
        getPokemonList();
    }, [])



    // const getPokemon = async () => {
    //     const result = await axios.get(url)
    //     setPokemon(result.data.results);
    // }
    // console.log(pokemon)


    return ( <GlobalContext.Provider value = {
            {
                pokemon,
                error,
                setError,
                setPokemon
                
            }
        } > { children} </GlobalContext.Provider>


    )

}