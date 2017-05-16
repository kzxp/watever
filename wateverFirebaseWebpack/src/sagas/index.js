import { takeLatest, takeEvery, all, put, call } from 'redux-saga/effects'
import actions from 'actions';
import apiServices from 'apiServices';

export default function* rootSaga() {
  yield all([
    fetching()
  ])
}

function* fetching() {
  
    yield all([

      takeLatest('FETCHING_PAGE_DATA', function*({type, payload}) {

        try {
          const data = yield call(apiServices.fetchRef, "/page");
          yield put(actions.setPageData(data));
        } catch (err) {
            console.log(err)
        } finally {
           
          yield put(actions.uiLoaded());
        }
        
      }),
      takeLatest('LOGGING_IN', function*({type, payload}) {

        const [ email, password ] = payload;
        try {
          yield put(actions.loggedIn());
          const result = yield call(apiServices.auth, email, password);


        } catch (err) {
            console.log(err)
        } finally {
          yield put(actions.uiLoaded());
        }
        
      })


    ])
}