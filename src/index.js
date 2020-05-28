import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createLogger} from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'
import App from './containers/App';//Padre de todos tus componentes, como tu main
import * as serviceWorker from './serviceWorker';
import 'tachyons'; //FOR DOCUMENTATION GO TO TACHYONS STYLES ON GOOGLE
import { searchRobots, requestRobots} from './reducers';

const logger = createLogger();
//We combine all reducers in one and add it to the store so we can use al of them
const rootReducer = combineReducers({ searchRobots, requestRobots } )
const store = 
            createStore(rootReducer, applyMiddleware(thunkMiddleware ,logger))

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root'));
serviceWorker.unregister();  
