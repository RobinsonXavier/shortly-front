import React from 'react';
import styled from 'styled-components';
import lixeira from '../../assets/images/littleThrash.svg';

function ShortLink({ url, shortUrl, visitCount }) {
  return (
    <ShortLinkStyle>
      <GreenStyle>
        <span>{url}</span>
        <span>{shortUrl}</span>
        <span>Quantidade de visitantes: {visitCount}</span>
      </GreenStyle>
      <WhiteStyle>
        <img src={lixeira} alt='lixeira' />
      </WhiteStyle>
    </ShortLinkStyle>
  )
};

const ShortLinkStyle = styled.div`
  box-sizing: border-box;
  box-shadow: 1px 1px 5px #78B15940;
  height: 60px;
  width: 1100px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
`;

const GreenStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 60px;
  width: 970px;
  background-color: #80CC74;
`;

const WhiteStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 60px;
  width: 130px;
  background-color: #ffffff;
`;


export default ShortLink;