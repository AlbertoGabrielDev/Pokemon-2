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
    const [types, setTypes] = useState("https://pokeapi.co/api/v2/type");
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(false);
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();


    useEffect(() => {
        const getPokemonList = async () => {
            try {
                const response = await axios.get(url,types)
                setNextUrl(response.data.next);
                setPrevUrl(response.data.previous);

                const results = response.data.results
                const pokemonData = await Promise.all(results.map(async (result) => {
                    const pokemonResponse = await axios.get(result.url, result.types);
                    return {
                        name: pokemonResponse.data.name,
                        abilities: pokemonResponse.data.abilities.map((ability) => ability.ability.name),
                        types: pokemonResponse.data.types.map((type) => type.type.name),
                        stats: pokemonResponse.data.stats.map((status)=> status.base_stat),
                        // selectTypes: pokemonResponse.data.map(()=>),
                        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonResponse.data.id}.svg`,
                    }
                }))
                setPokemon(pokemonData);
            } catch (error) {
                console.log(error);
            }
        }
        getPokemonList();
    }, [url])

    const goToNextPage = () => {
        setUrl(nextUrl);
    };

    const goToPrevPage = () => {
        setUrl(prevUrl);
    };

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
                prevUrl && <button onClick={goToPrevPage}>Pagina Anterior</button>
            }
            {
                nextUrl && <button onClick={goToNextPage}>Pagina Seguinte</button>
            }
            
         

        </GlobalContext.Provider>

       
    )

}