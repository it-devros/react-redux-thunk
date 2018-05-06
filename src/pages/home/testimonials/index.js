import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import './style.scss';
import temp_avatar from '../../../styles/images/avatar.png';

class Testimonials extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return ( 
			<section id="testimonial-content">
				<div className="container">
					<header className="text-center">
						<h2 className="text-uppercase">TESTIMONIALS</h2>
					</header>
					<article>
						<div id="carousel-example-generic" className="carousel slide testimonial" data-ride="carousel">

							<ol className="carousel-indicators">
								<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
								<li data-target="#carousel-example-generic" data-slide-to="1"></li>
								<li data-target="#carousel-example-generic" data-slide-to="2"></li>
							</ol>

							<div className="carousel-inner" role="listbox">
								<div className="item active">
									<div className="row">
										<div className="col-md-12">
											<div className="gray-bg quote">
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed nibh justo. Vivamus dignissim neque id mauris sagittis ullamcorper. Cras fringilla odio vitae metus porttitor ornare. Aenean pulvinar magna non elit faucibus iaculis. Nullam placerat dui quis tempor aliquam.</p>
											</div>
										</div>
										<div className="col-md-12">
											<div className="media">
												<div className="media-left">
													<NavLink to="#">
														<img className="media-object" src={ temp_avatar } className="img-circle" alt="User Image"/>
													</NavLink>
												</div>
												<div className="media-body media-middle">
													<h4 className="media-heading">
														<span className="text-info">Milan Markovic</span>/ General director</h4>
													<p>Praesent finibus porttitor eros, in vehicula libero.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="row">
										<div className="col-md-12">
											<div className="gray-bg quote">
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed nibh justo. Vivamus dignissim neque id mauris sagittis ullamcorper. Cras fringilla odio vitae metus porttitor ornare. Aenean pulvinar magna non elit faucibus iaculis. Nullam placerat dui quis tempor aliquam.</p>
											</div>
										</div>
										<div className="col-md-12">
											<div className="media">
												<div className="media-left">
													<NavLink to="#">
														<img className="media-object" src={ temp_avatar } className="img-circle" alt="User Image"/>
													</NavLink>
												</div>
												<div className="media-body media-middle">
													<h4 className="media-heading">
														<span className="text-info">Milan Markovic</span>/ General director</h4>
													<p>Praesent finibus porttitor eros, in vehicula libero.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</article>
				</div>
			</section>
		);
	}

}

export default Testimonials;
