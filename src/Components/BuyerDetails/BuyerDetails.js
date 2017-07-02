  //////////////////////////////////////////////////
 // BUYER DETAILS COMPONENT ///////////////////////
//////////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';

// Components
import Button from '../Button/Button';



// <BuyerDetails /> Element
class BuyerDetails extends Component {

	constructor(props){
		super(props);

		this.state = {
			buyerDetailsVisible : true
		}

		// toggleBuyerDetails Bind Context
		this.toggleBuyerDetails = this.toggleBuyerDetails.bind(this);

	}

	toggleBuyerDetails(e) {
		console.log('toggle buyer details');
	}

	renderDetails() {
		return (
			<p> Buyer Details </p>
		);
	}

	renderBuyerDetailsToggle() {
		return (this.state.buyerDetailsVisible ?
				<Button 
					text="Hide" cssClass={"icon-arrow-up"} 
					callBack={this.toggleBuyerDetails} 
				/>
			:
				<Button 
					text="Show" 
					cssClass={"icon-arrow-down"} 
				/>
		);
	}

	render() {
		return (
			<section className="buyer-details col-sm-12">
				<div className="top container">
					<h2>Buyer Details</h2>
					{ this.renderBuyerDetailsToggle() }
				</div>
				{ this.state.buyerDetailsVisible ? this.renderDetails() : '' }
			</section>
		);
	}

}



export default BuyerDetails;