import { AUTH } from '../../constants/actionTypes';

class Auth {
	constructor() {
		this.isAuthed = false;
		this.token = '';
		this.user = {};
	}

	getState() {
		return { ...{
			isAuthed: this.isAuthed,
			token: this.token,
			user: this.user,
		} };
	}

	checkAuth() {
		this.isAuthed = false;
		this.token = '';
		this.user = null;
		this.user = {};
		if (window.localStorage.getItem('nextday_token')) {
			this.isAuthed = true;
			this.token = window.localStorage.getItem('nextday_token');
			this.user = Object.assign({}, window.localStorage.getItem('nextday_user'));
		}
	}

	loggedIn() {
		this.isAuthed = false;
		this.token = '';
		this.user = null;
		this.user = {};
		this.isAuthed = true;
	}

	loggedOut() {
		this.isAuthed = false;
		this.token = '';
		this.user = null;
		this.user = {};
	}

}


const AuthObj = new Auth();

const reducer = (state = AuthObj.getState(), action) => {
	switch (action.type) {
		case AUTH.CHECK_AUTH:
			AuthObj.checkAuth();
			break;

		case AUTH.LOGGED_IN:
			AuthObj.loggedIn();
			break;
		case AUTH.LOGGED_OUT:
			AuthObj.loggedOut();
			break; 

		default: return state;
	}
	return AuthObj.getState();
};

export default reducer;