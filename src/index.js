import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import thunk from "redux-thunk";
import {applyMiddleware, createStore, compose} from "redux";
import {rootReducer} from "./redux/reducers/rootReducer";

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(rootReducer, persistedState, compose(applyMiddleware(thunk)));

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

