import { JOB } from '../../constants/actionTypes';

class Job {
	constructor() {
		this.completedJobs = [];
		this.latestJobs = [];
	}

	getState() {
		return { ...{
			completedJobs: this.completedJobs,
			latestJobs: this.latestJobs,
		} };
	}

	setCompletedJobs(items) {
		this.completedJobs = null;
		this.completedJobs = [];
		this.completedJobs = Object.assign([], items);
	}

	setLatestJobs(items) {
		this.latestJobs = null;
		this.latestJobs = [];
		this.latestJobs = Object.assign([], items);
	}

}


const JobObj = new Job();

const reducer = (state = JobObj.getState(), action) => {
	switch (action.type) {
		case JOB.SET_COMPLETED_JOBS:
			JobObj.setCompletedJobs(action.items);
			break;

		case JOB.SET_LATEST_JOBS:
			JobObj.setLatestJobs(action.items);

		default: return state;
	}
	return JobObj.getState();
};

export default reducer;