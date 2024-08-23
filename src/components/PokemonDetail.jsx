import { useLocation, useNavigate } from "react-router-dom";
import MOCK_DATA from "../mock";
import GlobalStyle from "../css/GlobalStyle";
import styled from "styled-components";

const StDetailImg = styled.img`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StDetailH2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: red;
`;

const StDetailTypeP = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
`;

const StDetailDescriptionP = styled.p`
  text-align: center;
  margin-top: 20px;
`;

const StDetailBackBtn = styled.button`
  background-color: black;
  width: 200px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 20px;
`;
const StDetailBackDiv = styled.div`
  text-align: -webkit-center;
`;
function PokemonDetail() {
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pokemonId = Number(queryParams.get("id"));

  const pokemon = MOCK_DATA.find((p) => p.id === pokemonId);

  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <GlobalStyle />
      <div>
        <StDetailBackDiv>
          <StDetailImg src={pokemon.img_url} alt={pokemon.korean_name} />
        </StDetailBackDiv>
        <StDetailH2>{pokemon.korean_name}</StDetailH2>
        <StDetailTypeP>타입: {pokemon.types.join(", ")}</StDetailTypeP>
        <StDetailDescriptionP>{pokemon.description}</StDetailDescriptionP>
        {/* onClick 이벤트를 완성해주세요. */}
        <StDetailBackDiv>
          <StDetailBackBtn
            onClick={() => {
              navigate(`/dex`);
            }}
          >
            뒤로 가기
          </StDetailBackBtn>
        </StDetailBackDiv>
      </div>
    </>
  );
}

export default PokemonDetail;
