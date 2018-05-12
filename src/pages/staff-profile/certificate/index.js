import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import TextInput from '../../../components/basic-textinput';

import './style.scss';

class Certificate extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			certificates: this.props.certificates || [],

			certificate: '',
			isEdit: -1,
		}
		this.displayContent = this.displayContent.bind(this);
		this.onClickAddCertificate = this.onClickAddCertificate.bind(this);
		this.onChangeValue = this.onChangeValue.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
		this.validate = this.validate.bind(this);
		this.changeParentValues = this.changeParentValues.bind(this);
		this.onClickDeleteCertificate = this.onClickDeleteCertificate.bind(this);
		this.onClickEditCertificate = this.onClickEditCertificate.bind(this);
	}

	onClickAddCertificate(e) {
		e.preventDefault();
		$("#addCertificateModal").modal('show');
	}

	onChangeValue(field, val) {
		this.setState({ certificate: val });
	}

	onClickSave(e) {
		e.preventDefault();
		if (this.validate()) {
			let objList = Object.assign([], this.state.certificates);
			let obj = this.state.certificate;
			if (objList.indexOf(obj) == -1) {
				if (this.state.isEdit == -1) {
					objList.push(obj);
				} else {
					objList[this.state.isEdit] = obj;
				}
				this.setState({ certificate: '' });
				this.setState({ certificates: objList });
				this.setState({ isEdit: -1 });
				$("#addCertificateModal").modal('hide');
				this.changeParentValues();
			} else {
				toastr["warning"]("Already inputed.");
			}
		}
	}

	changeParentValues() {
		setTimeout(() => {
			let objList = Object.assign([], this.state.certificates);
			this.props.changeState(objList);
		}, 500);
	}

	onClickDeleteCertificate(e, index) {
		e.preventDefault();
		let objList = [];
		this.state.certificates.forEach((cert, ind) => {
			if (index != ind) {
				objList.push(cert);
			}
		});
		this.setState({ certificates: objList });
		this.changeParentValues();
	}

	onClickEditCertificate(e, index) {
		e.preventDefault();
		this.setState({ certificate: this.state.certificates[index] });
		this.setState({ isEdit: index });
		$("#addCertificateModal").modal('show');
	}

	validate() {
		if (this.state.certificate == '') {
			toastr["error"]("Please input the certificate.");
			return false;
		}
		return true;
	}

	render() {

		let display_content = this.displayContent();

		return ( 
			<article id="certificate" className="clearfix">
				<h5>Certificate:</h5>
				<div className="col-xs-10">
					{ display_content }
				</div>
				<div className="col-xs-2">
					<div className="row col-tb">
						<div className="col-sm-12 d-inline-block">
							<a href="javascript:void(0);" className="btn btn-bordered-info" onClick={this.onClickAddCertificate}>
								<span className="fa fa-plus"></span> Add
							</a>
						</div>
					</div>
				</div>

				<div className="modal fade" id="addCertificateModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">Add Certificate</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<div className="form-group">
									<TextInput type={'text'} field={'certificate'} className={'form-control'} placeholder={'Please input certificate.'} initial={this.state.certificate} withValid={'true'} changed={ this.onChangeValue } />
								</div>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
								<button type="button" className="btn btn-primary" onClick={ this.onClickSave }>Save changes</button>
							</div>
						</div>
					</div>
				</div>
			</article>
		);
	}

	displayContent() {
		let content = [];
		if (this.state.certificates.length > 0) {
			this.state.certificates.forEach((certificate, index) => {
				content.push(
					<div className="row col-tb">
						<div className="col-sm-6 d-inline-block">
							<span>{ certificate } - <span className="text-danger">Unverified</span></span>
						</div>
						<div className="col-sm-3 d-inline-block action">
							<a href="javascript:void(0);" onClick={(e) => { this.onClickEditCertificate(e, index) }}>
								<span className="fa fa-pencil-square-o"></span>
							</a>
							<a href="javascript:void(0);" onClick={(e) => { this.onClickDeleteCertificate(e, index) }}>
								<span className="text-danger fa fa-trash-o"></span>
							</a>
						</div>
					</div>
				);
			});
		} else {
			content.push(<div key={'i1'} className="row col-tb">No certificates</div>);
		}
		return content;
	}

}

Certificate.propTypes = {
	certificates: PropTypes.array,
	changeState: PropTypes.func,
};


export default Certificate;
