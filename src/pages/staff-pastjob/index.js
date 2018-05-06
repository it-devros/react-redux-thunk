import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ContactUs from '../../components/contactus';
import SideBar from '../../components/sidebar';

import default_img from '../../styles/images/default.png';
import './style.scss';

const mapDispatchToProps = (dispatch) => {
	return ({
	});
}

const mapStateToProps = (state) => {
	return ({
	});
}


class StaffPastJob extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return ( 
			<div id="staff-pastjob-content">
				<section className="my-gray">
					<div className="container profile-setting">
						<div className="row">
							<div className="col-sm-4 form-group">
								<SideBar />
							</div>
							<div className="col-sm-8">
								<div className="well bg-svg box-shadow m-0">
									<h4 className="header">Post Jobs <span className="text-muted">(3)</span></h4>
									<div className="panel-body px-0">
										<div className="well well-lg white-bg">
											<div className="jobs">
												<img src={default_img} className="img-responsive" alt="default-image"/>
												<div className="detail">
													<h4>Medical Professed Required MBBS Part2</h4>
													<div className="company-name">Lasmoix.Ltd</div>
													<div className="street">
														<span className="fa fa-map-marker"></span> Church Street, London, United Kingdom
													</div>
													<div className="date">
														<strong>
															<span className="fa fa-calendar"></span> Apr 3, 2018 ( 10 AM - 03 PM )
														</strong>
													</div>
													<button className="btn btn-bordered-info">Post Reviews</button>
													<button className="btn btn-bordered-info">Confirm Hours</button>
												</div>
											</div>
										</div>
										<div className="well well-lg white-bg">
											<div className="jobs">
												<img src={default_img} className="img-responsive" alt="default-image"/>
												<div className="detail">
													<h4>Medical Professed Required MBBS Part2</h4>
													<div className="company-name">Lasmoix.Ltd</div>
													<div className="street">
														<span className="fa fa-map-marker"></span> Church Street, London, United Kingdom
													</div>
													<div className="date">
														<strong>
															<span className="fa fa-calendar"></span> Apr 3, 2018 ( 10 AM - 03 PM )
														</strong>
													</div>
													<button className="btn btn-bordered-info">Post Reviews</button>
													<button className="btn btn-bordered-info">Confirm Hours</button>
												</div>
											</div>
										</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(StaffPastJob);