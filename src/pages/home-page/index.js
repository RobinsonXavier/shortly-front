import React from 'react';
import styled from 'styled-components';
import LinkTool from '../../components/linkTool';
import Ranking from '../../components/ranking';
import UserContext from '../../contexts/userContext';

function Home() {
  const {config, setConfig} = React.useContext(UserContext);
  const [urls, setUrls] = React.useState(0);
  return (
    <>
      <HomePage>
        {
          config
          ?
          <LinkTool urls={urls} setUrls={setUrls} />
          :
          <Ranking />
        }
      </HomePage>
    </>
  )
};

const HomePage = styled.div`
`;

export default Home;
