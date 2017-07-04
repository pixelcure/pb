  /////////////////////////////////////////////////////
 // BUYER OFFER COMPONENT ////////////////////////////
/////////////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// CSS
import './BuyerOffer.css';

// Components
import Button from '../Button/Button';
import DashboardTitleHeader from '../DashboardTitleHeader/DashboardTitleHeader';



// <BuyerOffer /> Component
class BuyerOffer extends Component {

	// Render Offer
	render() {

		// Deconstruct the data we need for buyer offer
		const { offerPrice, language, currencySymbol } = this.props

		// Buyer Offer Grid CSS Classes
		let buyerOfferGridCssClasses = 'col-sm-12 col-md-6'

		// Dashboard CSS Classes
		let dashboardCssClasses = 'container dashboard-module small'

		return (
			<section className={ `buyer-offer ${dashboardCssClasses} ${buyerOfferGridCssClasses}` }>
				<DashboardTitleHeader 
					title="Buyer's offer"
					tabStyle={ false }
				/>
				<div className="offer-price-pitch lower">
					<span className="offer-price">
						{ `${ currencySymbol }${ offerPrice.toLocaleString(language) }` }
						<small className="offer-terms">Subject to offer qualification by Purplebricks</small>
					</span>
					<div className="activity buyer">
						<Button 
							text="View Comments" 
							cssClass="view-comments-trigger"
							callBack={ this.props.viewComments }
						/>
						<div className="meta">
							<span className="date item">Date: 24/10/2013</span>
							<span className="time item">Time: 20.17</span>
						</div>
					</div>
				</div>
			</section>
		);

	}

}



// <BuyerOffer /> Expected proptypes
BuyerOffer.propTypes = {
	offerPrice : PropTypes.number.isRequired,
	comments : PropTypes.object.isRequired,
	viewComments : PropTypes.func.isRequired,
	language : PropTypes.string.isRequired,
	currencySymbol : PropTypes.string.isRequired
}



export default BuyerOffer;