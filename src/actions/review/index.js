import { REVIEW, COMMON } from '../../constants/actionTypes';
import { API_URL } from '../../constants/environment';
import { GET, POST, PUT, DELETE, PATCH } from '../https.service';

const api_url = API_URL + "api/";

export const getReviews = (obj) => {
	return (dispatch) => {
		dispatch({ type: COMMON.SERVER_REQUEST });
		return POST(api_url + "reviews/get_review.json", obj).then((res) => {
			if(res.data.success == '1') {
				dispatch({ type: REVIEW.SET_REVIEWS, items: res.data.reviews });
				dispatch({ type: COMMON.SERVER_SUCCESS });
				return true;
			} else {
				dispatch({ type: COMMON.SERVER_SUCCESS });
				return false;
			}
		}).catch((err) => {
			dispatch({ type: COMMON.SERVER_FAILURE });
			throw err;
		});
	}
}
