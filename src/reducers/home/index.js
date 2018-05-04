import { HOME } from '../../constants/actionTypes';

class Home {
	constructor() {
		this.user_all_events = [];
	}

	getState() {
		return { ...{
			user_all_events: this.user_all_events,
		} };
	}

	setUserEvents(items) {
		this.user_all_events = null;
		this.user_all_events = [];
		if (items.length) {
			items.forEach((item) => {
				this.user_all_events.push(item);
			});
		}
	}

}


const HomeObj = new Home();

const reducer = (state = HomeObj.getState(), action) => {
	switch (action.type) {
		case HOME.SET_USER_EVENTS:
			HomeObj.setUserEvents(action.items || []);
			break;

		default: return state;
	}
	return HomeObj.getState();
};

export default reducer;