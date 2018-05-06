import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Support extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return ( 
			<section className="py-2 blue-bg support">
				<div className="container">
					<div className="row">
						<div className="col-sm-4 text-white">
							<span className="fa fa-envelope-o"></span>
							<span>Email Us</span>
						</div>
						<div className="col-sm-4 text-white text-sm-center">
							<span className="fa fa-phone"></span>
							<span>832-444-4217</span>
						</div>
						<div className="col-sm-4 text-white text-sm-right">
							<span className="fa fa-comments"></span>
							<span>Contact Us</span>
						</div>
					</div>
				</div>
			</section>
		);
	}

}

export default Support;
