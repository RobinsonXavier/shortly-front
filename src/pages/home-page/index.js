import React from 'react';
import styled from 'styled-components';
import Ranking from '../../components/ranking';
import UserContext from '../../contexts/userContext';

function Home() {
  const {config, setConfig} = React.useContext(UserContext);
  
  return (
    <>
      <HomePage>
        <Ranking />
      </HomePage>
    </>
  )
};

const HomePage = styled.div`
`;

export default Home;
