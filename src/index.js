import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ticTacToe from './reducers'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(ticTacToe)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();

