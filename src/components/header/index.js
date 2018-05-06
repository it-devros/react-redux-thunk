import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as authActions from '../../actions/auth';

import logo_img from '../../styles/images/logo.png';


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


class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
		this.clickLogOut = this.clickLogOut.bind(this);
	}

	componentDidMount() {
		$('li').siblings().removeClass('active');
		$('li').on('click', function() {
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
		});
	}


	clickLogOut(e) {
		e.preventDefault();
		this.props.actions.logOut();
		toastr["success"]("Staff logout is done.");
		this.props.history.push("/home");
	}

	render() {

		return ( 
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<NavLink className="navbar-brand" to="/home">
							<img src={ logo_img } alt="Next Day Temp"/>
						</NavLink>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

						{
							this.props.isAuthed == false ?
								<ul className="nav navbar-nav navbar-right">
									<li className="active">
										<NavLink to="/home">HOME</NavLink>
									</li>
									<li>
										<NavLink to="/home/about">ABOUT US</NavLink>
									</li>
									<li>
										<NavLink to="/client/login">CLIENT/EMPLOYER LOGIN</NavLink>
									</li>
									<li>
										<NavLink to="/staff/login">STAFF LOGIN</NavLink>
									</li>
									<li>
										<NavLink to="/home/contact">CONTACT US</NavLink>
									</li>
									<li className="social">
										<ul className="list-inline">
											<li>
												<a target="_blank" href="https://facebook.com">
													<span className="fa-stack fa-sm">
														<i className="fa fa-facebook fa-stack-1x"></i>
													</span>
												</a>
											</li>
											<li>
												<a target="_blank" href="https://twitter.com">
													<span className="fa-stack fa-sm">
														<i className="fa fa-twitter fa-stack-1x"></i>
													</span>
												</a>
											</li>
											<li>
												<a target="_blank" href="https://linkedin.com">
													<span className="fa-stack fa-sm">
														<i className="fa fa-linkedin fa-stack-1x"></i>
													</span>
												</a>
											</li>
											<li>
												<a target="_blank" href="https://google.com">
													<span className="fa-stack fa-sm">
														<i className="fa fa-google-plus fa-stack-1x"></i>
													</span>
												</a>
											</li>
											<li>
												<a target="_blank" href="https://youtube.com">
													<span className="fa-stack fa-sm">
														<i className="fa fa-youtube fa-stack-1x"></i>
													</span>
												</a>
											</li>
										</ul>
									</li>
								</ul>
							:
								<ul className="nav navbar-nav navbar-right">
									<li className="active">
										<NavLink to="/home">HOME</NavLink>
									</li>
									<li>
										<NavLink to="/about">ABOUT US</NavLink>
									</li>
									<li>
										<NavLink to="/contact">CONTACT US</NavLink>
									</li>
									<li>
										<NavLink to="/notifications">
											<span className="fa fa-bell-o"></span>
											<span className="badge">3</span>
											NOTIFICATIONS
										</NavLink>
									</li>
									<li>
										<a href="javascript:void;" onClick={ this.clickLogOut }>Logout</a>
									</li>
									<li className="social">
										<ul className="list-inline">
											<li>
												<a target="_blank" href="https://facebook.com">
													<span className="fa-stack fa-sm">
														<i className="fa fa-facebook fa-stack-1x"></i>
													</span>
												</a>
											</li>
											<li>
												<a target="_blank" href="https://twitter.com">
													<span className="fa-stack fa-sm">
														<i className="fa fa-twitter fa-stack-1x"></i>
													</span>
												</a>
											</li>
											<li>
												<a target="_blank" href="https://linkedin.com">
													<span className="fa-stack fa-sm">
														<i className="fa fa-linkedin fa-stack-1x"></i>
													</span>
												</a>
											</li>
											<li>
												<a target="_blank" href="https://google.com">
													<span className="fa-stack fa-sm">
														<i className="fa fa-google-plus fa-stack-1x"></i>
													</span>
												</a>
											</li>
											<li>
												<a target="_blank" href="https://youtube.com">
													<span className="fa-stack fa-sm">
														<i className="fa fa-youtube fa-stack-1x"></i>
													</span>
												</a>
											</li>
										</ul>
									</li>
								</ul>
						}

								
					</div>
				</div>
			</nav>
		);
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

