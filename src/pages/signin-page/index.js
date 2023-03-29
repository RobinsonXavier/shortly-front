import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ErrorAnswer from '../../components/authComponents/errorAnswer';
import UserContext from '../../contexts/userContext';
import login from '../../services/signinService';


function Signin() {
  const {config, setConfig} = React.useContext(UserContext);
  const [form, setForm] = React.useState({});
  const [answer, setAnswer] = React.useState(0);
  const [requestError, setRequestError] = React.useState({});
  const navigate = new useNavigate();

  function inputHandler(ev) {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value
    })
  }

  async function submitHandler(ev) {
    ev.preventDefault();

    const request = await login(form);

    if (request.message) {
      setRequestError({
        message: request.message,
        status: request.status
      });
      setAnswer(2);
      return
    }
    setConfig(request);
    setAnswer(3);
    setTimeout(() => {
      navigate('/');
    },1000);
  }

  return (
    <SigninStyle>
      <form onSubmit={submitHandler}>
        {
        answer === 2 
        ?
        <ErrorAnswer message={requestError.message} status={requestError.status} />
        : 
        answer === 3
        ?
        <GreenSpan>Login bem sucedido!</GreenSpan>
        :
        null
        }
        {
          answer === 3
          ?
          <>
            <DisabledInput name='email' placeholder='E-mail' type='text' onChange={inputHandler} disabled />
            <DisabledInput name='password' placeholder='Senha' type='text' onChange={inputHandler} disabled />
            <DisabledButton type='submit' disabled >Entrar</DisabledButton>
          </>
          :
          <>
            <input name='email' placeholder='E-mail' type='text' onChange={inputHandler} required />
            <input name='password' placeholder='Senha' type='text' onChange={inputHandler} required />
            <button type='submit' >Entrar</button>
          </>
          
        }
      </form>.
    </SigninStyle>
  )
};

const SigninStyle = styled.div`
  display: flexbox;
  justify-content: center;
  align-items: center;
  height: 40vh;
  margin-top: 50px;

  form {
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    input {
      box-sizing: border-box;
      border: 1px solid #78B15940;
      box-shadow: 1px 1px 5px #78B15940;
      border-radius: 10px;
      width: 770px;
      height: 60px;
      padding-left: 10px;

      :focus{
        outline: none;
      }
    }

    button {
      box-sizing: border-box;
      border: none;
      border-radius: 10px;
      height: 60px;
      width: 180px;
      margin-top: 25px;
      background-color: #5D9040;
      color: #ffffff;
    }
  }
`;

const GreenSpan = styled.span`
  color: #5D9040 !important;
`;

const DisabledInput = styled.input`
  background-color: lightgray;
  color: gray;

`;

const DisabledButton = styled.button`
  background-color: #78B15940;
  color: gray;

`;

export default Signin;
