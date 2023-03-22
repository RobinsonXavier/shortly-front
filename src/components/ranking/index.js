import React from 'react';
import styled from 'styled-components';
import trophy from '../../assets/images/trophy.svg';

function Ranking() {
  return (
    <RankingStyle>
      <RankingTitle>
        <img src={trophy} alt='Ranking'/>
        <h1>Ranking</h1>
      </RankingTitle>
      <RankingScore>

      </RankingScore>
    </RankingStyle>
  )
};

const RankingStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 65vh;
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
  border: 1px #78B15940 solid;
  border-radius: 10px;
  height: 250px;
  width: 1100px;
`;

export default Ranking;
