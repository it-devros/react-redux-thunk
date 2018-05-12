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
		this.onChangeImage = this.onChangeImage.bind(this);
		this.changeParentValues = this.changeParentValues.bind(this);
	}

	onChangeImage(e) {
		e.preventDefault();
		if (e.target.files[0]) {
			let file = e.target.files[0];
			let reader = new FileReader();
			let url = reader.readAsDataURL(file);
			reader.onloadend = () => {
				this.setState({ profile_image: reader.result });
				this.changeParentValues();
			}
		} 
	}

	changeParentValues() {
		setTimeout(() => {
			let obj = this.state.profile_image;
			this.props.changeState(obj);
		}, 500);
	}

	render() {
		return ( 
			<article id="upload_photo" className="clearfix">
				<h5>Upload Photo:</h5>
				<div className="col-xs-12">
					<div className="row col-tb">
						<div className="col-sm-6 d-inline-block">
							<input className="input-file hide" id="my-file" type="file" onChange={this.onChangeImage} />
							<label tabIndex="0" htmlFor="my-file" className="input-file-trigger btn-bordered-info">
								<span className="fa fa-cloud-upload"></span> Upload file
							</label>
						</div>
					</div>
				</div>
				<div className="col-xs-12">
					<div className="row co-tb">
						<div className="col-sm-4 d-inline-block">
							<img className="col-sm-12" src={this.state.profile_image} />
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
