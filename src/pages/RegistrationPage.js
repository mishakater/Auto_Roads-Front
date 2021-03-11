import React from 'react';
import styled from 'styled-components';
import { Input } from '@material-ui/core';

const RegistrationPage = () => {
  return (
    <Container>
      <InnerContainer>
        <Input title="Name" />
        <Input title="Email" />
        <Input title="Password" />
        <Input title="Repeat Password" />
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
`;

const InnerContainer = styled.div`
`;

export default RegistrationPage;
