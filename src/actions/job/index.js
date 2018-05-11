import { JOB, COMMON } from '../../constants/actionTypes';
import { API_URL } from '../../constants/environment';
import { GET, POST, PUT, DELETE, PATCH } from '../https.service';

const api_url = API_URL + "api/";

export const getPastEmployerJobs = (obj) => {
	return (dispatch) => {
		dispatch({ type: COMMON.SERVER_REQUEST });
		return POST(api_url + "jobs/past_jobs_employer.json", obj).then((res) => {
			if(res.data.success == '1') {
				dispatch({ type: JOB.SET_PAST_JOBS, items: res.data.jobs });
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


export const getPastStaffJobs = (obj) => {
	return (dispatch) => {
		dispatch({ type: COMMON.SERVER_REQUEST });
		return POST(api_url + "jobs/past_jobs_staff.json", obj).then((res) => {
			if(res.data.success == '1') {
				dispatch({ type: JOB.SET_PAST_JOBS, items: res.data.jobs });
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


export const getLatestJobs = (obj) => {
	return (dispatch) => {
		dispatch({ type: COMMON.SERVER_REQUEST });
		return POST(api_url + "jobs/latest_jobs.json", obj).then((res) => {
			if(res.data.success == '1') {
				dispatch({ type: JOB.SET_LATEST_JOBS, items: res.data.jobs });
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


export const postNewJob = (obj) => {
	return (dispatch) => {
		dispatch({ type: COMMON.SERVER_REQUEST });
		return POST(api_url + "jobs/post_jobs.json", obj).then((res) => {
			if(res.data.success == '1') {
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


export const getJobSkills = () => {
	return (dispatch) => {
		dispatch({ type: COMMON.SERVER_REQUEST });
		return GET(api_url + "jobs/get_job_categories.json").then((res) => {
			if(res.data.success == '1') {
				dispatch({ type: JOB.SET_JOBS_SKILLS, items: res.data.category });
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
