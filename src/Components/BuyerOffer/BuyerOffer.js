  /////////////////////////////////////////////////////
 // BUYER OFFER COMPONENT ////////////////////////////
/////////////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../Button/Button';



// <BuyerOffer /> Component
class BuyerOffer extends Component {

	render() {

		// Deconstruct the data we need for buyer offer
		const { offerPrice, language, currencySymbol } = this.props;

		return (
			<section className="buyer-offer col-sm-12 col-md-6">
				<div className="top container">
					<h2>Buyer's Offer</h2>
				</div>
				<div className="lower">
					<span className="offer-price">
						{ `${ currencySymbol }${ offerPrice.toLocaleString(language) }` }
						<small>Subject to offer qualification by Purplebricks</small>
					</span>
					<div className="offer-footer">
						<Button 
							text="View Comments" 
							cssClass="view-comments"
							callBack={ this.props.viewComments }
						/>
						<span className="date">Date: 24/10/2013</span>
						<span className="time">Time: 20.17</span>
					</div>
				</div>
			</section>
		);

	}

}



BuyerOffer.propTypes = {
	offerPrice : PropTypes.number.isRequired,
	comments : PropTypes.object.isRequired,
	viewComments : PropTypes.func.isRequired,
	language : PropTypes.string.isRequired,
	currencySymbol : PropTypes.string.isRequired
}



export default BuyerOffer;