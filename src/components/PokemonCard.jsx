import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.min.css";

const Card = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
  }
  @media (max-width: 768px) {
    padding: 8px;
    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 480px) {
    padding: 5px;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const StCardDiv = styled.div`
  cursor: default;
  &:hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
  }
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
`;

const StIdPTag = styled.p`
  font-size: 12px;
  color: rgb(102, 102, 102);
  padding-top: 15px;

  @media (max-width: 768px) {
    font-size: 10px;
    padding-top: 10px;
  }

  @media (max-width: 480px) {
    font-size: 8px;
    padding-top: 5px;
  }
`;

function PokemonCard({ pokemon, onAdd, isSelected }) {
  const navigate = useNavigate();
  const handleAddClick = (e) => {
    e.stopPropagation();

    if (isSelected) {
      Swal.fire({
        icon: "error",
        html: '<div style="font-size: 30px;">이미 추가한 포켓몬입니다!</div>',
      });
    } else {
      onAdd(pokemon);
    }
  };

  return (
    <Card>
      <div onClick={() => navigate(`/pokemon-detail?id=${pokemon.id}`)}>
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <p>{pokemon.korean_name}</p>
        <StIdPTag>{`No. ${pokemon.id.toString().padStart(3, "0")}`}</StIdPTag>
      </div>
      <StCardDiv>
        <Button onClick={handleAddClick}>추가</Button>
      </StCardDiv>
    </Card>
  );
}

export default PokemonCard;
