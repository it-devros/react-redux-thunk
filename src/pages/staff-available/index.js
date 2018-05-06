import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ContactUs from '../../components/contactus';
import SideBar from '../../components/sidebar';

import default_user from '../../styles/images/avatar.png';
import './style.scss';


const mapDispatchToProps = (dispatch) => {
	return ({
	});
}

const mapStateToProps = (state) => {
	return ({
	});
}


class AvailableStaffs extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	componentDidMount() {
		$("[class='rating']").rating({
			showClear: false,
			showCaption: false,
			filledStar: "<i class='fa fa-star'></i>",
			emptyStar: "<i class='fa fa-star-o'></i>"
		});
	}

	render() {
		return ( 
			<div id="staff-available-content">
				<section className="my-gray">
					<div className="container profile-setting">
						<div className="row">
							<div className="col-sm-4 form-group">
								<SideBar />
							</div>
							<div className="col-sm-8">
								<div className="well bg-svg box-shadow m-0">
									<h4 className="header">Available Staff</h4>
									<div className="panel-body">
										<div className="row">

											<div className="col-md-6 staff-box mb-2">
												<div className="media p-2">
													<div className="media-left">
														<a href="#">
															<img className="media-object img-thumbnail" src={default_user} alt="User Pic" />
														</a>
													</div>
													<div className="media-body">
														<h4 className="media-heading">User Name</h4>
														<div className="review">
															<input type="text" className="rating" data-size="xs" value="4" />
														</div>
														<div className="text-muted">$ 10/hours</div>
														<span className="label label-info label-circle">Orthodontics</span>
													</div>
												</div>
											</div>

											<div className="col-md-6 staff-box mb-2">
												<div className="media p-2">
													<div className="media-left">
														<a href="#">
															<img className="media-object img-thumbnail" src={default_user} alt="User Pic" />
														</a>
													</div>
													<div className="media-body">
														<h4 className="media-heading">User Name</h4>
														<div className="review">
															<input type="text" className="rating" data-size="xs" value="4" />
														</div>
														<div className="text-muted">$ 10/hours</div>
														<span className="label label-info label-circle">Orthodontics</span>
													</div>
												</div>
											</div>

											<div className="col-md-6 staff-box mb-2">
												<div className="media p-2">
													<div className="media-left">
														<a href="#">
															<img className="media-object img-thumbnail" src={default_user} alt="User Pic" />
														</a>
													</div>
													<div className="media-body">
														<h4 className="media-heading">User Name</h4>
														<div className="review">
															<input type="text" className="rating" data-size="xs" value="4" />
														</div>
														<div className="text-muted">$ 10/hours</div>
														<span className="label label-info label-circle">Orthodontics</span>
													</div>
												</div>
											</div>

											<div className="col-md-6 staff-box mb-2">
												<div className="media p-2">
													<div className="media-left">
														<a href="#">
															<img className="media-object img-thumbnail" src={default_user} alt="User Pic" />
														</a>
													</div>
													<div className="media-body">
														<h4 className="media-heading">User Name</h4>
														<div className="review">
															<input type="text" className="rating" data-size="xs" value="4" />
														</div>
														<div className="text-muted">$ 10/hours</div>
														<span className="label label-info label-circle">Orthodontics</span>
													</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AvailableStaffs);