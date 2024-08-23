import { styled } from "styled-components";

const DashboardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(248, 248, 248);
  margin-bottom: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const StMyPockemonH2 = styled.h2`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
  color: red;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const StPockeGroupDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StPockeGroupImgDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: rgb(255, 255, 255);
  border: 2px dashed rgb(204, 204, 204);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const StPockeImg = styled.img`
  width: 50px;
  height: 50px;
`;

const StSelectedPockmonImg = styled.img`
  width: 100px;
`;

const StSelectPockmonItem = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background-color: red;
  color: white;
  border-radius: 5px;

  &:hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
  }
`;

const StIdPTag = styled.p`
  font-size: 12px;
  color: rgb(102, 102, 102);
  padding-top: 15px;
`;

const Dashboard = ({ selectedPokemon, onRemovePokemon }) => {
  const emptySlots = 6 - selectedPokemon.length;
  const selectedPokemonWidth = selectedPokemon.length > 0;

  return (
    <DashboardContainer selectedPokemonWidth={selectedPokemonWidth}>
      <StMyPockemonH2>나만의 포켓몬</StMyPockemonH2>
      <StPockeGroupDiv>
        {selectedPokemon.map((pokemon) => (
          <StSelectPockmonItem key={pokemon.id}>
            <StSelectedPockmonImg
              src={pokemon.img_url}
              alt={pokemon.korean_name}
            />
            <p>{pokemon.korean_name}</p>
            <StIdPTag>{`No. ${pokemon.id
              .toString()
              .padStart(3, "0")}`}</StIdPTag>
            <Button type="button" onClick={() => onRemovePokemon(pokemon)}>
              삭제
            </Button>
          </StSelectPockmonItem>
        ))}
        {[...Array(emptySlots)].map((_, index) => (
          <StPockeGroupImgDiv key={index}>
            <StPockeImg src={`/pokeball.png`} alt="포켓볼" />
          </StPockeGroupImgDiv>
        ))}
      </StPockeGroupDiv>
    </DashboardContainer>
  );
};

export default Dashboard;
