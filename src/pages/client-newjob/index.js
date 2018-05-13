import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ContactUs from '../../components/contactus';
import SideBar from '../../components/sidebar';

import TextInput from '../../components/basic-textinput';
import SelectInput from '../../components/basic-selectinput';

import * as jobActions from '../../actions/job';

import default_img from '../../styles/images/default.png';
import './style.scss';

const mapDispatchToProps = (dispatch) => {
	return ({
		actions: bindActionCreators({...jobActions}, dispatch),	
	});
}

const mapStateToProps = (state) => {
	return ({
		user: state.auth.user,
		userInfo: state.auth.userInfo,
		jobSkills: state.job.jobSkills,
	});
}


class ClientNewJob extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			locations: ['first',],
			skillList: [],
			dayList: [{ val: 'Monday', checked: false }, { val: 'Tuesday', checked: false }, { val: 'Wednesday', checked: false }, { val: 'Thursday', checked: false }, { val: 'Friday', checked: false }, { val: 'Saturday', checked: false }, { val: 'Sunday', checked: false }],
			days: [],
			isSchedule: true,
			isSpecific: false,


			title: '',
			start_time: '',
			end_time: '',
			jobLocations: {},
			specifc_date: '',
		}
		this.onChangeValue = this.onChangeValue.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.validate = this.validate.bind(this);
		this.addLocation = this.addLocation.bind(this);
		this.onChangeSkills = this.onChangeSkills.bind(this);
		this.onChangeDay = this.onChangeDay.bind(this);
		this.onChangeScheduleType = this.onChangeScheduleType.bind(this);
		this.removeLocation = this.removeLocation.bind(this);
		this.onChangeSpecificDate = this.onChangeSpecificDate.bind(this);
	}

	componentWillMount() {
		this.props.actions.getJobSkills().then((res) => {
		}).catch((err) => {
			toastr["error"]("getting skills failed.");
		});
	}

	componentDidMount() {
		let objList = [];
		this.props.jobSkills.forEach((skill) => {
			objList.push({ id: skill.category, val: skill.category, checked: false });
		});
		this.setState({ skillList: objList });
		$('#datetime_picker').datetimepicker();
	}

	componentDidUpdate() {
		$('#datetime_picker').datetimepicker();
	}

	componentWillReceiveProps(newProps) {
		if (this.props.jobSkills.length != newProps.jobSkills.length) {
			let objList = [];
			newProps.jobSkills.forEach((skill) => {
				objList.push({ id: skill.category, val: skill.category, checked: false });
			});
			this.setState({ skillList: objList });
		}
	}

	submitForm(e) {
		e.preventDefault();
		if (this.validate()) {
			let skills = [];
			this.state.skillList.forEach((skill) => {
				if (skill.checked) skills.push(skill.val);
			});
			let locations = [];
			for(let key in this.state.jobLocations) {
				locations.push(this.state.jobLocations[key]);
			}
			
			let obj = {
				job_title: this.state.title,
				skills_required: skills,
				job_location: locations,
				employers_id: this.props.userInfo.id,
				time: [this.state.start_time.split(':')[0], this.state.end_time.split(':')[0]],
			}
			if (this.state.isSchedule) {
				obj.schedule_type = 0;
				let days = [];
				this.state.dayList.forEach((day) => {
					if (day.checked) days.push(day.val);
				});
				obj.days = days;
			}
			if (this.state.isSpecific) {
				obj.schedule_type = 1;
				obj.days = [];
				obj.days.push($("#specific_date").val());
				obj.specifc_date = $("#specific_date").val();
			}
			this.props.actions.postNewJob(obj).then((res) => {
				if (res) {
					toastr["success"]("Posting new job success.");
					this.setState({locations: [1,]});
					this.setState({dayList: [{ val: 'Monday', checked: false }, { val: 'Tuesday', checked: false }, { val: 'Wednesday', checked: false }, { val: 'Thursday', checked: false }, { val: 'Friday', checked: false }, { val: 'Saturday', checked: false }, { val: 'Sunday', checked: false }]});
					this.setState({days: []});
					this.setState({isSchedule: true});
					this.setState({isSpecific: false});
					this.setState({title: ''});
					this.setState({start_time: ''});
					this.setState({end_time: ''});
					this.setState({jobLocations: {}});
					this.setState({ specifc_date: '' });
					let objList = [];
					this.props.jobSkills.forEach((skill) => {
						objList.push({ id: skill.category, val: skill.category, checked: false });
					});
					this.setState({ skillList: objList });
				} else {
					toastr["warning"]("Posting new job processed but not saved.");
				}
			}).catch((err) => {
				toastr["error"]("Posting new job failed.");
			});
		}
	}

	onChangeValue(field, val) {
		$('#btn_post').removeAttr('disabled');
		switch(field) {
			case 'title':
				val != 'not_valid' ? this.setState({ title: val }) : $('#btn_post').attr('disabled','disabled');
				break;
			case 'start_time':
				val != 'not_valid' ? this.setState({ start_time: val }) : $('#btn_post').attr('disabled','disabled');
				break;
			case 'end_time':
				val != 'not_valid' ? this.setState({ end_time: val }) : $('#btn_post').attr('disabled','disabled');
				break;
		}
		if (field.indexOf('location') > -1) {
			let objList = Object.assign({}, this.state.jobLocations);
			this.state.locations.forEach((location, index) => {
				if (field == 'location' + location) {
					objList['location' + location] =val;
				} 
			});
			this.setState({ jobLocations: objList });
		}
	}

	onChangeSpecificDate(e) {
		e.preventDefault();
		console.log(e.target.value);
		this.setState({ specifc_date: e.target.value });
	}

	addLocation(e) {
		e.preventDefault();
		let nowLength = this.state.locations.length;
		let locations = Object.assign([], this.state.locations);
		let str = '';
		locations.forEach((local) => {
			str += local;
		});
		str += 'newone';
		locations.push(str);
		this.setState({ locations: locations });
	}

	removeLocation(e, location, index) {
		e.preventDefault();
		if (this.state.locations.length > 1) {
			let currentLocations = Object.assign([], this.state.locations);
			let newLocations = [];
			currentLocations.forEach((loca, ind) => {
				if (loca != location) {
					newLocations.push(loca);
				}
			});
			this.setState({ locations: newLocations });
			let currentJobLocals = Object.assign([], this.state.jobLocations);
			let newJobLocals = {};
			newLocations.forEach((loca, index) => {
				newJobLocals['location' + loca] = currentJobLocals['location' + loca];
			});
			this.setState({ jobLocations: newJobLocals });
		}	
	}

	onChangeSkills(e, id) {
		let objList = [];
		this.state.skillList.forEach((skill, index) => {
			let temp = Object.assign({}, skill);
			if (skill.id == id) {
				temp.checked = e.target.checked;
			}
			objList.push(temp);
		});
		this.setState({ skillList: objList });
	}

	onChangeDay(e, val) {
		let objList = [];
		this.state.dayList.forEach((day, index) => {
			let temp = Object.assign({}, day);
			if (day.val == val) {
				temp.checked = e.target.checked;
			}
			objList.push(temp);
		});
		this.setState({ dayList: objList });
	}

	onChangeScheduleType(e, type) {
		this.setState({ days: [] });
		this.setState({ dayList: [{ val: 'Monday', checked: false }, { val: 'Tuesday', checked: false }, { val: 'Wednesday', checked: false }, { val: 'Thursday', checked: false }, { val: 'Friday', checked: false }, { val: 'Saturday', checked: false }, { val: 'Sunday', checked: false }] });

		if (type == 'schedule') {
			this.setState({ isSchedule: e.target.checked });
			let pastStatus = this.state.isSpecific;
			this.setState({ isSpecific: !pastStatus });
		}
		if (type == 'specific') {
			this.setState({ isSpecific: e.target.checked });
			let pastStatus = this.state.isSchedule;
			this.setState({ isSchedule: !pastStatus });
		}
	}

	validate() {
		if (this.state.title == '') {
			toastr["error"]("Job Form validation error.");
			return false;
		}
		if (this.state.isSchedule) {
			if (this.state.start_time == '' || this.state.end_time == '') {
				toastr["error"]("Please input the time");
				return false
			}
			let flag_days = 0;
			this.state.dayList.forEach((day) => {
				if (day.checked) flag_days += 1;
			});
			if (flag_days == 0) {
				toastr["error"]("Please select the day.");
				return false;
			}
		}
		if (this.state.isSpecific) {
			if ($("#specific_date").val() == '' || this.state.start_time == '' || this.state.end_time == '') {
				toastr["error"]("Please input the specific date");
				return false;
			}
		}
		return true;
	}

	render() {

		let timeList = [{id:'00:00', name:'00:00'}, {id:'01:00', name:'01:00'}, {id:'02:00', name:'02:00'}, {id:'03:00', name:'03:00'}, {id:'04:00', name:'04:00'}, {id:'05:00', name:'05:00'}, {id:'06:00', name:'06:00'}, {id:'07:00', name:'07:00'}, {id:'08:00', name:'08:00'}, {id:'09:00', name:'09:00'}, {id:'10:00', name:'10:00'}, {id:'11:00', name:'11:00'}, {id:'12:00', name:'12:00'}, {id:'13:00', name:'13:00'}, {id:'14:00', name:'14:00'}, {id:'15:00', name:'15:00'}, {id:'16:00', name:'16:00'}, {id:'17:00', name:'17:00'}, {id:'18:00', name:'18:00'}, {id:'19:00', name:'19:00'}, {id:'20:00', name:'20:00'}, {id:'21:00', name:'21:00'}, {id:'22:00', name:'22:00'}, {id:'23:00', name:'23:00'}, ];

		return ( 
			<div id="client-newjob-content">
				<section className="my-gray">
					<div className="container profile-setting">
						<div className="row">
							<div className="col-sm-4 form-group">
								<SideBar />
							</div>
							<div className="col-sm-8">
								<div className="well bg-svg box-shadow m-0">
									<h4 className="header">Post Jobs
										<span className="text-muted"></span>
									</h4>
									<div className="panel-body px-0">
										<form id="job_form" className="form-horizontal">
											<div className="form-group">
												<label htmlFor="jobTitle" className="col-sm-3 control-label">Job Title:</label>
												<div className="col-sm-9">
													<TextInput type={'text'} field={'title'} className={'form-control'} placeholder={'Job Title'} initial={this.state.title} withValid={'true'} changed={ this.onChangeValue } />
												</div>
											</div>
											<div className="form-group">
												<label className="col-sm-3 control-label">Skill Required:</label>
												<div className="col-sm-9">
													{
														this.state.skillList.map((skill, index) => {
															return (
																<label key={index} className="checkbox-inline">
																	<input type="checkbox" id={"inlineCheckbox" + index} checked={skill.checked} onChange={(e) => {this.onChangeSkills(e, skill.id)}} />{skill.val}
																</label>
															);
														})
													}
												</div>
											</div>
											<div className="form-group">
												<label htmlFor="locationJob" className="col-sm-3 control-label">Location For Job:</label>
												<div id="location_div" className="col-sm-7">
													{
														this.state.locations.map((location, index) => {
															return (
																<div key={'location' + index}>
																	<div className="col-sm-10 no-padding">
																		<TextInput type={'text'} field={'location' + location} className={'form-control m-b-15'} placeholder={'location'} initial={this.state.jobLocations['location' + location]} withValid={'true'} changed={ this.onChangeValue } />
																	</div>
																	<div className="col-sm-2">
																		<button className="btn btn-bordered-info btn-radius" onClick={(e) => {this.removeLocation(e, location, index)}}>
																			<span className="fa fa-remove"></span>
																		</button>
																	</div>
																</div>
															);
														})
													}
												</div>
												<div className="col-sm-2 text-center">
													<button className="btn btn-bordered-info btn-radius" onClick={this.addLocation}>
														<span className="fa fa-plus"></span> Add New
													</button>
												</div>
											</div>
											<div className="form-group">
												<label htmlFor="locationJob" className="col-sm-3 control-label">Date For Job:</label>
												<div className="col-sm-3">
													<label className="radio-inline">
														<input type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked={this.state.isSchedule} onChange={(e) => {
															this.onChangeScheduleType(e, 'schedule')}} /> General Schedule
													</label>
													<div className="mt-1">
														{
															this.state.dayList.map((day, index) => {
																return (
																	<div key={index} className="checkbox">
																		<label>
																			<input type="checkbox" checked={day.checked} onChange={(e) => {this.onChangeDay(e, day.val)}} /> {day.val}
																		</label>
																	</div>
																);
															})
														}
													</div>
												</div>
												<div className="col-sm-5">
													<label className="radio-inline">
														<input type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2" checked={this.state.isSpecific} onChange={(e) => {this.onChangeScheduleType(e, 'specific')}} /> Specific Date
													</label>
													<div className="col-xs-12 mt-2">
														{
															this.state.isSpecific ?
																<div className="row">
																	<div className="col-xs-12" style={{ marginBottom: '10px' }}>
																		<div id="datetime_picker" className="input-group input-append date">
																			<input id="specific_date" type="text" className="form-control" readOnly />
																			<div className="input-group-addon">
																				<span className="glyphicon glyphicon-th"></span>
																			</div>
																		</div>
																	</div>
																</div>
															: ""
														}
														<div className="row">
															<div className="col-xs-6">
																<label className="sr-only" htmlFor="startTime">Start Time</label>
																<SelectInput field={'start_time'} className={'form-control'} changed={ this.onChangeValue } initial={this.state.start_time} withValid={'true'} label={'Start Time'} data={timeList} />
															</div>
															<div className="col-xs-6">
																<label className="sr-only" htmlFor="endTime">End Time</label>
																<SelectInput field={'end_time'} className={'form-control'} changed={ this.onChangeValue } initial={this.state.end_time} withValid={'true'} label={'End Time'} data={timeList} />
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="form-group">
												<div className="col-sm-12 text-center">
													<button id="btn_post" className="btn btn-info btn-radius" onClick={this.submitForm}>Post Job</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ClientNewJob);