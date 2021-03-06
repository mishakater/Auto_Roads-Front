import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { roadSelector } from '../store/selectors/roads';
import { Button } from '@material-ui/core';
import { commentRoad, rateRoad, searchRoads } from '../store/actions/creators';
import { userSelector } from '../store/selectors/user';
import { Header } from '../components';
import styled from 'styled-components';
import { Rating } from '@material-ui/lab';
import { mergeMean } from '../utils';

const RoadProfilePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const road = useSelector(roadSelector(id));
  const user = useSelector(userSelector);
  const mergedRatings = road?.ratings?.length ? mergeMean(road?.ratings) : {};
  const [comment, setComment] = useState('');
  const [rateState, setRateState] = useState({
    artificialConstructions: mergedRatings.artificialConstructions,
    engineeringArrangement: mergedRatings.engineeringArrangement,
    roadSurface: mergedRatings.roadSurface,
    sanitaryElements: mergedRatings.sanitaryElements,
    serviceObjects: mergedRatings.serviceObjects,
    technicalMeans: mergedRatings.technicalMeans,
  });

  useEffect(() => {
    const mergedRatings = road?.ratings?.length ? mergeMean(road?.ratings) : {};
    setRateState({
      artificialConstructions: mergedRatings.artificialConstructions,
      engineeringArrangement: mergedRatings.engineeringArrangement,
      roadSurface: mergedRatings.roadSurface,
      sanitaryElements: mergedRatings.sanitaryElements,
      serviceObjects: mergedRatings.serviceObjects,
      technicalMeans: mergedRatings.technicalMeans,
    });
  }, [road]);

  const handleChange = (key) => (e, val) => {
    setRateState(s => ({
      ...s,
      [key]: val,
    }))
  }

  const handleRate = () => {
    dispatch(rateRoad({
      userId: user._id,
      roadId: road._id,
      criteria: rateState,
      onSuccess: () => {
        dispatch(searchRoads({ query: '' }))
      }
    }));
  };

  const handleCommentChange = ({ target: { value } }) => {
    setComment(value);
  };

  const handleComment = () => {
    dispatch(commentRoad({
      id: road._id,
      userId: user._id,
      userName: user.email,
      text: comment,
      onSuccess: () => {
        dispatch(searchRoads({ query: '' }));
        setComment('');
      }
    }));
  };

  return (
    <div>
      <Header />

      <Row style={{ padding: '0 30px', width: 'auto' }}>
        <div>
          Road: {road?.roadName}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          Mean rating
          <Rating readOnly precision={0.1} value={mergedRatings.mean} max={10} />
        </div>
      </Row>

      <Content>

      <Row>
        Artificial Constructions
        <Rating precision={0.1} onChange={handleChange('artificialConstructions')} value={rateState.artificialConstructions} max={10} />
      </Row>
      <Row>
        Engineering Arrangement
        <Rating precision={0.1} onChange={handleChange('engineeringArrangement')} value={rateState.engineeringArrangement} max={10} />
      </Row>
      <Row>
        Road Surface
        <Rating precision={0.1} onChange={handleChange('roadSurface')} value={rateState.roadSurface} max={10} />
      </Row>
      <Row>
        Sanitary Elements
        <Rating precision={0.1} onChange={handleChange('sanitaryElements')} value={rateState.sanitaryElements} max={10} />
      </Row>
      <Row>
        Service Objects
        <Rating precision={0.1} onChange={handleChange('serviceObjects')} value={rateState.serviceObjects} max={10} />
      </Row>
      <Row>
        Technical Means
        <Rating precision={0.1} onChange={handleChange('technicalMeans')} value={rateState.technicalMeans} max={10} />
      </Row>

      <Button variant="outlined" onClick={handleRate}>rate</Button>

        <Comments>
          {road.comments.map(comment => (
            <Comment>
              <UserEmail>
              {comment.userName}
              </UserEmail>

              {comment.text}
            </Comment>
          ))}
        </Comments>
        <textarea style={{ margin: '20px 0' }} value={comment} onChange={handleCommentChange} />
        <Button variant="outlined" disabled={!comment.length} onClick={handleComment}>comment</Button>
      </Content>
    </div>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 10px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 30px;
`;

const Comments = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  background: lightblue;
  border-radius: 8px;
  margin: 2px 0;
`;

const UserEmail = styled.div`
  font-weight: 500;
  margin-bottom: 10px;
`;

export default RoadProfilePage;
