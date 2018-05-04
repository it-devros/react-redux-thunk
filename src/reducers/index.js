import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar'

import HomeReducer from './home';

const rootReducer = combineReducers({
	routing: routerReducer,
	loadingBar: loadingBarReducer,
	
	home: HomeReducer,
});

export default rootReducer;