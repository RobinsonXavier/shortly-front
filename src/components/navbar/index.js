import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/Logo.svg';

function NavBar() {
  const navigate = new useNavigate();

  function navigateTo(string) {
    navigate(`/${string}`);
  }

  return (
    <>
      <NavBarStyle>
        <img src={logo} alt='Logo' />
        <div>
          {''}
        </div>
        <div>
          <EntryButton onClick={() => {
            navigateTo('signin')
          }} >Entrar</EntryButton>
          <SignupButton onClick={() => {
            navigateTo('signup')
          }} >Cadastrar-se</SignupButton>
        </div>
      </NavBarStyle>
    </>
  )
};

const NavBarStyle = styled.div`
  display: flexbox;
  justify-content: space-between;
  align-items: center;
  height: 20vh;
  padding-right: 100px;
  button {
    border: none;
    background-color: #ffffff;
    font-size: 14px;
    :hover {
      transform: scale(1.1);
      transition: 0.2s;
    }
  }
  img {
    width: 400px;
    position: absolute;
    left: 50%;
    top: 150px;
    margin-left: -200px;
  }
`;

const EntryButton = styled.button`
  color: #5D9040;
`;

const SignupButton = styled.button`
  color: #9C9C9C;
  text-decoration: underline;
`;


export default NavBar;
