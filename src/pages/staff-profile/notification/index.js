import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


class Notification extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sms: this.props.sms || 0,
			app: this.props.app || 0,
			email: this.props.email || 0,
			bool_sms: false,
			bool_app: false,
			bool_email: false,
		}
		this.onChangeCheckBox = this.onChangeCheckBox.bind(this);
		this.changeParentValues = this.changeParentValues.bind(this);
	}

	componentDidMount() {
		if (this.state.sms == 1) {
			this.setState({ bool_sms: true });
		}
		if (this.state.app == 1) {
			this.setState({ bool_app: true });
		}
		if (this.state.email == 1) {
			this.setState({ bool_email: true });
		}
	}

	onChangeCheckBox(e, flag) {
		switch(flag) {
			case 'app':
				this.setState({ bool_app: e.target.checked });
				if (e.target.checked) {
					this.setState({ app: 1 });
				} else {
					this.setState({ app: 0 });
				}
				break;
			case 'sms':
				this.setState({ bool_sms: e.target.checked });
				if (e.target.checked) {
					this.setState({ sms: 1 });
				} else {
					this.setState({ sms: 0 });
				}
				break;
			case 'email':
				this.setState({ bool_email: e.target.checked });
				if (e.target.checked) {
					this.setState({ email: 1 });
				} else {
					this.setState({ email: 0 });
				}
				break;
		}
		this.changeParentValues();
	}

	changeParentValues() {
		setTimeout(() => {
			let sms = this.state.sms;
			let app = this.state.app;
			let email = this.state.email;
			this.props.changeState(sms, app, email);
		}, 500);
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
									<input type="checkbox" checked={this.state.bool_app} onChange={(e) => { this.onChangeCheckBox(e, 'app') }} />
									<span className="checkmark"></span>
								</label>
							</div>
						</div>
						<div className="col-sm-2 d-md-inline-block">
							<div className="checkbox">
								<label>Sms
									<input type="checkbox" checked={this.state.bool_sms} onChange={(e) => { this.onChangeCheckBox(e, 'sms') }} />
									<span className="checkmark"></span>
								</label>
							</div>
						</div>
						<div className="col-sm-2 d-md-inline-block">
							<div className="checkbox">
								<label>Email
									<input type="checkbox" checked={this.state.bool_email} onChange={(e) => { this.onChangeCheckBox(e, 'email') }} />
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

Location.propTypes = {
	sms: PropTypes.number,
	app: PropTypes.number,
	email: PropTypes.number,
	changeState: PropTypes.func,
};

export default Notification;
