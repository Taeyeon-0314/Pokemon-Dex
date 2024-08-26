import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../css/GlobalStyle";

const StMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 20px;

  @media (max-width: 768px) {
    height: auto;
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const StImg = styled.img`
  width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const StSubImg = styled.img`
  width: 300px;

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
  }
`;

const StDevBtn = styled.button`
  background-color: #fa4747;
  width: 210px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 40px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 35px;
    font-size: 14px;
  }
`;

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <StMainDiv>
        <StImg src={`/mainPokemon.png`} alt="" />
        <StSubImg src={`/뮤.png`} alt="" />
        <StDevBtn onClick={() => navigate("/dex")}>
          포켓몬 도감 시작하기
        </StDevBtn>
      </StMainDiv>
    </>
  );
}

export default Home;
