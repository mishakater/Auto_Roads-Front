import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

const AuthenticationPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = onChangeFn => ({ event }) => {
    const { value } = event.target;

    onChangeFn(value);
  }

  const handleSubmit = () => {

  };

  return (
     <Container>
        <TextField label="Email" type="email" onChange={handleChange(setEmail)} />
        <TextField label="Password" type="password" onChange={handleChange(setPassword)} />
        <Button title="Login" onClick={handleSubmit} />
     </Container>
  );
};

const Container = styled.div`
`;

export default AuthenticationPage;
