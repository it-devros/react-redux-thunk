import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ContactUs from '../../components/contactus';
import SideBar from '../../components/sidebar';

import * as memberActions from '../../actions/member';
import * as jobActions from '../../actions/job';

import default_user from '../../styles/images/avatar.png';
import './style.scss';


const mapDispatchToProps = (dispatch) => {
	return ({
		memberAct: bindActionCreators({...memberActions}, dispatch),
		jobAct: bindActionCreators({...jobActions}, dispatch),
	});
}

const mapStateToProps = (state) => {
	return ({
		user: state.auth.user,
		notCompletedJobs: state.job.notCompletedJobs,
		staffmembers: state.member.staffmembers,
	});
}


class AvailableStaffs extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
		this.onChangeRate = this.onChangeRate.bind(this);
		this.onChangeSelectJob = this.onChangeSelectJob.bind(this);
	}

	componentWillMount() {
		let obj = {
			user_id: this.props.user.id
		}
		this.props.jobAct.getJobsByEmployerNotComplete(obj).then((res) => {
			if (res) {
				toastr["success"]("Getting jobs success.");
			} else {
				toastr["warning"]("staff jobs not found.");
			}
		}).catch((err) => {
			toastr["error"]("Getting jobs error.");
		});
	}

	componentDidMount() {
		$("[class='rating']").rating({
			showClear: false,
			showCaption: false,
			filledStar: "<i class='fa fa-star'></i>",
			emptyStar: "<i class='fa fa-star-o'></i>"
		});
	}

	componentDidUpdate() {
		$("[class='rating']").rating({
			showClear: false,
			showCaption: false,
			filledStar: "<i class='fa fa-star'></i>",
			emptyStar: "<i class='fa fa-star-o'></i>"
		});
	}

	onChangeSelectJob(e) {
		e.preventDefault();
		if (e.target.value != 'Select a Job') {
			let obj = {
				job_id: e.target.value,
			}
			this.props.jobAct.getApplication(obj).then((res) => {
				if (res) {
					toastr["success"]("Getting application success.");
				} else {
					toastr["warning"]("Application not found.");
				}
			}).catch((err) => {
				toastr["error"]("Getting application error.");
			});
		}
	}

	onChangeRate(e, staff_id) {
		e.preventDefault();
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
									<h4 className="header">
										Available Staff
									</h4>
									<div className="panel-body">
										<div className="row">
											<div className="col-sm-6">
												<select id="job_list" className="form-control col-sm-6" onChange={this.onChangeSelectJob}>
													<option>Select a Job</option>
													{
														this.props.notCompletedJobs.map((job, index) => {
															return (
																<option key={index} value={job.id}>{ job.job_title }</option>
															);
														})
													}
												</select>
											</div>
										</div>
										<div className="row">

											{
												this.props.staffmembers.map((staff, index) => {
													return (
														<div key={index} className="col-md-6 staff-box mb-2">
															<div className="media p-2">
																<div className="media-left">
																	<a href="#">
																		<img className="media-object img-thumbnail" src={ staff.user.profile_image || default_user } alt="User Pic" />
																	</a>
																</div>
																<div className="media-body">
																	<h4 className="media-heading">{ staff.user.first_name } { staff.user.last_name }</h4>
																	<div className="review">
																		<input type="text" className="rating" data-size="xs" value={ staff.rate || 1 } onChange={(e) => { this.onChangeRate(e, staff.id) }} />
																	</div>
																	<div className="text-muted">$ 10/hours</div>
																	<span className="label label-info label-circle">Orthodontics</span>
																</div>
															</div>
														</div>
													);
												})
											}

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