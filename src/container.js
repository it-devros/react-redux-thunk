
import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import { HashRouter, Switch, NavLink, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import LoadingBar from 'react-redux-loading-bar'

import Header from './components/header';
import Footer from './components/footer';

import Home from './pages/home';
import Dashboard from './pages/dashboard';
import About from './pages/about';
import Contact from './pages/contact';

import StaffLogin from './pages/staff-login';
import StaffRegister from './pages/staff-register';
import StaffReview from './pages/staff-review';
import StaffProfile from './pages/staff-profile';
import StaffNewJob from './pages/staff-newjob';
import StaffPastJob from './pages/staff-pastjob';
import AvailableStaffs from './pages/staff-available';
import StaffSetting from './pages/staff-setting';
import StaffCheck from './pages/staff-check';
import StaffNotification from './pages/staff-notification';

import ClientLogin from './pages/client-login';
import ClientRegister from './pages/client-register';

import * as authActions from './actions/auth';

toastr.options = {
	"closeButton": false,
	"debug": false,
	"newestOnTop": false,
	"progressBar": false,
	"positionClass": "toast-top-right",
	"preventDuplicates": false,
	"onclick": null,
	"showDuration": "300",
	"hideDuration": "1000",
	"timeOut": "5000",
	"extendedTimeOut": "1000",
	"showEasing": "swing",
	"hideEasing": "linear",
	"showMethod": "fadeIn",
	"hideMethod": "fadeOut"
}



const mapDispatchToProps = (dispatch) => {
	return ({
		actions: bindActionCreators({...authActions}, dispatch),
	});
}

const mapStateToProps = (state) => {
	return ({
		isAuthed: state.auth.isAuthed,
	});
}


class Container extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	componentWillMount() {
		this.props.actions.checkAuth();
	}

	componentDidMount() {
	}


	render() {

		return (
			<div>
				<LoadingBar style={{zIndex: 10000 ,backgroundColor: '#61e3ff' }}/>
				<Header />

				{
					this.props.isAuthed == false ? 
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/home" component={Home} />
							<Route exact path="/home/:panel" component={Home} />
							<Route exact path="/staff/login" component={StaffLogin} />
							<Route exact path="/staff/register" component={StaffRegister} />
							<Route exact path="/client/login" component={ClientLogin} />
							<Route exact path="/client/register" component={ClientRegister} />
							<Route exact path="/about" component={About} />
							<Route exact path="/contact" component={Contact} />
						</Switch>
					:
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/home" component={Dashboard} />
							<Route exact path="/about" component={About} />
							<Route exact path="/contact" component={Contact} />

							// user role management
							<Route exact path="/review" component={StaffReview} />
							<Route exact path="/profile" component={StaffProfile} />
							<Route exact path="/newjob" component={StaffNewJob} />
							<Route exact path="/staffs" component={AvailableStaffs} />
							<Route exact path="/pastjob" component={StaffPastJob} />
							<Route exact path="/settings" component={StaffSetting} />
							<Route exact path="/check" component={StaffCheck} />

							<Route exact path="/notifications" component={StaffNotification} />
						</Switch>
				}

				<Footer />
			</div>
		);
	}

}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Container));