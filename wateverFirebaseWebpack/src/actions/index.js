import { createAction } from 'redux-actions';
import * as constants from 'constants';

export default {
  fetchPageData: createAction(
    constants.FETCHING_PAGE_DATA
  ),
  setPageData: createAction(
    constants.FETCHED_PAGE_DATA
  ),
  loadMoreDev: createAction(
    constants.LOAD_MORE_DEV
  ),
  uiLoading: createAction(
    constants.UI_LOADING
  ),
  uiLoaded: createAction(
    constants.UI_LOADED
  )
}