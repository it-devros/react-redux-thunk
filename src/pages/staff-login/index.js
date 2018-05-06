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
			email: '',
			password: '',
		}
		this.onChangeValue = this.onChangeValue.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	submitForm(e) {
		e.preventDefault();
		let obj = {};
		this.props.actions.logIn(obj);
		toastr["success"]("Staff login is done.");
		this.props.history.push("/home");
	}

	onChangeValue(field, val) {
		if (field == 'email') this.setState({ email: val });
		if (field == 'password') this.setState({ password: val });
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
									<TextInput type={'email'} field={'email'} className={'form-control'} placeholder={'Email'} initial={''} withValid={'true'} changed={ this.onChangeValue } />
								</div>
								<div className="form-group">
									<TextInput type={'password'} field={'password'} className={'form-control'} placeholder={'Create Password'} initial={''} withValid={'true'} changed={ this.onChangeValue } />
								</div>
								<div className="form-group">
									<button type="button" className="btn btn-info" onClick={ this.submitForm }>Login</button>
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
