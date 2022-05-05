import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import thunk from "redux-thunk";
import {applyMiddleware, createStore, compose} from "redux";
import {rootReducer} from "./redux/reducers/rootReducer";
import {BrowserRouter} from "react-router-dom";

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

// store.subscribe(() => {
//     localStorage.setItem('reduxState', JSON.stringify(store.getState()))
// })
ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
                <App/>
        </BrowserRouter>
    </Provider>
        </React.StrictMode>,
    document.getElementById('root')
);

