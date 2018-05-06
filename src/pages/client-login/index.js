import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class ClientLogin extends React.Component {

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
							<h3>Exisiting Client/Employeer Login</h3>
							<form>
								<div className="form-group">
									<input type="email" className="form-control" placeholder="Email" />
								</div>
								<div className="form-group">
									<input type="password" className="form-control" placeholder="Password" />
								</div>
								<div className="form-group">
									<button type="submit" className="btn btn-info">Login</button>
								</div>
							</form>
							<p>Not a member? <NavLink to="/client/register" className="text-info">Register here</NavLink></p>
						</div>
					</div>
				</div>
			</section>
		);
	}

}

export default ClientLogin;
