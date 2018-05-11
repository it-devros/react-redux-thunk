import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TextInput from '../../components/basic-textinput';
import SelectInput from '../../components/basic-selectinput';

import * as authActions from '../../actions/auth';
import * as commonActions from '../../actions/common';


const mapDispatchToProps = (dispatch) => {
	return ({
		authAct: bindActionCreators({...authActions}, dispatch),
		commonAct: bindActionCreators({...commonActions}, dispatch),
	});
}

const mapStateToProps = (state) => {
	return ({
		states: state.common.states,
		countries: state.common.countries,
	});
}


class StaffRegister extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			first_name: '',
			last_name: '',
			email: '',
			password: '',
			confirm_password: '',
			address: '',
			city: '',
			state: '',
			country: '',
		}
		this.onChangeValue = this.onChangeValue.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.validate = this.validate.bind(this);
	}

	componentWillMount() {
		this.props.commonAct.getCountries().then((res) => {
		}).catch((err) => {
			toastr["error"]("getting countries error.");
		});
	}

	onChangeValue(field, val) {
		$('#btn_register').removeAttr('disabled');
		switch(field) {
			case 'username':
				val != 'not_valid' ? this.setState({ username: val }) : $('#btn_register').attr('disabled','disabled');
				break;
			case 'first_name':
				val != 'not_valid' ? this.setState({ first_name: val }) : $('#btn_register').attr('disabled','disabled');
				break;
			case 'last_name':
				val != 'not_valid' ? this.setState({ last_name: val }) : $('#btn_register').attr('disabled','disabled');
				break;
			case 'address':
				val != 'not_valid' ? this.setState({ address: val }) : $('#btn_register').attr('disabled','disabled');
				break;
			case 'city':
				val != 'not_valid' ? this.setState({ city: val }) : $('#btn_register').attr('disabled','disabled');
				break;
			case 'state':
				val != 'not_valid' ? this.setState({ state: val }) : $('#btn_register').attr('disabled','disabled');
				break;
			case 'country':
				val != 'not_valid' ? this.setState({ country: val }) : $('#btn_register').attr('disabled','disabled');
				break;
			case 'email':
				val != 'not_valid' ? this.setState({ email: val }) : $('#btn_register').attr('disabled','disabled');
				break;
			case 'password':
				val != 'not_valid' ? this.setState({ password: val }) : $('#btn_register').attr('disabled','disabled');
				break;
			case 'confirm_password':
				val != 'not_valid' ? this.setState({ confirm_password: val }) : $('#btn_register').attr('disabled','disabled');
				break;
		}

		if (field == 'country') {
			let obj = {
				country_id: val
			}
			this.props.commonAct.getStates(obj).then((res) => {
			}).catch((err) => {
				toastr["error"]("getting states error.");
			});
		}
	}

	submitForm(e) {
		e.preventDefault();
		if(this.validate()) {
			let obj = {
				username: this.state.username,
				first_name: this.state.first_name,
				last_name: this.state.last_name,
				email: this.state.email,
				password: this.state.password,
				confirm_password: this.state.confirm_password,
				address: this.state.address,
				city: this.state.city,
				state: this.state.state,
				country: this.state.country,
				role_id: 3
			}
			this.props.authAct.register(obj).then((res) => {
				toastr["success"]("Staff registration is done.");
			}).catch((err) => {
				toastr["error"]("Staff registration error.");
			});
		}
	}

	validate() {
		if (this.state.username == '' || this.state.first_name == '' || this.state.last_name == '' || this.state.email == '' || this.state.password == '' || this.state.confirm_password == '' || this.state.address == '' || this.state.city == '' || this.state.state == '' || this.state.country == '') {
			toastr["error"]("Staff Form validation error. Fill all fields.");
			return false;
		}
		if (this.state.password != this.state.confirm_password) {
			toastr["error"]("Password not same");
			return false;
		}
		return true;
	}

	render() {

		return ( 
			<section>
				<div className="container">
					<div className="col-sm-5 col-center">
						<div className="well text-center white-bg m-0">
							<h3>New Staff Register</h3>
							<form>
								<div className="col-xs-12">
									<div className="form-group">
										<TextInput type={'text'} field={'username'} className={'form-control'} placeholder={'Username'} initial={this.state.username} withValid={'true'} changed={ this.onChangeValue } />
									</div>
									<div className="row">
										<div className="col-sm-6">
											<div className="form-group">
												<TextInput type={'text'} field={'first_name'} className={'form-control'} placeholder={'First Name'} initial={this.state.first_name} withValid={'true'} changed={ this.onChangeValue } />
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<TextInput type={'text'} field={'last_name'} className={'form-control'} placeholder={'Last Name'} initial={this.state.last_name} withValid={'true'} changed={ this.onChangeValue } />
											</div>
										</div>
									</div>
									<div className="form-group">
										<TextInput type={'text'} field={'address'} className={'form-control'} placeholder={'Address'} initial={this.state.address} withValid={'true'} changed={ this.onChangeValue } />
									</div>
									<div className="form-group">
										<TextInput type={'text'} field={'city'} className={'form-control'} placeholder={'City'} initial={this.state.city} withValid={'true'} changed={ this.onChangeValue } />
									</div>
									<div className="row">
										<div className="col-sm-6">
											<div className="form-group">
												<SelectInput field={'state'} className={'form-control'} changed={ this.onChangeValue } initial={this.state.state} withValid={'true'} label={'Select State'} data={this.props.states} />
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<SelectInput field={'country'} className={'form-control'} changed={ this.onChangeValue } initial={this.state.country} withValid={'true'} label={'Select Country'} data={this.props.countries} />
											</div>
										</div>
									</div>
									<div className="form-group">
										<TextInput type={'email'} field={'email'} className={'form-control'} placeholder={'Email'} initial={this.state.email} withValid={'true'} changed={ this.onChangeValue } />
									</div>
									<div className="row">
										<div className="col-sm-6">
											<div className="form-group">
												<TextInput type={'password'} field={'password'} className={'form-control'} placeholder={'Create Password'} initial={this.state.password} withValid={'true'} changed={ this.onChangeValue } />
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<TextInput type={'password'} field={'confirm_password'} className={'form-control'} placeholder={'Confirm Password'} initial={this.state.confirm_password} withValid={'true'} changed={ this.onChangeValue } />
											</div>
										</div>
									</div>
								</div>
								<div className="form-group">
									<button id="btn_register" type="button" className="btn btn-info" onClick={ this.submitForm }>Register Now</button>
								</div>
							</form>
							<p>Already Registered?
								<NavLink to="/staff/login" className="text-info">click here</NavLink>
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(StaffRegister);
