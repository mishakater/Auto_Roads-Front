import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Input, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Routes } from '../constants';
import { register } from '../store/actions/creators';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleChange = onChangeFn => ({ target }) => {
    onChangeFn(target.value);
  }

  const handleSubmit = () => {
    if (password !== repeatPassword) {
      alert("Password don't match");
      return;
    }

    dispatch(register({
      name,
      email,
      password,
      onSuccess: () => {
        history.push(Routes.HOME);
      }
    }))
  };

  return (
    <Container>
      <InnerContainer>
        <h2>Welcome to AutoRoads</h2>
        <TextField label="Name" onChange={handleChange(setName)} />
        <TextField label="Email" onChange={handleChange(setEmail)} />
        <TextField label="Password" onChange={handleChange(setPassword)} />
        <TextField label="Repeat Password" onChange={handleChange(setRepeatPassword)} />
        <Button variant="contained" color="primary" onClick={handleSubmit}>Register</Button>
        <div>Already registered? <a href={Routes.LOGIN}>Login</a></div>
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
  width: 20vw;
  height: 50vh;
`;

export default RegistrationPage;
