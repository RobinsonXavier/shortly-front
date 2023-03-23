import React from 'react';
import styled from 'styled-components';

function Signup() {
  const [form, setForm] = React.useState({});

  function inputHandler(ev) {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value
    })
  }

  function submitHandler(ev) {
    ev.preventDefault();

  }

  return (
    <SignupStyle>
      <form>
        <input name='username' placeholder='Nome' type='text' onChange={inputHandler} required />
        <input name='email' placeholder='E-mail' type='text' onChange={inputHandler} required />
        <input name='password' placeholder='Senha' type='text' onChange={inputHandler} required />
        <input name='confirmPassword' placeholder='Confirmar senha' type='text' onChange={inputHandler} required />
        <button onSubmit={submitHandler}>Criar Conta</button>
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

export default Signup;
