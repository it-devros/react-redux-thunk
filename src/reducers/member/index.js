import { MEMBER } from '../../constants/actionTypes';

class Member {
	constructor() {
		this.staffmembers = [];
	}

	getState() {
		return { ...{
			staffmembers: this.staffmembers,
		} };
	}

	setStaffMembers(items) {
		this.staffmembers = null;
		this.staffmembers = [];
		this.staffmembers = Object.assign([], items);
	}

}


const MemberObj = new Member();

const reducer = (state = MemberObj.getState(), action) => {
	switch (action.type) {
		case MEMBER.SET_STAFF_MEMBERS:
			MemberObj.setStaffMembers(action.items);
			break;

		default: return state;
	}
	return MemberObj.getState();
};

export default reducer;