import { styled } from "styled-components";
import PokemonCard from "./PokemonCard";

const ListContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(6, minmax(150px, 1fr));
  gap: 20px;
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(5, minmax(120px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 10px;
  }
`;

const PokemonCardStyled = styled(PokemonCard)`
  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const PokemonList = ({ pokemonList, onAddPokemon, selectedPokemon = [] }) => {
  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCardStyled
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={() => onAddPokemon(pokemon)}
          isSelected={selectedPokemon.some((p) => p.id === pokemon.id)}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
