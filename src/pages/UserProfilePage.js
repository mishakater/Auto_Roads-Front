import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { userSelector } from '../store/selectors/user';
import { Header } from '../components';

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  return (
    <>
      <Header />
      <Container>
        <Name>{user.name}</Name>
        <Email>{user.email}</Email>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 0 20px;
`;

const Name = styled.div`
  font-size: 18px;
  margin: 20px 0;
`;

const Email = styled.div`
  font-size: 16px;
  margin: 20px 0;
`;

export default UserProfilePage;
