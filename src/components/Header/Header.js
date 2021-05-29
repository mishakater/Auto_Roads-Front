import React from 'react';
import styled from 'styled-components';
import { Icon, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router';
import { Routes } from '../../constants';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions/creators';

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    history.push(Routes.HOME);
  };

  const handleLogout = () => {
    dispatch(logout({}));
    history.push(Routes.LOGIN);
  };

  const handleProfileClick = () => {
    history.push(Routes.USER_PROFILE);
  };

  return (
    <Container>
      <Logo onClick={handleLogoClick}>
        AutoRoads
      </Logo>
      <Navbar>
        <IconButton onClick={handleProfileClick} aria-label="profile" style={{ marginRight: '10px' }}>
          <Icon>account_circle</Icon>
        </IconButton>
        <IconButton onClick={handleLogout} aria-label="logout">
          <Icon>logout</Icon>
        </IconButton>
      </Navbar>
    </Container>
  );
};

const Container = styled.div`
  padding: 30px 20px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
`;

const Logo = styled.div`
  font-size: 22px;
  cursor: pointer;
`;

export default Header;
