import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';

class UploadPhoto extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			profile_image: this.props.profile_image, 
		}
	}

	render() {
		return ( 
			<article id="upload_photo" className="clearfix">
				<h5>Upload Photo:</h5>
				<div className="col-xs-12">
					<div className="row col-tb">
						<div className="col-sm-6 d-inline-block">
							<input className="input-file hide" id="my-file" type="file" />
							<label tabIndex="0" htmlFor="my-file" className="input-file-trigger btn-bordered-info">
								<span className="fa fa-cloud-upload"></span> Upload file
							</label>
						</div>
					</div>
				</div>
			</article>
		);
	}

}

Location.propTypes = {
	profile_image: PropTypes.string,
	changeState: PropTypes.func,
};

export default UploadPhoto;
