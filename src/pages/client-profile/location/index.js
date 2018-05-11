import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Location extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return ( 
			<article className="clearfix">
				<h5>Location:</h5>
				<div className="col-xs-12">
					<div className="row col-tb">
						<div className="col-sm-6 d-inline-block">
							<span>Denver, US</span>
						</div>
						<div className="col-sm-2 d-inline-block action">
							<a href="javascript:void(0);">
								<span className="fa fa-pencil-square-o"></span>
							</a>
						</div>
					</div>
				</div>
			</article>
		);
	}

}

export default Location;
