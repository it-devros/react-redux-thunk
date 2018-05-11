import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import TextInput from '../../../components/basic-textinput';

import './style.scss';


class SpecificDates extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			availability_dates: this.props.availability_dates,
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],

			adding_day: "",
			isEdit: -1,
		}
		this.displayContent = this.displayContent.bind(this);
		this.onChangeValue = this.onChangeValue.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
		this.validate = this.validate.bind(this);
		this.onClickAddDate = this.onClickAddDate.bind(this);
		this.onClickDeleteDate = this.onClickDeleteDate.bind(this);
		this.onClickEditDate = this.onClickEditDate.bind(this);
		this.changeParentValues = this.changeParentValues.bind(this);
	}

	changeParentValues() {
		setTimeout(() => {
			let objList = Object.assign([], this.state.availability_dates);
			this.props.changeState(objList);
		}, 500);
	}

	onChangeValue(field, val) {
		this.setState({ adding_day: val });
	}

	onClickSave(e) {
		e.preventDefault();
		if (this.validate()) {
			let objList = Object.assign([], this.state.availability_dates);
			let obj = this.state.adding_day;
			if (this.state.isEdit == -1) {
				objList.push(obj);
			} else {
				objList[this.state.isEdit] = obj;
			}
			this.setState({ adding_day: "" });
			this.setState({ availability_dates: objList });
			this.setState({ isEdit: -1 });
			$("#addDateModal").modal('hide');
			this.changeParentValues();
		}
	}

	onClickAddDate(e) {
		e.preventDefault();
		$("#addDateModal").modal('show');
	}

	onClickDeleteDate(e, index) {
		e.preventDefault();
		let objList = [];
		this.state.availability_dates.forEach((da, ind) => {
			if (index != ind) {
				objList.push(da);
			}
		});
		this.setState({ availability_dates: objList });
	}

	onClickEditDate(e, index) {
		e.preventDefault();
		this.setState({ adding_day: this.state.availability_dates[index] });
		this.setState({ isEdit: index });
		$("#addDateModal").modal('show');
	}

	validate() {
		if (this.state.adding_day == '') {
			toastr["error"]("Please input the day.");
			return false;
		}
		if (parseInt(this.state.adding_day) <= 0 || parseInt(this.state.adding_day) > 31) {
			toastr["error"]("Please input the Number between 1 and 31.");
			return false;
		}
		return true;
	}

	render() {

		let display_content = this.displayContent();

		return ( 
			<article id="specificDates" className="clearfix">
				<h5>Specific Dates:</h5>
				<div className="col-xs-10">
					{ display_content }
				</div>
				<div className="col-xs-2">
					<div className="row col-tb">
						<div className="col-sm-12 d-inline-block">
							<a href="javascript:void(0);" className="btn btn-bordered-info" onClick={this.onClickAddDate}>
								<span className="fa fa-plus"></span> Add
							</a>
						</div>
					</div>
				</div>
				<div className="modal fade" id="addDateModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">Add Date</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<div className="form-group">
									<TextInput type={'text'} field={'available_day'} className={'form-control'} placeholder={'Please input 1~31 for a day'} initial={this.state.adding_day} withValid={'true'} changed={ this.onChangeValue } />
								</div>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
								<button type="button" className="btn btn-primary" onClick={ this.onClickSave }>Save changes</button>
							</div>
						</div>
					</div>
				</div>
			</article>
		);
	}


	displayContent() {
		let content = [];
		if (this.state.availability_dates) {
			let today = new Date();
			let thisMonth = this.state.months[today.getMonth()];
			this.state.availability_dates.forEach((avail, index) => {
				let temp = today.getMonth() + 1;
				let str = today.getFullYear() + '-' + temp + '-' + avail;
				let currentDate = new Date(str);
				let day = this.state.days[currentDate.getDay()];
				content.push(
					<div key={index} className="row col-tb">
						<div className="col-sm-3 d-inline-block">
							<span>{ day }</span>
						</div>
						<div className="col-sm-3 d-inline-block">
							<span>{ thisMonth } { avail }</span>
						</div>
						<div className="col-sm-3 d-inline-block">
							<span>8 - 10</span>
						</div>
						<div className="col-sm-3 d-inline-block action">
							<a href="javascript:void(0);" onClick={(e) => { this.onClickEditDate(e, index) }}>
								<span className="fa fa-pencil-square-o"></span>
							</a>
							<a href="javascript:void(0);" onClick={(e) => { this.onClickDeleteDate(e, index) }}>
								<span className="text-danger fa fa-trash-o"></span>
							</a>
						</div>
					</div>
				);
			});
		} else {
			content.push(<div key={'i1'} className="row col-tb">No Availability Date</div>);
		}
		return content;
	}

}

SpecificDates.propTypes = {
	availability_dates: PropTypes.array,
	changeState: PropTypes.func,
};

export default SpecificDates;
