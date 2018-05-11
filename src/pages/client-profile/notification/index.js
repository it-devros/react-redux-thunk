import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Notification extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return ( 
			<article className="clearfix">
				<h5>Notification:</h5>
				<div className="col-xs-12">
					<div className="row col-tb">
						<div className="col-sm-2 d-md-inline-block">
							<div className="checkbox">
								<label>App
									<input type="checkbox" value="" />
									<span className="checkmark"></span>
								</label>
							</div>
						</div>
						<div className="col-sm-2 d-md-inline-block">
							<div className="checkbox">
								<label>Sms
									<input type="checkbox" value="" />
									<span className="checkmark"></span>
								</label>
							</div>
						</div>
						<div className="col-sm-2 d-md-inline-block">
							<div className="checkbox">
								<label>Email
									<input type="checkbox" value="" />
									<span className="checkmark"></span>
								</label>
							</div>
						</div>
					</div>
				</div>
			</article>
		);
	}

}

export default Notification;
