import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/navbar';
import Ranking from '../../components/ranking';

function Home() {
  return (
    <>
      <HomePage>
        <Ranking />
        <h1>Crie sua conta para usar nosso serviço!</h1>
      </HomePage>
    </>
  )
};

const HomePage = styled.div`
  & > h1 {
    font-size: 36px;
    font-weight: 700;
    text-align: center;
  }
`;

export default Home;
