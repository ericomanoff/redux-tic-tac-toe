import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import select_square from './reducers/select_square'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(select_square)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();


