import { ReducerKeys } from '../../constants';
import { by } from '../../utils';

export const roadsSelector = ({ [ReducerKeys.ROADS]: { roads } }) => roads;

export const roadSelector = id => ({ [ReducerKeys.ROADS]: { roads } }) => roads.find(by('_id', id));
