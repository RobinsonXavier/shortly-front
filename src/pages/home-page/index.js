import React from 'react';
import styled from 'styled-components';
import LinkTool from '../../components/linkTool';
import Ranking from '../../components/ranking';
import UserContext from '../../contexts/userContext';
import statusUpdate from '../../services/statusConnectionService';

function Home() {
  const {config, setConfig} = React.useContext(UserContext);

  React.useEffect(() => {
    if(config) {
      setInterval(() => {
        statusUpdate(config)
      }, 5000);
    }
  }, []);
  
  return (
    <>
      <HomePage>
        {
          config
          ?
          <LinkTool />
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
