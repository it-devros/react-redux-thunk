import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TextInput from '../../components/basic-textinput';
import SelectInput from '../../components/basic-selectinput';

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
			role: 3,
		}
		this.onChangeValue = this.onChangeValue.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	onChangeValue(field, val) {
		if (field == 'username') this.setState({ username: val });
		if (field == 'first_name') this.setState({ first_name: val });
		if (field == 'last_name') this.setState({ last_name: val });
		if (field == 'address') this.setState({ address: val });
		if (field == 'city') this.setState({ city: val });
		if (field == 'state') this.setState({ state: val });
		if (field == 'email') this.setState({ email: val });
		if (field == 'password') this.setState({ password: val });
		if (field == 'confirm_password') this.setState({ confirm_password: val });
	}

	submitForm(e) {
		e.preventDefault();
		toastr["success"]("Staff registration is done.");
	}

	validate() {

	}

	render() {

		let cityList = ['Delhi', 'New York', 'Kuala Lumpur'];
		let stateList = ['Delhi', 'New York', 'Kuala Lumpur'];

		return ( 
			<section>
				<div className="container">
					<div className="col-sm-5 col-center">
						<div className="well text-center white-bg m-0">
							<h3>New Staff Register</h3>
							<form>
								<div className="col-xs-12">
									<div className="form-group">
										<TextInput type={'text'} field={'username'} className={'form-control'} placeholder={'Username'} initial={''} withValid={'true'} changed={ this.onChangeValue } />
									</div>
									<div className="row">
										<div className="col-sm-6">
											<div className="form-group">
												<TextInput type={'text'} field={'first_name'} className={'form-control'} placeholder={'First Name'} initial={''} withValid={'true'} changed={ this.onChangeValue } />
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<TextInput type={'text'} field={'last_name'} className={'form-control'} placeholder={'Last Name'} initial={''} withValid={'true'} changed={ this.onChangeValue } />
											</div>
										</div>
									</div>
									<div className="form-group">
										<TextInput type={'text'} field={'address'} className={'form-control'} placeholder={'Address'} initial={''} withValid={'true'} changed={ this.onChangeValue } />
									</div>
									<div className="row">
										<div className="col-sm-6">
											<div className="form-group">
												<SelectInput field={'city'} className={'form-control'} changed={ this.onChangeValue } initial={''} withValid={'true'} label={'Select City'} data={cityList} />
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<SelectInput field={'state'} className={'form-control'} changed={ this.onChangeValue } initial={''} withValid={'true'} label={'Select State'} data={stateList} />
											</div>
										</div>
									</div>
									<div className="form-group">
										<TextInput type={'email'} field={'email'} className={'form-control'} placeholder={'Email'} initial={''} withValid={'true'} changed={ this.onChangeValue } />
									</div>
									<div className="row">
										<div className="col-sm-6">
											<div className="form-group">
												<TextInput type={'password'} field={'password'} className={'form-control'} placeholder={'Create Password'} initial={''} withValid={'true'} changed={ this.onChangeValue } />
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<TextInput type={'password'} field={'confirm_password'} className={'form-control'} placeholder={'Confirm Password'} initial={''} withValid={'true'} changed={ this.onChangeValue } />
											</div>
										</div>
									</div>
								</div>
								<div className="form-group">
									<button type="button" className="btn btn-info" onClick={ this.submitForm }>Register Now</button>
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

export default StaffRegister;
