import {
  UI_LOADING,
  UI_LOADED
} from 'constants';

const appReducer = (state = { loading: true }, { type, payload }) => {
  switch (type) {
    
    case UI_LOADING:

      return { ...state, loading: true }

    case UI_LOADED:
      return { ...state, loading: false }

    default:
      return state;

  }
}

export default appReducer;