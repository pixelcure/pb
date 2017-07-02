  /////////////////////////////////////////////////////////
 // PROPERTY SELLER RESPONSE COMPONENT ///////////////////
/////////////////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../Button/Button';



// <PropertySellerResponse /> Component
class PropertySellerResponse extends Component {

	// Render response message based on status
	renderResponseMessage(status) {
		return status === 'withdrawn' ? (<h3>You have withdrawn from your acceptance of the offer.</h3>) : (<h3>Another type of status response</h3>);
	}

	render() {

		// Status
		let status = this.props.propertyStatus.toLowerCase()

		return (
			<section className={ `property-seller-response ${ status } col-sm-12 col-md-6` }>
				<div className="top container">
					<h2>Your response</h2>
				</div>
				{ this.renderResponseMessage(status) }
				<div className="offer-footer">
					<Button 
						text="View Comments" 
						cssClass="view-comments"
						callBack={ this.props.viewComments }
					/>
					<span className="date">Date: 24/10/2013</span>
					<span className="time">Time: 20.05</span>
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