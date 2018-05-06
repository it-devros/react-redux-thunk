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


class StaffCheck extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	componentDidMount() {
	}

	render() {
		return ( 
			<div id="staff-check-content">
				<section className="my-gray">
					<div className="container profile-setting">
						<div className="row">
							<div className="col-sm-4 form-group">
								<SideBar />
							</div>
							<div className="col-sm-8">
								<div className="well bg-svg box-shadow m-0">
									<h4 className="header">Check In/Out</h4>
									<div className="panel-body">
										<form className="form-horizontal">
											<div className="form-group">
												<label for="job" className="col-sm-3 control-label">Select Job</label>
												<div className="col-sm-9">
													<select className="form-control">
														<option value="0">Job One</option>
														<option value="1">Job One</option>
														<option value="2">Job One</option>
														<option value="3">Job One</option>
													</select>
												</div>
											</div>
											<div className="form-group">
												<label for="job" className="col-sm-3 control-label">Check In</label>
												<div className="col-sm-9">
													<label className="switch">
														<input type="checkbox" checked />
														<span className="slider round"></span>
													</label>
												</div>
											</div>
											<div className="form-group">
												<div className="col-sm-9 col-sm-offset-3">
													<ul className="list-inline time">
														<li>
															<div className="well text-center">
																<div className="count">01</div>
																<div className="name">Hours</div>
															</div>
														</li>
														<li>
															<div className="well text-center">
																<div className="count">15</div>
																<div className="name">Minutes</div>
															</div>
														</li>
														<li>
															<div className="well text-center">
																<div className="count">20</div>
																<div className="name">Seconds</div>
															</div>
														</li>
													</ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(StaffCheck);