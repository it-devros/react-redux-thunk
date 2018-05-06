import { AUTH } from '../../constants/actionTypes';
import { API_URL } from '../../constants/environment';

export const checkAuth = () => {
	return (dispatch) => {
		dispatch({ type: AUTH.CHECK_AUTH });
	}
}

export const logIn = (obj) => {
	return (dispatch) => {
		dispatch({ type: AUTH.LOGGED_IN });
	}
}

export const logOut = () => {
	return (dispatch) => {
		dispatch({ type: AUTH.LOGGED_OUT });
	}
}