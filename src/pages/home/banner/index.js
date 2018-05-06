import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import bottom_arrow from '../../../styles/images/bottom-arrow-bg2.png';


class Banner extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return ( 
			<section className="banner">
				<div id="carousel-example-generic1" className="carousel slide testimonial" data-ride="carousel">
					<div className="container">
						<div className="carousel-inner" role="listbox">
							<div className="item active">
								<div className="row">
									<div className="col-sm-5 col-xs-offset-1">
										<h1 className="text-info">For Staff.</h1>
										<p className="text-white">CRETATE YOUR ACCOUND AND SEE HOW OUR TECHNOLOGY MAKES</p>
										<p className="text-white">THE PROCESS SIMPLE SO THE FOCUS IS ALWATS ON YOU, THE INDIVIDUAL.</p>
										<NavLink className="btn btn-bordered-white text-uppercase" to="/staff/register">Register</NavLink>
									</div>
								</div>
							</div>
						</div>

						<a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
							<span className="fa-stack">
								<i className="fa fa-circle-thin fa-stack-2x"></i>
								<i className="fa fa-angle-left fa-stack-1x"></i>
							</span>
						</a>
						<a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
							<span className="fa-stack">
								<i className="fa fa-circle-thin fa-stack-2x"></i>
								<i className="fa fa-angle-right fa-stack-1x"></i>
							</span>
						</a>
					</div>
				</div>
				<a href="" className="arrow">
					<span className="fa fa-angle-down"></span>
					<img src={ bottom_arrow } alt="scroll"/>
				</a>
			</section>
		);
	}

}

export default Banner;
