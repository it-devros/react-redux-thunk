import { AUTH } from '../../constants/actionTypes';

class Auth {
	constructor() {
		this.isAuthed = false;
		this.token = '';
		this.user = {};
		this.userInfo = {};
	}

	getState() {
		return { ...{
			isAuthed: this.isAuthed,
			token: this.token,
			user: this.user,
			userInfo: this.userInfo,
		} };
	}

	checkAuth() {
		this.isAuthed = false;
		this.token = '';
		this.user = null;
		this.user = {};
		if (window.localStorage.getItem('nextday_token') && window.localStorage.getItem('nextday_user') && window.localStorage.getItem('nextday_userInfo')) {
			this.isAuthed = true;
			this.token = window.localStorage.getItem('nextday_token');
			let strUser = window.localStorage.getItem('nextday_user');
			this.user = Object.assign({}, JSON.parse(strUser));
			let strUserInfo = window.localStorage.getItem('nextday_userInfo');
			this.userInfo = Object.assign({}, JSON.parse(strUserInfo));
		}
	}

	loggedIn(token, user, userInfo) {
		this.isAuthed = false;
		this.token = '';
		this.token = token;
		window.localStorage.setItem('nextday_token', token);
		this.user = null;
		this.user = {};
		this.user = Object.assign({}, user);
		let strUser = JSON.stringify(user);
		window.localStorage.setItem('nextday_user', strUser);
		this.userInfo = null;
		this.userInfo = {};
		this.userInfo = Object.assign({}, userInfo);
		let strUserInfo = JSON.stringify(userInfo);
		window.localStorage.setItem('nextday_userInfo', strUserInfo);
		this.isAuthed = true;
	}

	loggedOut() {
		this.isAuthed = false;
		this.token = '';
		this.user = null;
		this.user = {};
		this.userInfo = null;
		this.userInfo = {};
		window.localStorage.removeItem('nextday_user');
		window.localStorage.removeItem('nextday_token');
		window.localStorage.removeItem('nextday_userInfo');
	}

	updateUSer(user) {
		this.user = null;
		this.user = {};
		this.user = Object.assign({}, user);
		let strUser = JSON.stringify(user);
		window.localStorage.setItem('nextday_user', strUser);
	}

}


const AuthObj = new Auth();

const reducer = (state = AuthObj.getState(), action) => {
	switch (action.type) {
		case AUTH.CHECK_AUTH:
			AuthObj.checkAuth();
			break;

		case AUTH.LOGGED_IN:
			AuthObj.loggedIn(action.token, action.user, action.userInfo);
			break;
		case AUTH.LOGGED_OUT:
			AuthObj.loggedOut();
			break; 
		case AUTH.UPDATE_USER:
			AuthObj.updateUSer(action.user);
			break;

		default: return state;
	}
	return AuthObj.getState();
};

export default reducer;