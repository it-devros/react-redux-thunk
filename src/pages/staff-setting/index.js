import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ContactUs from '../../components/contactus';
import SideBar from '../../components/sidebar';

import './style.scss';


const mapDispatchToProps = (dispatch) => {
	return ({
	});
}

const mapStateToProps = (state) => {
	return ({
	});
}


class StaffSetting extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	componentDidMount() {
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
												<label for="firstName" className="col-sm-3 control-label">First Name</label>
												<div className="col-sm-9">
													<input type="text" className="form-control" id="firstName" placeholder="First Name" />
												</div>
											</div>
											<div className="form-group">
												<label for="lastName" className="col-sm-3 control-label">Last Name</label>
												<div className="col-sm-9">
													<input type="text" className="form-control" id="lastName" placeholder="Last Name" />
												</div>
											</div>
											<div className="form-group">
												<label for="address" className="col-sm-3 control-label">Address</label>
												<div className="col-sm-9">
													<input type="text" className="form-control" id="address" placeholder="Address" />
												</div>
											</div>
											<div className="form-group">
												<label for="chPassword" className="col-sm-3 control-label">Change Password</label>
												<div className="col-sm-9">
													<input type="password" className="form-control" id="chPassword" placeholder="Password" />
												</div>
											</div>
											<div className="form-group text-center">
												<div className="col-sm-12">
													<button type="submit" className="btn btn-info btn-radius">Update Profile</button>
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