import React from 'react';
import styled from 'styled-components';
import createAccount from '../../services/signupService';
import ErrorAnswer from './errorAnswer';

function Signup() {
  const [form, setForm] = React.useState({});
  const [answer, setAnswer] = React.useState(0);
  const [requestError, setRequestError] = React.useState({});

  function inputHandler(ev) {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value
    })
  }

  async function submitHandler(ev) {
    ev.preventDefault();

    if(form.password.length < 8) {
      setRequestError({
        message: 'A senha tem que ter pelo menos 8 caracteres'
      });
      setAnswer(2);
      return
    }

    if(form.username.length < 3) {
      setRequestError({
        message: 'O nome tem que ter pelo menos 3 caracteres'
      });
      setAnswer(2);
      return
    }

    if(form.password !== form.confirmPassword) {
      setAnswer(1);
      return
    }

    const request = await createAccount(form);

    if (request.message) {
      setRequestError({
        message: request.message
      });
      setAnswer(2);
      return
    }

    setAnswer(3);  
  }

  return (
    <SignupStyle>
      <form onSubmit={submitHandler}>
        {
        answer === 1 
        ?
        <span>As senhas precisam estar idênticas</span>
        : 
        answer === 2 
        ?
        <ErrorAnswer message={requestError.message} />
        : 
        answer === 3
        ?
        <GreenSpan>Conta criada com sucesso !!</GreenSpan>
        :
        null
        }
        {
          answer === 3
          ?
          <>
            <DisabledInput name='username' placeholder='Nome' type='text' onChange={inputHandler} disabled />
            <DisabledInput name='email' placeholder='E-mail' type='text' onChange={inputHandler} disabled />
            <DisabledInput name='password' placeholder='Senha' type='text' onChange={inputHandler} disabled />
            <DisabledInput name='confirmPassword' placeholder='Confirmar senha' type='text' onChange={inputHandler} disabled />
            <button type='submit' disabled >Criar Conta</button>
          </>
          :
          <>
            <input name='username' placeholder='Nome' type='text' onChange={inputHandler} required />
            <input name='email' placeholder='E-mail' type='text' onChange={inputHandler} required />
            <input name='password' placeholder='Senha' type='text' onChange={inputHandler} required />
            <input name='confirmPassword' placeholder='Confirmar senha' type='text' onChange={inputHandler} required />
            <button type='submit' >Criar Conta</button>
          </>
        }
      </form>.
    </SignupStyle>
  )
};

const SignupStyle = styled.div`
  display: flexbox;
  justify-content: center;
  align-items: center;
  height: 60vh;
  margin-top: 50px;

  form {
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    span {
      color: red;
    }

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
      background-color: #5D9040;
      color: #ffffff;
    }
  }
`;

const GreenSpan = styled.span`
  color: #5D9040 !important;
`;

const DisabledInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #78B15940;
  box-shadow: 1px 1px 5px #78B15940;
  border-radius: 10px;
  width: 770px;
  height: 60px;
  padding-left: 10px;
  background-color: lightgray;
  color: gray;

`;

const DisabledButton = styled.input`
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  height: 60px;
  width: 180px;
  background-color: #78B15940;
  color: gray;

`;

export default Signup;
