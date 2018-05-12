import { COMMON } from '../../constants/actionTypes';
import { API_URL } from '../../constants/environment';
import { GET, POST, PUT, DELETE, PATCH } from '../https.service';

const api_url = API_URL + "api/";

export const getStates = (obj) => {
	return (dispatch) => {
		dispatch({ type: COMMON.SERVER_REQUEST });
		return POST(api_url + "locations/get_states.json", obj).then((res) => {
			dispatch({ type: COMMON.SERVER_SUCCESS });
			if(res.data.success == '1') {
				dispatch({ type: COMMON.SET_STATES, items: res.data.states });
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


export const getCountries = () => {
	return (dispatch) => {
		dispatch({ type: COMMON.SERVER_REQUEST });
		return GET(api_url + "locations/get_countries.json").then((res) => {
			dispatch({ type: COMMON.SERVER_SUCCESS });
			if(res.data.success == '1') {
				dispatch({ type: COMMON.SET_COUNTRIES, items: res.data.countries });
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
