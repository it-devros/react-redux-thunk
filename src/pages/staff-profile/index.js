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

import './style.scss';


const mapDispatchToProps = (dispatch) => {
	return ({
	});
}

const mapStateToProps = (state) => {
	return ({
	});
}


class StaffProfile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	componentDidMount() {
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
										<Availability />
										<SpecificDates />
										<JobPosition />      
										<Certificate />
										<Location />     
										<UploadPhoto />
										<Notification />
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