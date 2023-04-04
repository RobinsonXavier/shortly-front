import React from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/userContext';
import { 
  postNewUrl, 
  getUserUrls
} from '../../services/urlService';
import ShortLink from './shortLink';

function LinkTool({urls, setUrls}) {
  const {config, setConfig} = React.useContext(UserContext);
  const [form, setForm] = React.useState({});
  const [render, setRender] = React.useState(false);
  function inputHandler(ev) {
    setForm({
      ...form,
      url: ev.target.value
    });
  }

  async function submitHandler(ev) {
    ev.preventDefault();

    const request = await postNewUrl(form, config);
    console.log(form);

    if(request.message) {
      console.log(request.message)
    }

    setTimeout(()=> {
      setRender(!render)
    }, 1000)
  }

  async function userUrls() {
    const request = await getUserUrls(config);
    if(request.message) {
      console.log(request.message)
    }
    const newUrls = [request];
    console.log(urls)
    setUrls(...newUrls);
  }

  React.useEffect(() => {
    userUrls();
  }, [render]);

  return(
    <LinkToolStyle>
      <form onSubmit={submitHandler}> 
        <input type='text' placeholder='Links que cabem no bolso' onChange={inputHandler} required/>
        <button type='submit' >Encurtar link</button>
      </form>
      {
        urls[0]
        ?
        urls.map( element => <ShortLink key={element.id} render={render} setRender={setRender} id={element.id} url={element.url} shortUrl={element.shortUrl} visitCount={element.visitCount} />)
        :
        <span>Você não tem Urls encurtadas</span>
      }
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

  & > span{
    color: red;
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
  }

  input {
    box-sizing: border-box;
    border: 1px solid #78B15940;
    box-shadow: 1px 1px 5px #78B15940;
    border-radius: 10px;
    width: 770px;
    height: 60px;
    padding-left: 10px;
    margin-right: 120px;
    font-size: 18px;
    font-weight: 400;
    :focus{
      outline: none;
    }
  }

  form {
    button {
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    height: 60px;
    width: 210px;
    margin-top: 25px;
    background-color: #5D9040;
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
  }
  }
`;

export default LinkTool;