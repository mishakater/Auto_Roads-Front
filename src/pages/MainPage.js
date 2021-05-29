import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Header, RoadCard } from '../components';
import { TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { searchRoads } from '../store/actions/creators';
import { roadsSelector } from '../store/selectors/roads';
import { useHistory } from 'react-router';
import { Routes } from '../constants';

const MainPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const roads = useSelector(roadsSelector);

  useEffect(() => {
    dispatch(searchRoads({ query: '' }));
  }, []);

  const handleSearch = ({ target }) => {
    dispatch(searchRoads({ query: target.value }));
  };

  const handleRoadClick = (id) => {
    history.push(`${Routes.ROAD_PROFILE}/${id}`);
  }

  return (
    <Container>
      <Header />
      <RoadsContainer>
      <TextField label="Search..." type="text" onChange={handleSearch} />
        {roads.map((road) => (
          <RoadCard {...road} key={road._id} onClick={handleRoadClick} />
        ))}
      </RoadsContainer>
    </Container>
  );
};

const Container = styled.div`

`;

const RoadsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export default MainPage;
