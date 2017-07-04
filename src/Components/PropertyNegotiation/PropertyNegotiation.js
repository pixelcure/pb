  /////////////////////////////////////////////////////////
 // PROPERTY NEGOTIATION COMPONENT ///////////////////////
/////////////////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import CalloutAction from '../CalloutAction/CalloutAction';
import AcceptingOfferForm from '../AcceptingOfferForm/AcceptingOfferForm';
import DashboardTitleHeader from '../DashboardTitleHeader/DashboardTitleHeader';
import Button from '../Button/Button';

// CSS
import './PropertyNegotiation.css';



// <PropertyNegotiation /> Component
class PropertyNegotiation extends Component {

	// Negotiate For Me Callback
	negotiateForMe() {
		alert('negotiate for me')
	}

	// Render Property Negotiation
	render() {

		// Dashboard CSS Classes
		let dashboardCssClasses = 'container dashboard-module'

		return (
			<section className={ `property-negotiation ${dashboardCssClasses}` }>
				<DashboardTitleHeader 
					title="Re-open negotiations"
					tabStyle={ false }
				/>
				<CalloutAction 
					calloutCssClass="expert-assistance"
					calloutText={ `Would you like your Expert, Robert White, to negotiate on your behalf? It’s completely free!` }
					buttonText="Negotiate For Me"
					callBack={ this.negotiateForMe }
				/>
				<AcceptingOfferForm 
					updateofferSellerWillAccept={ this.props.updateofferSellerWillAccept }
					currencySymbol={ this.props.currencySymbol }
					language={ this.props.language }
				/>
				<div className="negotiation-comments lower">
					<Button 
						text="Add Comments" 
						cssClass="add-comments-trigger"
						callBack={ this.props.addComments }
					/>
				</div>
			</section>
		);

	}

}



// <PropertyNegotiation /> expected propTypes
PropertyNegotiation.propTypes = {
	updateofferSellerWillAccept : PropTypes.func.isRequired,
	comments : PropTypes.object.isRequired,
	addComments : PropTypes.func.isRequired,
	currencySymbol : PropTypes.string.isRequired
}



export default PropertyNegotiation;