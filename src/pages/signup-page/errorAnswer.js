import styled from 'styled-components';

function ErrorAnswer({message}) {
  return(
    <ErrorAnswerStyle>Ocorreu um erro: {message}</ErrorAnswerStyle>
  )
};


const ErrorAnswerStyle = styled.span`
  color: red;
`;

export default ErrorAnswer;