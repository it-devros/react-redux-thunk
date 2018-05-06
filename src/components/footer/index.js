import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import logo_white from '../../styles/images/logo-white.png';

class Footer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return ( 
			<footer className="footer clearfix">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 col-md-4 border-sm-right">
								<h4>About Company</h4>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ullam, suscipit impedit doloribus nulla asperiores labore repudiandae porro.</p>
								<address>
									<b>Address:</b> 6730 westpark dr suite 178 Houston, TX, 77057 <br/><br/>
									<b>Email:</b> info@domain.com
								</address>
							</div>
							<div className="col-sm-5 col-md-6 col-sm-offset-1 col-md-offset-1">
								<h4>Get In Touch</h4>
								<form>
									<div className="row">
										<div className="col-xs-6">
											<div className="form-group">
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="col-xs-6">
											<div className="form-group">
												<input type="text" className="form-control" />
											</div>
										</div>
									</div>
									<div className="form-group">
										<textarea className="form-control" rows="2"></textarea>
									</div>
									<button type="submit" className="btn btn-info">Submit</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="container">
						<img src={ logo_white } className="pull-left" alt="Next Day Temp"/>
						<p className="col-md-5 col col-xs-offset-4 col-md-offset-1 text-center">&copy; Copyright 2018 domain | All Rights Reserved.</p>
					</div>
				</div>
			</footer>
		);
	}

}

export default Footer;
