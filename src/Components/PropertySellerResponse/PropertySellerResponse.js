  /////////////////////////////////////////////////////////
 // PROPERTY SELLER RESPONSE COMPONENT ///////////////////
/////////////////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// CSS
import './PropertySellerResponse.css';

// Components
import Button from '../Button/Button';



// <PropertySellerResponse /> Component
class PropertySellerResponse extends Component {

	// Render response message based on status
	renderResponseMessage(status) {
		return status === 'withdrawn' ? (<p>You have withdrawn from your acceptance of the offer.</p>) : (<p>Another type of status response</p>);
	}

	// Render Seller Response
	render() {

		// Status
		let status = this.props.propertyStatus.toLowerCase()

		// sellerResponseGridCssClasses
		let sellerResponseGridCssClasses = 'col-sm-12 col-md-6'

		// Dashboard CSS Classes
		let dashboardCssClasses = 'container dashboard-module small'

		return (
			<section className={ `property-seller-response ${status} ${dashboardCssClasses} ${sellerResponseGridCssClasses}` }>
				<div className="title-container">
					<h2>Your response</h2>
				</div>
				<div className="lower">
					{ this.renderResponseMessage(status) }
					<div className="activity seller">
						<Button 
							text="View Comments" 
							cssClass="view-comments-trigger"
							callBack={ this.props.viewComments }
						/>
						<div className="meta">
							<span className="date item">
								Date: 24/10/2013
							</span>
							<span className="time item">
								Time: 20.05
							</span>
						</div>
					</div>
				</div>
			</section>
		);
	
	}

}



PropertySellerResponse.propTypes = {
	propertyStatus : PropTypes.string.isRequired,
	comments : PropTypes.object.isRequired,
	viewComments : PropTypes.func.isRequired
}



export default PropertySellerResponse;