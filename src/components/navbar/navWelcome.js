import styled from 'styled-components';

function NavWelcome({ name }) {
  return (
    <NavWelcomeStyle>Seja bem-vindo(a), {name}</NavWelcomeStyle>
  )
};

const NavWelcomeStyle = styled.span`
  margin-left: 50px;
  font-size: 14px;
  font-weight: 400;
  color: #5D9040;
`;

export default NavWelcome;