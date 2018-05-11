import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ContactUs from '../../components/contactus';
import SideBar from '../../components/sidebar';

import * as reviewActions from '../../actions/review';

import default_img from '../../styles/images/default.png';

import './style.scss';


const mapDispatchToProps = (dispatch) => {
	return ({
		actions: bindActionCreators({...reviewActions}, dispatch),
	});
}

const mapStateToProps = (state) => {
	return ({
		user: state.auth.user,
		reviews: state.review.reviews,
	});
}


class ClientReview extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	componentWillMount() {
		let obj = {
			user_id: this.props.user.id
		}
		this.props.actions.getReviews(obj).then((res) => {
			if (res) {
				toastr["success"]("Getting reviews success.");
			} else {
				toastr["warning"]("Reviews not found.");
			}
		}).catch((err) => {
			toastr["error"]("Getting reviews error.");
		});
	}

	componentDidMount() {
		$("[class='rating']").rating({
			showClear: false,
			showCaption: false,
			filledStar: "<i class='fa fa-star'></i>",
			emptyStar: "<i class='fa fa-star-o'></i>"
		});
	}

	componentDidUpdate() {
		$("[class='rating']").rating({
			showClear: false,
			showCaption: false,
			filledStar: "<i class='fa fa-star'></i>",
			emptyStar: "<i class='fa fa-star-o'></i>"
		});
	}

	render() {
		return ( 
			<div id="client-review-content">
				<section className="my-gray">
					<div className="container profile-setting">
						<div className="row">
							<div className="col-sm-4 form-group">
								<SideBar />
							</div>
							<div className="col-sm-8">
								<div className="well bg-svg box-shadow m-0">
									<h4 className="header">My Reviews
										<span className="text-muted">({ this.props.reviews.length })</span>
									</h4>
									<div className="panel-body px-0">
										<div className="review">
											{
												this.props.reviews.map((review, index) => {
													return (
														<div className="review-list">
															<img src={ default_img } className="img-responsive" alt="default-image" />
															<div className="detail">
																<div className="company-name">Lasmoix.Ltd</div>
																<input type="text" className="rating" data-size="xs" defaultValue="4" />
																<div className="street">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
																<div className="date">
																	<strong>
																		<span className="fa fa-calendar"></span> Apr 3, 2018 ( 10 AM - 03 PM )
																	</strong>
																</div>
															</div>
														</div>
													);
												})
											}
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<ContactUs />
			</div>
		);
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(ClientReview);