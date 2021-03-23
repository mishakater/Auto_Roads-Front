import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/creators';
import { Routes } from '../constants';
import { useHistory } from 'react-router';

const AuthenticationPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = onChangeFn => ({ target }) => {
    onChangeFn(target.value);
  }

  const handleSubmit = () => {
    dispatch(login({
      email,
      password,
      onSuccess: () => {
        history.push(Routes.HOME);
      }
    }));
  };

  return (
     <Container>
       <InnerContainer>
         <h2>Welcome to AutoRoads</h2>
        <TextField label="Email" type="email" onChange={handleChange(setEmail)} />
        <TextField label="Password" type="password" onChange={handleChange(setPassword)} />
         <Button color="primary" variant="contained" onClick={handleSubmit}>Login</Button>
         <div>Don't have an account? <a href={Routes.REGISTRATION}>Register</a></div>
       </InnerContainer>
     </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  width: 40vw;
  height: 40vh;
`;

export default AuthenticationPage;
