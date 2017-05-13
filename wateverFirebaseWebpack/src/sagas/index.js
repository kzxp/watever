import { takeLatest, takeEvery, all, put } from 'redux-saga/effects'
import actions from 'actions';

export default function* rootSaga() {
  yield all([
    fetching()
  ])
}

function* fetching() {
  
    yield all([
      takeLatest('FETCHING_PAGE_DATA', function*({type, payload}) {
        yield put(actions.setPageData(payload));
        yield put(actions.uiLoaded());
      })
    ])
}