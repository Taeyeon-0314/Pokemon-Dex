import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../css/GlobalStyle";

const StDevBtn = styled.button`
  background-color: #fa4747;
  width: 200px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
`;

const StImg = styled.img`
  width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StSubImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

const StMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <StMainDiv>
        <StImg src={`${process.env.PUBLIC_URL}/mainPokemon.png`} alt="" />
        <StSubImg src={`${process.env.PUBLIC_URL}/뮤.png`} alt="" />
        <StDevBtn onClick={() => navigate("/dex")}>
          포켓몬 도감 시작하기
        </StDevBtn>
      </StMainDiv>
    </>
  );
}

export default Home;
