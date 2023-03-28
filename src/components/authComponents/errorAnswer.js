import styled from 'styled-components';

function ErrorAnswer({message= '', status=':'}) {
  const newStatus = ': ' + status;
  return(
    <ErrorAnswerStyle>Ocorreu um erro{status !== ';' ? newStatus : status} {message}</ErrorAnswerStyle>
  )
};


const ErrorAnswerStyle = styled.span`
  color: red;
`;

export default ErrorAnswer;