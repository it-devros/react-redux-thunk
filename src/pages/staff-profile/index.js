import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ContactUs from '../../components/contactus';
import SideBar from '../../components/sidebar';

import Availability from './availability';
import SpecificDates from './specificdates';
import JobPosition from './jobposition';
import Certificate from './certificate';
import Location from './location';
import UploadPhoto from './uploadphoto';
import Notification from './notification';

import * as authActions from '../../actions/auth';

import './style.scss';


const mapDispatchToProps = (dispatch) => {
	return ({
		authAct: bindActionCreators({...authActions}, dispatch),
	});
}

const mapStateToProps = (state) => {
	return ({
		userInfo: state.auth.userInfo,
	});
}


class StaffProfile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			availabilities: this.props.userInfo.availability,
			availability_dates: this.props.userInfo.availability_dates,
			job_positions: this.props.userInfo.job_position,
			certificates: this.props.userInfo.certificate,
			location: this.props.userInfo.location,

			sms: this.props.userInfo.sms,
			app: this.props.userInfo.app,
			email: this.props.userInfo.email,

			profile_image: this.props.userInfo.profile_image,
		}
		this.changeAvailability = this.changeAvailability.bind(this);
		this.changeAvailabilityDates = this.changeAvailabilityDates.bind(this);
		this.changeJobPositions = this.changeJobPositions.bind(this);
		this.changeCertificates = this.changeCertificates.bind(this);
		this.changeLocation = this.changeLocation.bind(this);
		this.changeNotification = this.changeNotification.bind(this);
		this.changeProfileImage = this.changeProfileImage.bind(this);
		this.saveStaffProfile = this.saveStaffProfile.bind(this);
	}

	changeAvailability(objList) {
		this.setState({ availabilities: objList });
		this.saveStaffProfile();
	}

	changeAvailabilityDates(objList) {
		this.setState({ availability_dates: objList });
		this.saveStaffProfile();
	}

	changeJobPositions(objList) {
		this.setState({ job_positions: objList });
		this.saveStaffProfile();
	}

	changeCertificates(objList) {
		this.setState({ certificates: objList });
		this.saveStaffProfile();
	}

	changeLocation(obj) {
		this.setState({ location: obj });
		this.saveStaffProfile();
	}

	changeNotification(sms, app, email) {
		this.setState({ sms: sms });
		this.setState({ app: app });
		this.setState({ email: email });
		this.saveStaffProfile();
	}

	changeProfileImage(profile_image) {
		this.setState({ profile_image: profile_image });
		this.saveStaffProfile();
	}

	saveStaffProfile() {
		setTimeout(() => {
			let obj = {
				id: this.props.userInfo.id,
				availability: this.state.availabilities,
				availability_dates: this.state.availability_dates,
				job_position: this.state.job_positions,
				certificate: this.state.certificates,
				location: this.state.location,
				sms: this.state.sms,
				app: this.state.app,
				email: this.state.email,
				profile_image: this.state.profile_image,
			}
			this.props.authAct.saveStaffProfile(obj).then((res) => {
				if (res) {
					toastr["success"]("updating staff profile success.");
				} else {
					toastr["warning"]("updating staff profile success but not interected.");
				}
			}).catch((err) => {
				toastr["error"]("updating staff profile error.");
			});
		}, 500);
	}

	render() {
		return ( 
			<div id="staff-profile-content">
				<section className="my-gray">
					<div className="container profile-setting">
						<div className="row">
							<div className="col-sm-4 form-group">
								<SideBar />
							</div>
							<div className="col-sm-8">
								<div className="well bg-svg box-shadow m-0">
									<h4 className="header">Personal Information</h4>
									<div className="panel-body">
										<Availability availabilities={this.state.availabilities} changeState={this.changeAvailability} />
										<SpecificDates availability_dates={this.state.availability_dates} changeState={this.changeAvailabilityDates} />
										<JobPosition positions={this.state.job_positions} changeState={this.changeJobPositions} />      
										<Certificate certificates={this.state.certificates} changeState={this.changeCertificates} />
										<Location location={this.state.location} changeState={this.changeLocation} />     
										<UploadPhoto profile_image={this.state.profile_image} changeState={this.changeProfileImage} />
										<Notification sms={this.state.sms} app={this.state.app} email={this.state.email} changeState={this.changeNotification} />
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

export default connect(mapStateToProps, mapDispatchToProps)(StaffProfile);