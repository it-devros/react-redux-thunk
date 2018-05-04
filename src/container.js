
import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import { HashRouter, Switch, NavLink, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import LoadingBar from 'react-redux-loading-bar'

import Home from './pages/home';



const mapDispatchToProps = (dispatch) => {
	return ({
	});
}

const mapStateToProps = (state) => {
	return ({
	});
}


class Container extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount() {

	}


	render() {
		return (
			<div>
				<LoadingBar style={{zIndex: 10000 ,backgroundColor: '#61e3ff' }}/>
			 	<Switch>
          <Route exact path="/home" component={Home} />
        </Switch>
			</div>
		);
	}

}


export default connect(mapStateToProps, mapDispatchToProps)(Container);