import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Banner from './banner';
import AboutUs from './aboutus';
import ContactUs from '../../components/contactus';
import Testimonials from './testimonials';
import Support from './support';


const mapDispatchToProps = (dispatch) => {
	return ({
	});
}

const mapStateToProps = (state) => {
	return ({
	});
}


class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	componentDidMount() {
		this.moveWindowToPanel(this.props.match.params.panel);
	}

	componentWillReceiveProps(newProps) {
		this.moveWindowToPanel(newProps.match.params.panel);
	}

	moveWindowToPanel(panel) {
		if (panel) {
			switch(panel) {
				case 'about':
					$('html, body').animate({scrollTop: $("#aboutus-content").offset().top}, 1000);
					break;

				case 'contact':
					$('html, body').animate({scrollTop: $("#contactus-content").offset().top}, 1000);
					break;

				default:
					break;
			}
		}
	}

	render() {
		return ( 
			<div>
				<Banner />
				<AboutUs />
				<ContactUs />
				<Testimonials />
				<Support />
			</div>
		);
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
