import styled from "styled-components";

function RankingList({message}) {
  return (
    <RankingListStyle>{message}</RankingListStyle>
  )
};

const RankingListStyle = styled.span`
  display: block;
  font-size: 28px;
  margin: 15px;
`;

export default RankingList;