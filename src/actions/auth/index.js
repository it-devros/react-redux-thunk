import { AUTH, COMMON } from '../../constants/actionTypes';
import { API_URL } from '../../constants/environment';
import { GET, POST, PUT, DELETE, PATCH } from '../https.service';

const api_url = API_URL + "api/";


export const checkAuth = () => {
	return (dispatch) => {
		dispatch({ type: AUTH.CHECK_AUTH });
	}
}

export const register = (obj) => {
	return (dispatch) => {
		dispatch({ type: COMMON.SERVER_REQUEST });
		return POST(api_url + "users/register.json", obj).then((res) => {
			if(res.data.success == 1) {
				dispatch({ type: COMMON.SERVER_SUCCESS });
				return true;
			} else {
				dispatch({ type: COMMON.SERVER_FAILURE });
				throw new Error(res.data.message);
			}
		}).catch((err) => {
			dispatch({ type: COMMON.SERVER_FAILURE });
			throw err;
		});
	}
}

export const logInStaff = (obj) => {
	return (dispatch) => {
		dispatch({ type: COMMON.SERVER_REQUEST });
		return POST(api_url + "users/login.json", obj).then((res) => {
			if(res.data.success == 1) {
				dispatch({ type: AUTH.LOGGED_IN, token: 'loggedin', user: res.data.staff.user, userInfo: res.data.staff });
				dispatch({ type: COMMON.SERVER_SUCCESS });
				return true;
			} else {
				dispatch({ type: COMMON.SERVER_FAILURE });
				throw new Error(res.data.message);
			}
		}).catch((err) => {
			dispatch({ type: COMMON.SERVER_FAILURE });
			throw err;
		});
	}
}

export const logInClient = (obj) => {
	return (dispatch) => {
		dispatch({ type: COMMON.SERVER_REQUEST });
		return POST(api_url + "users/login.json", obj).then((res) => {
			if(res.data.success == "1") {
				dispatch({ type: AUTH.LOGGED_IN, token: 'loggedin', user: res.data.employer.user, userInfo: res.data.employer });
				dispatch({ type: COMMON.SERVER_SUCCESS });
				return true;
			} else {
				dispatch({ type: COMMON.SERVER_FAILURE });
				throw new Error(res.data.message);
			}
		}).catch((err) => {
			dispatch({ type: COMMON.SERVER_FAILURE });
			throw err;
		});
	}
}


export const logOut = () => {
	return (dispatch) => {
		dispatch({ type: AUTH.LOGGED_OUT });
	}
}

export const updateStaffUser = (obj) => {
	return (dispatch) => {
		dispatch({ type: COMMON.SERVER_REQUEST });
		return POST(api_url + "users/settings.json", obj).then((res) => {
			if(res.data.success == 1) {
				dispatch({ type: AUTH.UPDATE_USER, user: obj });
				dispatch({ type: COMMON.SERVER_SUCCESS });
				return true;
			} else {
				dispatch({ type: COMMON.SERVER_FAILURE });
				throw new Error(res.data.message);
			}
		}).catch((err) => {
			dispatch({ type: COMMON.SERVER_FAILURE });
			throw err;
		});
	}
}


export const updateClientUser = (obj) => {
	return (dispatch) => {
		dispatch({ type: COMMON.SERVER_REQUEST });
		return POST(api_url + "users/settings.json", obj).then((res) => {
			if(res.data.success == 1) {
				dispatch({ type: AUTH.UPDATE_USER, user: obj });
				dispatch({ type: COMMON.SERVER_SUCCESS });
				return true;
			} else {
				dispatch({ type: COMMON.SERVER_FAILURE });
				throw new Error(res.data.message);
			}
		}).catch((err) => {
			dispatch({ type: COMMON.SERVER_FAILURE });
			throw err;
		});
	}
}

export const saveStaffProfile = (obj) => {
	return (dispatch) => {
		dispatch({ type: COMMON.SERVER_REQUEST });
		return POST(api_url + "staffMembers/edit.json", obj).then((res) => {
			dispatch({ type: COMMON.SERVER_SUCCESS });
			if (res.data.success == '1') {
				dispatch({ type: AUTH.UPDATING_STAFF_PROFILE, item: obj });
				return true;
			} else {
				return false;
			}
		}).catch((err) => {
			dispatch({ type: COMMON.SERVER_FAILURE });
			throw err;
		});
	}
}