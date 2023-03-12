import axios from "axios";
import {
    createContext,
    useEffect,
    useState
} from "react"
import api from "../serve/api";

export const GlobalContext = createContext();

export const GlobalProvaider = ({children}) => {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(false);
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();

    console.log(nextUrl)
    useEffect(() => {
        const getPokemonList = async () => {
            try {
                const response = await axios.get(url)
                setNextUrl(response.data.next);
                setPrevUrl(response.data.prev);

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



    return (
    <GlobalContext.Provider value = {
            {
                pokemon,
                error,
                setError,
                setPokemon,
               
            }
        }>{ children}
         {
            <button onClick={() => {
                
                setUrl(nextUrl)
            }}>Pagina Seguinte</button>
        }

        </GlobalContext.Provider>

       
    )

}