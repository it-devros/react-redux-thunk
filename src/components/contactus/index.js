import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class ContactUs extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return ( 
			<section id="contactus-content" className="py-2 blue-bg">
				<div className="container">
					<div className="row">
						<div className="col-sm-8 text-white">
							<h3>Get Your Perfect Service From Us</h3>
							<q>Today's Quality Is Tomorrow's Reputation</q>
						</div>
						<div className="col-sm-4 text-sm-right">
							<NavLink to="/contact" className="btn btn-bordered-white mx-1">Contact Us</NavLink>
						</div>
					</div>
				</div>
			</section>
		);
	}

}

export default ContactUs;
