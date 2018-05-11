import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


class Availability extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			checkDays: [],
		}
		this.onChangeCheckBox = this.onChangeCheckBox.bind(this);
		this.changeParentValues = this.changeParentValues.bind(this);
	}

	componentDidMount() {
		let objList = [];
		if (this.props.availabilities) {
			this.state.days.forEach((day) => {
				let temp = day.toLowerCase();
				let isExist = this.props.availabilities.filter((avail) => {
					return avail.toLowerCase() == temp;
				});
				if (isExist.length > 0) {
					objList.push({ id: day, checked: true });
				} else {
					objList.push({ id: day, checked: false });
				}
			});
		} else {
			this.state.days.forEach((day) => {
				objList.push({ id: day, checked:false });
			});
		}
		this.setState({ checkDays: objList });
	}

	onChangeCheckBox(e, id) {
		let objList = Object.assign([], this.state.checkDays);
		this.state.checkDays.forEach((day, index) => {
			if (day.id == id) {
				objList[index].checked = e.target.checked;
			}
		});
		this.setState({ checkDays: objList });
		this.changeParentValues();
	}

	changeParentValues() {
		setTimeout(() => {
			let objList = [];
			this.state.checkDays.forEach((day) => {
				if (day.checked == true) {
					objList.push(day.id);
				}
			});
			this.props.changeState(objList);
		}, 500);
	}


	render() {
		return ( 
			<article className="clearfix">
				<h5>Availability:</h5>
				<div className="col-xs-12">
					<div className="row col-tb">
						{
							this.state.checkDays.map((checkDay, key) => {
								return (
									<div key={key} className="col-sm-2 d-inline-block">
										<div className="checkbox">
											<label>{ checkDay.id }
												<input type="checkbox" checked={ checkDay.checked } onChange={(e) => { this.onChangeCheckBox(e, checkDay.id) }} />
												<span className="checkmark"></span>
											</label>
										</div>
									</div>
								);
							})
						}
					</div>
				</div>
			</article>
		);
	}

}

Availability.propTypes = {
	availabilities: PropTypes.array,
	changeState: PropTypes.func,
};

export default Availability;
