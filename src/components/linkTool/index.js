import styled from 'styled-components';

function LinkTool() {
  return(
    <LinkToolStyle>

    </LinkToolStyle>
  )
};

const LinkToolStyle = styled.div`
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

export default LinkTool;