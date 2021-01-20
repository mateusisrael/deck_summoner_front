import React, {useState} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: silver;
`;

const Form = styled.form`

`;

function App() {
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
  console.log(API_ENDPOINT);
  const [redirect, setRedirect] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault();
    const userEmail = event.target.email.value;
    const userPasswd = event.target.password.value;
    handleLogin(userEmail, userPasswd);
  }

  const handleLogin = async (email, passwd) => {
    const request = await axios.post(`${API_ENDPOINT}/login`, {
      email: email,
      password: passwd
    });

    console.log(request.data);

    if(request.data.message === "logged") {
      const token = request.data.token;
      localStorage.setItem('deck', JSON.stringify({'jwttoken': token}));
      return setRedirect(true);
    }

  }

  return ( 
      redirect ? (<Redirect to="/" />) : (
        <Container>
        <Form onSubmit={handleSubmit}>
          <p>Nome</p>
          <input type="text" name="email" required></input>
          <p>Senha</p>
          <input type="password" name="password" required></input>
          <button type="submit">Login</button>
        </Form>
      </Container>
      )
  );
}

export default App;
