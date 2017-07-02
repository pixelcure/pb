  /////////////////////////////////////////////////////////
 // PROPERTY NEGOTIATION COMPONENT ///////////////////////
/////////////////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Utility Functions
import { isStringTrueInt, numberStringToInt } from '../../utility/utility';

// Components
import ExpertAssistance from '../ExpertAssistance/ExpertAssistance';
import Button from '../Button/Button';
import TextField from '../TextField/TextField';



// <PropertyNegotiation /> Component
class PropertyNegotiation extends Component {

	constructor(props) {
		super(props);

		// Negotiation Local State
		this.state = {
			acceptingOfferPrice : null,
			invalidFieldError : false
		}

		// handleSellerAcceptingOfferInput Bind Context
		this.handleSellerAcceptingOfferInput = this.handleSellerAcceptingOfferInput.bind(this);
		// onSubmitAcceptingOffer Bind Context
		this.onSubmitAcceptingOffer = this.onSubmitAcceptingOffer.bind(this);

	}

	handleSellerAcceptingOfferInput(e) {
		if(isStringTrueInt(e.currentTarget.value)){
			// Update local component state with new price
			this.setState({
				acceptingOfferPrice : parseInt(e.currentTarget.value, 10),
				invalidFieldError : false
			})
		} else {
			// Invalid Field
			this.setState({
				invalidFieldError : true
			})
		}
	}

	// Handles seller counter offer and updates state
	onSubmitAcceptingOffer(e) {

		// Prevent default form behavior
		e.preventDefault()

		// Accepting Offer Field value
		let value = e.currentTarget.querySelector('input[name=offerSellerWillAccept]').value
		
		// Test accepting offer value and make sure it's not empty, 
		// if there are no errors, then turn it into an integer 
		// and update our main property state.
		// otherwise, it is an invalid field
		if(isStringTrueInt(value) && value !== ''){
			// Update property state
			this.props.updateofferSellerWillAccept(numberStringToInt(value))
		} else {
			// Invalid Field
			this.setState({
				invalidFieldError : true
			})
		}

	}

	// Return error message
	handleFieldError(message) {
		return this.state.invalidFieldError && typeof message === 'string' ? (<span className="error">{message}</span>) : ''
	}

	render() {
		return (
			<section className="property-negotiation col-sm-12">
				
				<div className="top container">
					<h2>Re-open negotiations</h2>
				</div>

				<ExpertAssistance />				

				<form className="container" onSubmit={ this.onSubmitAcceptingOffer }>
					<fieldset className="col-sm-12 col-md-8">
						<label htmlFor="offerSellerWillAccept">
							Enter an offer you would be willing to accept:
						</label>
						<TextField
							id="offerSellerWillAccept"
							name="offerSellerWillAccept"
							onChange={ this.handleSellerAcceptingOfferInput }
							value={ this.state.acceptingOfferPrice !== null ? this.state.acceptingOfferPrice : '' }
						/>
						{ this.handleFieldError('Please enter whole integers only. Example: 145,000') }
					</fieldset>
					<fieldset className="col-sm-12 col-md-4">
						<input type="submit" value="Submit Offer" />
					</fieldset>
				</form>
				
				<Button 
					text="Add Comments" 
					cssClass="add-comments"
					callBack={ this.props.addComments }
				/>

			</section>
		);
	}

}



// <PropertyNegotiation /> expected propTypes
PropertyNegotiation.propTypes = {
	updateofferSellerWillAccept : PropTypes.func.isRequired,
	comments : PropTypes.object.isRequired,
	addComments : PropTypes.func.isRequired
}



export default PropertyNegotiation;