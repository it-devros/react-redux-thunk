import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class ClientRegister extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return ( 
			<section>
				<div className="container">
					<div className="col-sm-5 col-center">
						<div className="well text-center white-bg m-0">
							<h3>New Client/Employeer Register</h3>
							<form>
								<div className="col-xs-12">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Username" />
									</div>
									<div className="row">
										<div className="col-sm-6">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="First Name" />
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Last Name" />
											</div>
										</div>
									</div>
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Address" />
									</div>
									<div className="row">
										<div className="col-sm-6">
											<div className="form-group">
												<select className="form-control">
													<option value="0">Select City</option>
												</select>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<select className="form-control">
													<option value="0">Select State</option>
												</select>
											</div>
										</div>
									</div>
									<div className="form-group">
										<input type="email" className="form-control" placeholder="Email" />
									</div>
									<div className="row">
										<div className="col-sm-6">
											<div className="form-group">
												<input type="password" className="form-control" placeholder="Create Password" />
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<input type="password" className="form-control" placeholder="Confirm Password" />
											</div>
										</div>
									</div>
								</div>
								<div className="form-group">
									<button type="submit" className="btn btn-info">Register Now</button>
								</div>
							</form>
							<p>Already Registered?
								<NavLink to="/client/login" className="text-info">click here</NavLink>
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}

}

export default ClientRegister;
