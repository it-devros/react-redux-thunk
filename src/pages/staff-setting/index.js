import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ContactUs from '../../components/contactus';
import SideBar from '../../components/sidebar';

import TextInput from '../../components/basic-textinput';
import SelectInput from '../../components/basic-selectinput';

import * as authActions from '../../actions/auth';

import './style.scss';


const mapDispatchToProps = (dispatch) => {
	return ({
		actions: bindActionCreators({...authActions}, dispatch),
	});
}

const mapStateToProps = (state) => {
	return ({
		user: state.auth.user,
	});
}


class StaffSetting extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			first_name: this.props.user.first_name || '',
			last_name: this.props.user.last_name || '',
			password: '',
			address:  this.props.user.address || '',
		}
		this.onChangeValue = this.onChangeValue.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.validate = this.validate.bind(this);
	}

	onChangeValue(field, val) {
		$('#btn_update').removeAttr('disabled');
		switch(field) {
			case 'first_name':
				val != 'not_valid' ? this.setState({ first_name: val }) : $('#btn_update').attr('disabled','disabled');
				break;
			case 'last_name':
				val != 'not_valid' ? this.setState({ last_name: val }) : $('#btn_update').attr('disabled','disabled');
				break;
			case 'address':
				val != 'not_valid' ? this.setState({ address: val }) : $('#btn_update').attr('disabled','disabled');
				break;
			case 'password':
				val != 'not_valid' ? this.setState({ password: val }) : $('#btn_update').attr('disabled','disabled');
				break;
		}
	}

	submitForm(e) {
		e.preventDefault();
		if(this.validate()) {
			let obj = Object.assign({}, this.props.user);
			obj.first_name = this.state.first_name;
			obj.last_name = this.state.last_name;
			obj.password = this.state.password;
			obj.address = this.state.address;
			this.props.actions.updateStaffUser(obj).then((res) => {
				toastr["success"]("Staff settings updated.");
			}).catch((err) => {
				toastr["error"]("Staff settings updating error.");
			});
		}
	}

	validate() {
		if (this.state.first_name == '' || this.state.last_name == '' || this.state.password == '' || this.state.address == '') {
			toastr["error"]("Staff Settings Form validation error. Fill all fields.");
			return false;
		}
		return true;
	}



	render() {
		return ( 
			<div id="staff-setting-content">
				<section className="my-gray">
					<div className="container profile-setting">
						<div className="row">
							<div className="col-sm-4 form-group">
								<SideBar />
							</div>
							<div className="col-sm-8">
								<div className="well bg-svg box-shadow m-0">
									<h4 className="header">Settings</h4>
									<div className="panel-body">
										<form className="form-horizontal">
											<div className="form-group">
												<label htmlFor="firstName" className="col-sm-3 control-label">First Name</label>
												<div className="col-sm-9">
													<TextInput type={'text'} field={'first_name'} className={'form-control'} placeholder={'First Name'} initial={this.state.first_name} withValid={'true'} changed={ this.onChangeValue } />
												</div>
											</div>
											<div className="form-group">
												<label htmlFor="lastName" className="col-sm-3 control-label">Last Name</label>
												<div className="col-sm-9">
													<TextInput type={'text'} field={'last_name'} className={'form-control'} placeholder={'Last Name'} initial={this.state.last_name} withValid={'true'} changed={ this.onChangeValue } />
												</div>
											</div>
											<div className="form-group">
												<label htmlFor="address" className="col-sm-3 control-label">Address</label>
												<div className="col-sm-9">
													<TextInput type={'text'} field={'address'} className={'form-control'} placeholder={'Address'} initial={this.state.address} withValid={'true'} changed={ this.onChangeValue } />
												</div>
											</div>
											<div className="form-group">
												<label htmlFor="chPassword" className="col-sm-3 control-label">Change Password</label>
												<div className="col-sm-9">
													<TextInput type={'password'} field={'password'} className={'form-control'} placeholder={'Create Password'} initial={''} withValid={'true'} changed={ this.onChangeValue } />
												</div>
											</div>
											<div className="form-group text-center">
												<div className="col-sm-12">
													<button id="btn_update" type="submit" className="btn btn-info btn-radius" onClick={ this.submitForm }>Update Profile</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<ContactUs />
			</div>
		);
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(StaffSetting);