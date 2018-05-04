import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


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

	render() {
		return ( 
			<div>
				<h1>I will be winner.</h1>
			</div>
		);
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
