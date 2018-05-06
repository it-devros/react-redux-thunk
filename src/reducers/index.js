import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar'

import AuthReducer from './auth';

const rootReducer = combineReducers({
	routing: routerReducer,
	loadingBar: loadingBarReducer,
	
	auth: AuthReducer,
});

export default rootReducer;