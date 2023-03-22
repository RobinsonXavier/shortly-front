import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/navbar';
import Ranking from '../../components/ranking';

function Home() {
  return (
    <>
      <HomePage>
        <NavBar />
        <Ranking />
      </HomePage>
    </>
  )
};

const HomePage = styled.div`

`;

export default Home;
