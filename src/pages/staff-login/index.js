import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TextInput from '../../components/basic-textinput';
import SelectInput from '../../components/basic-selectinput';

import * as authActions from '../../actions/auth';

const mapDispatchToProps = (dispatch) => {
	return ({
		actions: bindActionCreators({...authActions}, dispatch),
	});
}

const mapStateToProps = (state) => {
	return ({
	});
}


class StaffLogin extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		}
		this.onChangeValue = this.onChangeValue.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.validate = this.validate.bind(this);
	}

	submitForm(e) {
		e.preventDefault();
		if (this.validate()) {
			let obj = {
				username: this.state.username,
				password: this.state.password
			}
			this.props.actions.logInStaff(obj).then((res) => {
				toastr["success"]("Staff login is done.");
				this.props.history.push("/dashboard");
			}).catch((err) => {
				toastr["error"]("Staff login failed.");
			});
		}
		
	}

	onChangeValue(field, val) {
		$('#btn_login').removeAttr('disabled');
		switch(field) {
			case 'username':
				val != 'not_valid' ? this.setState({ username: val }) : $('#btn_login').attr('disabled','disabled');
				break;
			case 'password':
				val != 'not_valid' ? this.setState({ password: val }) : $('#btn_login').attr('disabled','disabled');
				break;
		}
	}

	validate() {
		if (this.state.username == '' || this.state.password == '') {
			toastr["error"]("Staff Form validation error.");
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
							<h3>Exisiting Staff Login</h3>
							<form>
								<div className="form-group">
									<TextInput type={'text'} field={'username'} className={'form-control'} placeholder={'Username'} initial={''} withValid={'true'} changed={ this.onChangeValue } />
								</div>
								<div className="form-group">
									<TextInput type={'password'} field={'password'} className={'form-control'} placeholder={'Create Password'} initial={''} withValid={'true'} changed={ this.onChangeValue } />
								</div>
								<div className="form-group">
									<button id="btn_login" type="button" className="btn btn-info" onClick={ this.submitForm }>Login</button>
								</div>
							</form>
							<p>Not a member? <NavLink to="/staff/register" className="text-info">Register here</NavLink></p>
						</div>
					</div>
				</div>
			</section>
		);
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(StaffLogin);
