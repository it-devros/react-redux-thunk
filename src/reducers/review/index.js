import { REVIEW } from '../../constants/actionTypes';

class Review {
	constructor() {
		this.reviews = [];
	}

	getState() {
		return { ...{
			reviews: this.reviews,
		} };
	}

	setReviews(items) {
		this.reviews = null;
		this.reviews = [];
		this.reviews = Object.assign([], items);
	}

}


const ReviewObj = new Review();

const reducer = (state = ReviewObj.getState(), action) => {
	switch (action.type) {
		case REVIEW.SET_REVIEWS:
			ReviewObj.setReviews(action.items);
			break;

		default: return state;
	}
	return ReviewObj.getState();
};

export default reducer;