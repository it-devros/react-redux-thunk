import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar'

import AuthReducer from './auth';
import JobReducer from './job';
import ReviewReducer from './review';
import MemberReducer from './member';
import CommonReducer from './common';

const rootReducer = combineReducers({
	routing: routerReducer,
	loadingBar: loadingBarReducer,
	
	auth: AuthReducer,
	job: JobReducer,
	review: ReviewReducer,
	member: MemberReducer,
	common: CommonReducer,
});

export default rootReducer;