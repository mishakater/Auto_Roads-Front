import { RoadsActionTypes } from '../types';
import { withCallbacks } from '../../lib';

export const listRoads = () => ({
  type: RoadsActionTypes.LIST
});

export const searchRoads = ({ query }) => ({
  type: RoadsActionTypes.SEARCH,
  payload: { query }
});

export const rateRoad = withCallbacks(({
  userId,
  roadId,
  criteria: {
    roadSurface,
    technicalMeans,
    engineeringArrangement,
    serviceObjects,
    sanitaryElements,
    artificialConstructions
  }
}) => ({
  type: RoadsActionTypes.RATE,
  payload: {
    userId,
    roadId,
    criteria: {
      roadSurface,
      technicalMeans,
      engineeringArrangement,
      serviceObjects,
      sanitaryElements,
      artificialConstructions
    }
  }
}));
