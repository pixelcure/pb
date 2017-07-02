  /////////////////////////////////////////////////////
 // BUYER OFFER COMPONENT ////////////////////////////
/////////////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';

// Components
import Button from '../Button/Button';



// <BuyerOffer /> Element
class BuyerOffer extends Component {
	render() {
		return (
			<section className="buyer-offer col-sm-12 col-md-6">
				Buyer Offer
				<Button 
					text="View Comments" 
					cssClass="view-comments"
					callBack={ this.props.viewComments }
				/>
			</section>
		);
	}
}



export default BuyerOffer;