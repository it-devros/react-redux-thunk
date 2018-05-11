import { JOB } from '../../constants/actionTypes';

class Job {
	constructor() {
		this.pastJobs = [];
		this.latestJobs = [];
		this.jobSkills = [];
	}

	getState() {
		return { ...{
			pastJobs: this.pastJobs,
			latestJobs: this.latestJobs,
			jobSkills: this.jobSkills,
		} };
	}

	setPastJobs(items) {
		this.pastJobs = null;
		this.pastJobs = [];
		this.pastJobs = Object.assign([], items);
	}

	setLatestJobs(items) {
		this.latestJobs = null;
		this.latestJobs = [];
		this.latestJobs = Object.assign([], items);
	}

	setJobSkills(items) {
		this.jobSkills = null;
		this.jobSkills = [];
		this.jobSkills = Object.assign([], items);
	}

}


const JobObj = new Job();

const reducer = (state = JobObj.getState(), action) => {
	switch (action.type) {
		case JOB.SET_PAST_JOBS:
			JobObj.setPastJobs(action.items);
			break;

		case JOB.SET_LATEST_JOBS:
			JobObj.setLatestJobs(action.items);
			break;

		case JOB.SET_JOBS_SKILLS:
			JobObj.setJobSkills(action.items);
			break;

		default: return state;
	}
	return JobObj.getState();
};

export default reducer;