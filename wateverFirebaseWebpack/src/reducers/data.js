import {
  UI_LOADING,
  UI_LOADED,
  FETCHED_PAGE_DATA
} from 'constants';

const dataReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCHED_PAGE_DATA:
      return { ...payload }
    default:
      return state;
  }
}

export default dataReducer;