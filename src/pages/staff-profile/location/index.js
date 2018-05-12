import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import TextInput from '../../../components/basic-textinput';

import './style.scss';

class Location extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			location: this.props.location || 'no location',
		}
		this.onClickEditLocation = this.onClickEditLocation.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
		this.onChangeValue = this.onChangeValue.bind(this);
		this.validate = this.validate.bind(this);
		this.changeParentValues = this.changeParentValues.bind(this);
	}

	onClickEditLocation(e) {
		e.preventDefault();
		$("#editLocationModal").modal('show');
	}

	onChangeValue(field, val) {
		this.setState({ location: val });
	}

	onClickSave(e) {
		e.preventDefault();
		if (this.validate()) {
			$("#editLocationModal").modal('hide');
			this.changeParentValues();
		}
	}

	changeParentValues() {
		setTimeout(() => {
			let obj = this.state.location;
			this.props.changeState(obj);
		}, 500);
	}

	validate() {
		if (this.state.location == '') {
			toastr["error"]("Please input the location.");
			return false;
		}
		return true;
	}

	render() {
		return ( 
			<article id="location-d" className="clearfix">
				<h5>Location:</h5>
				<div className="col-xs-12">
					<div className="row col-tb">
						<div className="col-sm-6 d-inline-block">
							<span>{ this.state.location }</span>
						</div>
						<div className="col-sm-2 d-inline-block action">
							<a href="javascript:void(0);" onClick={this.onClickEditLocation}>
								<span className="fa fa-pencil-square-o"></span>
							</a>
						</div>
					</div>
				</div>
				<div className="modal fade" id="editLocationModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">Edit Location</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<div className="form-group">
									<TextInput type={'text'} field={'location'} className={'form-control'} placeholder={'Please input location.'} initial={this.state.location} withValid={'true'} changed={ this.onChangeValue } />
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

}

Location.propTypes = {
	location: PropTypes.array,
	changeState: PropTypes.func,
};

export default Location;
