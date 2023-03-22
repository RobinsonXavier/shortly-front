import React from 'react';
import styled from 'styled-components';

function NavBar() {
  return (
    <>
      <NavBarStyle>
        <EntryButton>Entrar</EntryButton>
        <SignupButton>Cadastrar-se</SignupButton>
      </NavBarStyle>
    </>
  )
};

const NavBarStyle = styled.div`
  display: flexbox;
  justify-content: flex-end;
  align-items: center;
  height: 10vh;
  padding-right: 10px;
  button {
    border: none;
    background-color: #ffffff;
    font-size: 14px;

    :hover {
      transform: scale(1.1);
      transition: 0.2s;
    }
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
