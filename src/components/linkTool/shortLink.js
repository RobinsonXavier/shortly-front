import React from 'react';
import styled from 'styled-components';
import lixeira from '../../assets/images/littleThrash.svg';
import UserContext from '../../contexts/userContext';
import { deleteUrl } from '../../services/urlService';

function ShortLink({ url, shortUrl, visitCount, id, render, setRender }) {
  const {config, setConfig} = React.useContext(UserContext);

  async function deleteClick() {
    await deleteUrl(id, config);

    setTimeout(() => {
      setRender(!render);
    }, 1000);
  }

  return (
    <ShortLinkStyle>
      <a href={url} target='_blank'>
        <GreenStyle>
          <span>
            {
              url.length > 30
              ?
              url.slice(0, 30) + '...'
              :
              url
            }
          </span>
          <span>{shortUrl}</span>
          <span>Quantidade de visitantes: {visitCount}</span>
        </GreenStyle>
      </a>
      <WhiteStyle onClick={deleteClick}>
        <img src={lixeira} alt='lixeira' />
      </WhiteStyle>
    </ShortLinkStyle>
  )
};

const ShortLinkStyle = styled.div`
  display: flex;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #78B15940;
  height: 60px;
  width: 1100px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;

  & > a {
    text-decoration: none;
    color: #ffffff;
  } 
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

const WhiteStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 60px;
  width: 130px;
  background-color: #ffffff;
`;


export default ShortLink;