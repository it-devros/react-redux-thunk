import { MEMBER, COMMON } from '../../constants/actionTypes';
import { API_URL } from '../../constants/environment';
import { GET, POST, PUT, DELETE, PATCH } from '../https.service';

const api_url = API_URL + "api/";

export const getStaffMember = (obj) => {
	return (dispatch) => {
		dispatch({ type: COMMON.SERVER_REQUEST });
		return POST(api_url + "users/get_staffmembers.json", obj).then((res) => {
			dispatch({ type: COMMON.SERVER_SUCCESS });
			if(res.data.success == '1') {
				dispatch({ type: MEMBER.SET_STAFF_MEMBERS, items: res.data.StaffMembers });
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
