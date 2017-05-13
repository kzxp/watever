import { createSelector } from 'reselect';
import _ from 'lodash';


export const getAppState = (state) => state.app;
export const getDataState = (state) => state.data

export const getDataStateByKey = createSelector(
  getDataState,
  (state, key) => key,
  (data, key) => _.get(data, [key], {})
)