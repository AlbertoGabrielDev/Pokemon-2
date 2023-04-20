import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pokedex from '../Pokedex';

const SelectTipos = () => {
  const [tipos, setTipos] = useState([]);
  const [tipoSelecionado, setTipoSelecionado] = useState(null);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/type');
        setTipos(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleTipoSelecionado = async (event) => {
    const tipo = event.target.value;
    setTipoSelecionado(tipo);
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/type/${tipo}`);
      const pokemonUrls = response.data.pokemon.map((p) => p.pokemon.url);
      const pokemonData = await Promise.all(pokemonUrls.map(async (url) => {
        const response = await axios.get(url);
        return response.data;
      }));
      setPokemons(pokemonData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <label htmlFor="tipos">Selecione um tipo de Pokémon:</label>
      <select name="tipos" id="tipos" onChange={handleTipoSelecionado}>
        <option value="">Selecione um tipo</option>
        {tipos.map((tipo) => (
          <option key={tipo.name} value={tipo.name}>{tipo.name}</option>
        ))}
      </select>
      {tipoSelecionado && <Pokedex pokemons={pokemons} />}
    </div>
  );
};

export default SelectTipos;