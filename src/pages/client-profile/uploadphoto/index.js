import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class UploadPhoto extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return ( 
			<article className="clearfix">
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

export default UploadPhoto;
