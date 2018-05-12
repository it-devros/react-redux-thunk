import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import TextInput from '../../../components/basic-textinput';

import './style.scss';

class JobPosition extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			positions: this.props.positions || [],

			position: '',
			isEdit: -1,
		}
		this.displayContent = this.displayContent.bind(this);
		this.onClickAddPosition = this.onClickAddPosition.bind(this);
		this.onChangeValue = this.onChangeValue.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
		this.validate = this.validate.bind(this);
		this.changeParentValues = this.changeParentValues.bind(this);
		this.onClickDeletePosition = this.onClickDeletePosition.bind(this);
		this.onClickEditPosition = this.onClickEditPosition.bind(this);
	}

	onClickAddPosition(e) {
		e.preventDefault();
		$("#addPositionModal").modal('show');
	}

	onChangeValue(field, val) {
		this.setState({ position: val });
	}

	onClickSave(e) {
		e.preventDefault();
		if (this.validate()) {
			let objList = Object.assign([], this.state.positions);
			let obj = this.state.position;
			if (objList.indexOf(obj) == -1) {
				if (this.state.isEdit == -1) {
					objList.push(obj);
				} else {
					objList[this.state.isEdit] = obj;
				}
				this.setState({ position: '' });
				this.setState({ positions: objList });
				this.setState({ isEdit: -1 });
				$("#addPositionModal").modal('hide');
				this.changeParentValues();
			} else {
				toastr["warning"]("Already inputed.");
			}
		}
	}

	changeParentValues() {
		setTimeout(() => {
			let objList = Object.assign([], this.state.positions);
			this.props.changeState(objList);
		}, 500);
	}

	onClickDeletePosition(e, index) {
		e.preventDefault();
		let objList = [];
		this.state.positions.forEach((pos, ind) => {
			if (index != ind) {
				objList.push(pos);
			}
		});
		this.setState({ positions: objList });
		this.changeParentValues();
	}

	onClickEditPosition(e, index) {
		e.preventDefault();
		this.setState({ position: this.state.positions[index] });
		this.setState({ isEdit: index });
		$("#addPositionModal").modal('show');
	}

	validate() {
		if (this.state.position == '') {
			toastr["error"]("Please input the position.");
			return false;
		}
		return true;
	}

	render() {

		let display_content = this.displayContent();

		return ( 
			<article id="job_position" className="clearfix">
				<h5>My Job Position:</h5>
				<div className="col-xs-10">
					{ display_content }
				</div>
				<div className="col-xs-2">
					<div className="row col-tb">
						<div className="col-sm-12 d-inline-block">
							<a href="javascript:void(0);" className="btn btn-bordered-info" onClick={this.onClickAddPosition}>
								<span className="fa fa-plus"></span> Add
							</a>
						</div>
					</div>
				</div>

				<div className="modal fade" id="addPositionModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">Add Position</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<div className="form-group">
									<TextInput type={'text'} field={'position'} className={'form-control'} placeholder={'Please input job position.'} initial={this.state.position} withValid={'true'} changed={ this.onChangeValue } />
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
		if (this.state.positions.length > 0) {
			this.state.positions.forEach((position, index) => {
				content.push(
					<div key={index} className="row col-tb">
						<div className="col-sm-3 d-inline-block">
							<span>{ position }</span>
						</div>
						<div className="col-sm-3 d-inline-block">
							<span>$ 10.00</span>
						</div>
						<div className="col-sm-3 d-inline-block action">
							<a href="javascript:void(0);" onClick={(e) => { this.onClickEditPosition(e, index) }}>
								<span className="fa fa-pencil-square-o"></span>
							</a>
							<a href="javascript:void(0);" onClick={(e) => { this.onClickDeletePosition(e, index) }}>
								<span className="text-danger fa fa-trash-o"></span>
							</a>
						</div>
					</div>
				);
			});
		} else {
			content.push(<div key={'i1'} className="row col-tb">No Job Positions</div>);
		}
		return content;
	}

}

JobPosition.propTypes = {
	positions: PropTypes.array,
	changeState: PropTypes.func,
};

export default JobPosition;
