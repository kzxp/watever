import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import {Router, browserHistory} from 'react-router'
import { includeRoutes, excludeRoutes } from './routes'
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store';
import App from 'containers/App'
import init from './init';
import actions from 'actions';

/* eslint import/no-webpack-loader-syntax: "off" */
import '!style!css!sass!sass/styles.global.sass'

const initialState = {};
const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store)

const prepareRoutesData = () => {

    return {
        indexRoute: {
            onEnter: (nextState, replace) => replace('info')
        },
        childRoutes: includeRoutes
    }
}

const renderDOM = () => {
    const routes = prepareRoutesData()
    const rootRoute = [
        Object.assign({
            path: "/",
            component: App
        }, routes),
        ...excludeRoutes
    ]

    ReactDOM.render(
        <Provider store={store}>
            <Router history={history} routes={rootRoute} />
        </Provider>, 
        document.getElementById('root')
    );
}

init.firebaseInit();
store.dispatch(actions.fetchPageData()) 

renderDOM();
