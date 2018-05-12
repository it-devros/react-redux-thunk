import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ContactUs from '../../components/contactus';
import SideBar from '../../components/sidebar';

import * as jobActions from '../../actions/job';

import default_img from '../../styles/images/default.png';
import './style.scss';

const mapDispatchToProps = (dispatch) => {
	return ({
		jobAct: bindActionCreators({...jobActions}, dispatch),
	});
}

const mapStateToProps = (state) => {
	return ({
		user: state.auth.user,
		latestJobs: state.job.latestJobs,
	});
}


class StaffNewJob extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isChecks: {},
		}
		this.onClickApply = this.onClickApply.bind(this);
		this.onClickDecline = this.onClickDecline.bind(this);
		this.onClickInterest = this.onClickInterest.bind(this);
	}

	componentWillMount() {
		let obj = {
			user_id: this.props.user.id
		}
		this.props.jobAct.getLatestJobs(obj).then((res) => {
			if (res) {
				toastr["success"]("Getting new Jobs success.");
			} else {
				toastr["warning"]("new Jobs not found.");
			}
		}).catch((err) => {
			toastr["error"]("Getting new Jobs error.");
		});
	}

	componentDidMount() {
		let obj = {}
		this.props.latestJobs.forEach((job, index) => {
			obj[index] = false;
		});
		this.setState({ isChecks: obj });
	}

	componentWillReceiveProps(newProps) {
		if (newProps.latestJobs && this.props.latestJobs != newProps.latestJobs) {
			let obj = {}
			newProps.latestJobs.forEach((job, index) => {
				obj[index] = false;
			});
			this.setState({ isChecks: obj });
		}
	}

	onClickApply(e, jobId, index) {
		e.preventDefault();
		let obj = {
			job_id: jobId,
			user_id: this.props.user.id
		}
		this.props.jobAct.applyToJob(obj).then((res) => {
			if (res) {
				toastr["success"]("Appling to job success.");
			} else {
				toastr["warning"]("Appling to job success but not interected because you already applied.");
			}
		}).catch((err) => {
			toastr["error"]("Appling to job failed.");
		});
	}

	onClickDecline(e, jobId, index) {
		e.preventDefault();
		let obj = Object.assign({}, this.state.isChecks);
		obj[index] = true;
		this.setState({ isChecks: obj });
	}

	onClickInterest(e, jobId, index) {
		e.preventDefault();
		let obj = Object.assign({}, this.state.isChecks);
		obj[index] = false;
		this.setState({ isChecks: obj });
	}

	render() {
		return ( 
			<div id="staff-newjob-content">
				<section className="my-gray">
					<div className="container profile-setting">
						<div className="row">
							<div className="col-sm-4 form-group">
								<SideBar />
							</div>
							<div className="col-sm-8">
								<div className="well bg-svg box-shadow m-0">
									<h4 className="header">Latest Jobs
										<span className="text-muted">({ this.props.latestJobs.length })</span>
									</h4>
									<div className="panel-body px-0">

										{
											this.props.latestJobs.map((job, index) => {
												return (
													<div key={index} className="well well-lg white-bg">
														<div className="jobs">
															<img src={ job.profile_picture || default_img } className="img-responsive" alt="default-image" />
															<div className="detail">
																<h4>{ job.job_title }</h4>
																<div className="company-name">{ job.employer.clinic_name || 'No Company Name' }</div>
																<div className="street">
																	<span className="fa fa-map-marker"></span> { job.job_location }
																</div>
																<div className="date">
																	<strong>
																		<span className="fa fa-calendar"></span> { job.days } { job.time.split(',').length > 1 ? job.time.split(',')[0] + ':00' + '~' + job.time.split(',')[1]  + ':00' : 'No Time'  } 
																	</strong>
																</div>
																{
																	this.state.isChecks[index] == false ?
																		<div>
																			<button className="btn btn-bordered-info" onClick={(e) => { this.onClickApply(e, job.id, index) }}>Available</button>
																			<button className="btn btn-bordered-danger" onClick={(e) => { this.onClickDecline(e, job.id, index) }}>Not Available</button>
																		</div>
																	: ""
																}
																{
																	this.state.isChecks[index] == true ?
																		<div>
																			<button className="btn btn-bordered-danger" onClick={(e) => { this.onClickInterest(e, job.id, index) }}>Interested to apply</button>
																		</div>
																	: ""
																}
																
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
				</section>
				<ContactUs />
			</div>
		);
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(StaffNewJob);