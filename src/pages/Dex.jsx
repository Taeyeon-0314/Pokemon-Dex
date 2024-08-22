import { useState } from "react";
import { styled } from "styled-components";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import Dashboard from "../components/Dashboard";

const StDexMain = styled.main`
  background-color: #ffc6c6d4;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 0;
  display: flex;
  min-width: 320px;
  min-height: 100vh;
`;

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert("최대 6개의 포켓몬만 선택할 수 있습니다.");
      return;
    }
    if (!selectedPokemon.some((p) => p.id === pokemon.id)) {
      setSelectedPokemon((prevSelected) => [...prevSelected, pokemon]);
    }
  };

  const removePokemon = (pokemon) => {
    setSelectedPokemon((prevSelected) =>
      prevSelected.filter((p) => p.id !== pokemon.id)
    );
  };

  return (
    <StDexMain>
      <Dashboard
        selectedPokemon={selectedPokemon}
        onRemovePokemon={removePokemon}
      />
      <PokemonList
        pokemonList={MOCK_DATA}
        onAddPokemon={addPokemon}
        selectedPokemon={selectedPokemon}
      />
    </StDexMain>
  );
}

export default Dex;
