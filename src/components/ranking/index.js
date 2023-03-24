import React from 'react';
import styled from 'styled-components';
import trophy from '../../assets/images/trophy.svg';
import getSortedRanking from '../../services/rankingService';
import RankingList from './rankingList';

function Ranking() {
  const [ranking, setRanking] = React.useState([]);

  async function getRanking() {
    const requestData = await getSortedRanking();

    if(requestData.message) {
      setRanking({
        message: requestData.message
      });
      return
    }
    if(requestData.length > 5) {
      setRanking(requestData.slice(0,5));
    } else {
      setRanking(requestData);
    }
  };

  React.useEffect(() => {
    getRanking();
    console.log(ranking);
  }, []);

  return (
    <RankingStyle>
      <RankingTitle>
        <img src={trophy} alt='Ranking'/>
        <h1>Ranking</h1>
      </RankingTitle>
      <RankingScore>
        {
          ranking.length 
          ?
          ranking.map( (element, index) => {
            const message = index+ 1 + '. ' + element.name + ' - ' + element.linkCount + ' links - ' + element.visitCount + ' visualizações';

            return <RankingList key={element.id} message={message}/>
          })
          :
          <RankingList message={ranking.message} /> 
        }
      </RankingScore>
    </RankingStyle>
  )
};

const RankingStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 60vh;
  margin-top: 50px;
  h1 {
    font-size: 36px;
    font-weight: 700;
  }
`;
const RankingTitle = styled.div`
  display: flexbox;
  justify-content: center;
  align-items: center;
  margin-bottom: -50px;;
  img {
    margin-right: 10px;
  }
`;
const RankingScore = styled.div`
  box-sizing: border-box;
  border: 1px #78B15940 solid;
  border-radius: 10px;
  height: 250px;
  width: 1100px;
  padding-top: 12px;
`;

export default Ranking;
