  /////////////////////////////////////////////////////////
 // PROPERTY NEGOTIATION COMPONENT ///////////////////////
/////////////////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';

// Components
import ExpertAssistance from '../ExpertAssistance/ExpertAssistance';
import Button from '../Button/Button';
import TextField from '../TextField/TextField';



// <PropertyNegotiation /> Element
class PropertyNegotiation extends Component {

	constructor(props) {
		super(props);

		// Negotiation Local State
		this.state = {
			acceptingOfferPrice : null,
			offerError : null
		}

		// handleSellerAcceptingOfferInput Bind Context
		this.handleSellerAcceptingOfferInput = this.handleSellerAcceptingOfferInput.bind(this);

	}

	handleSellerAcceptingOfferInput(e) {
		
		// Update local component state with new price
		this.setState({
			acceptingOfferPrice : e.currentTarget.value,
		})

		console.log(e.currentTarget.value)

	}

	render() {
		return (
			<section className="property-negotiation col-sm-12">
				
				<ExpertAssistance />				

				<form onSubmit={ this.props.onSubmitAcceptingOffer }>
					<TextField 
						name="offerSellerWillAccept"
						onChange={ this.handleSellerAcceptingOfferInput }
						value={``}
						placeholder=""
					/>
					<input type="submit" value="Submit" />
				</form>
				
				<Button 
					text="Add Comments" 
					cssClass="add-comments"
					viewComments={ this.props.addComments }
				/>

			</section>
		);
	}

}



export default PropertyNegotiation;