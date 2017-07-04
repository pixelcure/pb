  /////////////////////////////////////////////////////
 // ACCEPTING OFFER FORM COMPONENT ///////////////////
/////////////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Utility Functions
import { isStringTrueInt, numberStringToInt } from '../../utility/utility';

// CSS
import './AcceptingOfferForm.css';

// Components
import TextField from '../TextField/TextField';



// <AcceptingOfferForm /> Component
class AcceptingOfferForm extends Component {

	constructor(props) {
		super(props);

		// Accepting Offer Field State
		this.state = {
			acceptingOfferInputValue : '',
			invalidFieldError : false
		}

		// handleSellerAcceptingOfferInput Bind Context
		this.handleSellerAcceptingOfferInput = this.handleSellerAcceptingOfferInput.bind(this);
		// onSubmitAcceptingOffer Bind Context
		this.onSubmitAcceptingOffer = this.onSubmitAcceptingOffer.bind(this);

	}

	// Test and format AcceptingOfferInput Value
	handleSellerAcceptingOfferInput(e) {

		// Deconstruct object, grab value assignment
		let { value } = e.currentTarget

		if(isStringTrueInt(value)){
			// Update local component state with new price
			this.setState({
				acceptingOfferInputValue : value,
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
		// and update our main property state. Otherwise, it is an invalid field
		if(isStringTrueInt(value) && value !== ''){
			// Offer to Number
			let offer = numberStringToInt(value)
			// Update property state
			this.props.updateofferSellerWillAccept(offer)
		} else {
			// Invalid Field
			this.setState({
				invalidFieldError : true
			})
		}

	}

	// Return error message
	handleFieldError(message) {
		// Is valid string type?
		let validMessage = this.state.invalidFieldError && typeof message === 'string'
		return validMessage  ? (<span className="error">{message}</span>) : ''
	}

	// Render Offer
	render() {

		return (
			<div className="accepting-offer-form lower">
				<form className="seller-will-accept" onSubmit={ this.onSubmitAcceptingOffer }>
					<fieldset className="field offer">
						<label htmlFor="offerSellerWillAccept">
							Enter an offer you would be willing to accept:
						</label>
						<span className="currency">
							{ this.props.currencySymbol }
						</span>
						{ this.handleFieldError('Please enter whole integers only. Example: 145,000') }
						<TextField
							id="offerSellerWillAccept"
							name="offerSellerWillAccept"
							value={ this.state.acceptingOfferInputValue }
							onChange={ this.handleSellerAcceptingOfferInput }
						/>
					</fieldset>
					<fieldset className="field submit">
						<input type="submit" value="Submit Offer" title="Submit Offer" />
					</fieldset>
				</form>					
			</div>
		);

	}

}



// <AcceptingOfferForm /> Expected proptypes
AcceptingOfferForm.propTypes = {
	updateofferSellerWillAccept : PropTypes.func.isRequired,
	currencySymbol : PropTypes.string.isRequired
}



export default AcceptingOfferForm;