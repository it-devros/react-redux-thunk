import { COMMON } from '../../constants/actionTypes';

class Common {
	constructor() {
		this.states = [];
		this.countries = [];
	}

	getState() {
		return { ...{
			states: this.states,
			countries: this.countries,
		} };
	}

	setStates(items) {
		this.states = null;
		this.states = [];
		this.states = Object.assign([], items);
	}

	setCountries(items) {
		this.countries = null;
		this.countries = [];
		this.countries = Object.assign([], items);
	}

}


const CommonObj = new Common();

const reducer = (state = CommonObj.getState(), action) => {
	switch (action.type) {
		case COMMON.SET_STATES:
			CommonObj.setStates(action.items);
			break;

		case COMMON.SET_COUNTRIES:
			CommonObj.setCountries(action.items);
			break;

		default: return state;
	}
	return CommonObj.getState();
};

export default reducer;