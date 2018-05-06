import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import temp_avatar from '../../styles/images/avatar.png';

import * as authActions from '../../actions/auth';

const mapDispatchToProps = (dispatch) => {
	return ({
		actions: bindActionCreators({...authActions}, dispatch),
	});
}

const mapStateToProps = (state) => {
	return ({
	});
}

class SideBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
		this.clickLogOut = this.clickLogOut.bind(this);
	}

	clickLogOut(e) {
		e.preventDefault();
		this.props.actions.logOut();
		toastr["success"]("Staff logout is done.");
		this.props.history.push("/home");
	}

	render() {
		return ( 
			<div>
				<div className="well white-bg box-shadow">
					<div className="user">
						<img src={ temp_avatar } className="circle" />
						<small>Hello,</small>
						<div className="name">User Name</div>
					</div>
				</div>

				<div className="well white-bg box-shadow p-0 m-0">
					<div className="list-group m-0">
						<NavLink to="/profile" className="list-group-item text-uppercase">
							<span className="fa fa-user fa-fw"></span> profile
						</NavLink>
						<NavLink to="/newjob" className="list-group-item text-uppercase">
							<span className="fa fa-briefcase fa-fw"></span> new jobs
						</NavLink>
						<NavLink to="/staffs" className="list-group-item text-uppercase">
							<span className="fa fa-users fa-fw"></span> available staff
						</NavLink>
						<NavLink to="/pastjob" className="list-group-item text-uppercase">
							<span className="fa fa-file-text-o fa-fw"></span> past jobs
						</NavLink>
						<NavLink to="/review" className="list-group-item text-uppercase">
							<span className="fa fa-star fa-fw"></span> my reviews
						</NavLink>
						<NavLink to="/settings" className="list-group-item text-uppercase">
							<span className="fa fa-sliders fa-fw"></span> settings
						</NavLink>
						<NavLink to="/check" className="list-group-item text-uppercase">
							<span className="fa fa-clock-o fa-fw"></span> check in/out
						</NavLink>
						<a href="javascript:void;" onClick={ this.clickLogOut } className="list-group-item text-uppercase">
							<span className="fa fa-power-off fa-fw"></span> logout
						</a>
					</div>
				</div>
			</div>
		);
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);