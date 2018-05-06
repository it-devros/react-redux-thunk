import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import about_us from '../../../styles/images/about-us.png';


class AboutUs extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return ( 
			<section id="aboutus-content" className="gray-bg">
				<div className="container">
					<header className="text-center">
						<h2 className="text-uppercase">About Us</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi, nam facilis aliquam modi quaerat unde, enim reiciendis minus excepturi odio obcaecati laborum totam in explicabo dignissimos quae repellendus neque.</p>
					</header>
					<article className="row">
						<div className="col-md-6">
							<img src={ about_us } alt="about us" className="img-responsive" />
						</div>
						<div className="col-md-6">
							<p>Nunc fringilla sem et augue maximus, sit amet condimentum risus condimentum. Vestibulum luctus sapien in interdum laoreet. Donec vel justo dolor. Integer ligula ligula, maximus id ex quis, rhoncus ullamcorper velit. Integer vel urna placerat est fermentum porta. Integer aliquam purus in tincidunt ultricies. Phasellus euismod mi quis lacus venenatis, vitae viverra erat convallis. Quisque aliquam orci libero, sed scelerisque neque tempor et. Mauris mauris nulla, convallis in lectus ac, tristique scelerisque ante. Morbi eu ligula eu leo convallis pulvinar vel semper ex. Fusce eros lorem, laoreet ut quam sed, gravida posuere metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam risus arcu, ornare a magna sollicitudin, tincidunt iaculis lacus. Integer tempus dapibus arcu. Pellentesque semper, urna a dictum convallis, massa diam imperdiet est, ut commodo ipsum nulla eget quam.</p>
							<NavLink to="/about" className="btn btn-info">Read More</NavLink>
						</div>
					</article>
				</div>
			</section>
		);
	}

}

export default AboutUs;
