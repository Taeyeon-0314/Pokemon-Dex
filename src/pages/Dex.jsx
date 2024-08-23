import { styled } from "styled-components";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import Dashboard from "../components/Dashboard";
import { usePokemon } from "../context/PokemonProvider";

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
  @media (max-width: 768px) {
    padding: 15px;
    min-height: auto;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

function Dex() {
  const { selectedPokemon, addPokemon, removePokemon } = usePokemon();

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
