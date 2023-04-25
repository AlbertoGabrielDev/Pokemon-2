import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Pokedex from "../Pokedex";

const SelectTipos = () => {
  const { types, setTypes } = useContext(GlobalContext);
  const [selectedType, setSelectedType] = useState("");

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  useEffect(() => {
    const fetchTypes = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/type");
      const data = await response.json();
      setTypes(data.results);
      //console.log(setTypes)
    };

    fetchTypes();
  }, []);

  return (
    <div>
      <select value={selectedType} onChange={handleTypeChange}>
        <option value="">Selecione um tipo de Pokémon</option>
        {types &&
          types.map((type) => (
            <option key={type.name} value={type.url}>
              {type.name}
            </option>
          ))}
      </select>
      {selectedType && <Pokedex typeUrl={selectedType} />}
    </div>
  );
};

export default SelectTipos;