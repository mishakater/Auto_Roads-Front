import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { roadSelector } from '../store/selectors/roads';
import { Button } from '@material-ui/core';
import { rateRoad } from '../store/actions/creators';
import { userSelector } from '../store/selectors/user';
import { Header } from '../components';

const RoadProfilePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const road = useSelector(roadSelector(id));
  const user = useSelector(userSelector);

  const handleRate = () => {
    dispatch(rateRoad({
      userId: user._id,
      roadId: road._id,
      criteria: {
        roadSurface: 2,
        technicalMeans: 3,
        engineeringArrangement: 4,
        serviceObjects: 2,
        sanitaryElements: 2,
        artificialConstructions: 3
      }
    }))
  };

  return (
    <div>
      <Header />
      {road?.roadName}

      <Button variant="outlined" onClick={handleRate}>rate</Button>
    </div>
  );
};

export default RoadProfilePage;
