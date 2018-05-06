import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Availability extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return ( 
			<article className="clearfix">
				<h5>Availability:</h5>
				<div className="col-xs-12">
					<div className="row col-tb">
						<div className="col-sm-2 d-inline-block">
							<div className="checkbox">
								<label>Monday
									<input type="checkbox" value="" />
									<span className="checkmark"></span>
								</label>
							</div>
						</div>
						<div className="col-sm-6 d-inline-block">
							<span>8 -10</span>
						</div>
						<div className="col-sm-2 d-inline-block">
							<a href="javascript:void(0);" className="btn btn-bordered-info">
								<span className="fa fa-pencil"></span> Edit
							</a>
						</div>
					</div>
					<div className="row col-tb">
						<div className="col-sm-2 d-inline-block">
							<div className="checkbox">
								<label>Monday
									<input type="checkbox" value="" />
									<span className="checkmark"></span>
								</label>
							</div>
						</div>
						<div className="col-sm-6 d-inline-block">
							<span>8 -10</span>
						</div>
						<div className="col-sm-2 d-inline-block">
							<a href="javascript:void(0);" className="btn btn-bordered-info">
								<span className="fa fa-pencil"></span> Edit
							</a>
						</div>
					</div>
				</div>
			</article>
		);
	}

}

export default Availability;
