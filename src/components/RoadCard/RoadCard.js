import React from 'react';
import styled from 'styled-components';

const RoadCard = ({ onClick, roadName, region, direction, length, _id }) => {

  const handleClick = () => {
    onClick?.(_id);
  };

  return (
    <Container onClick={handleClick}>
      <Row><div>{roadName}</div><div>{length} miles</div></Row>
      <Row><div>@TODO: rating</div><div>{region} - {direction}</div></Row>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 680px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  margin: 10px 0;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default RoadCard;
