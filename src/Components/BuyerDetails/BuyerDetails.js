  //////////////////////////////////////////////////
 // BUYER DETAILS COMPONENT ///////////////////////
//////////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../Button/Button';



// <BuyerDetails /> Component
class BuyerDetails extends Component {

	constructor(props){
		super(props);

		// Buyer details local state
		this.state = {
			buyerDetailsVisible : true
		}

		// toggleBuyerDetails Bind Context
		this.toggleBuyerDetails = this.toggleBuyerDetails.bind(this);

	}

	// Toggle Buyer Details view by resetting state
	toggleBuyerDetails() {
		this.setState({
			buyerDetailsVisible : !this.state.buyerDetailsVisible
		})
	}

	// Render Buyer Details
	renderDetails() {

		// Deconstruct the pieces of data needed from buyerDetails
		const { name, positions, timescale } = this.props.buyerDetails

		return (
			<ul className="container buyers-details">
				<li className="row">
					<span className="col-sm-12 col-md-6">
						Name:	
					</span>
					<span className="col-sm-12 col-md-6">
						{ name }	
					</span>
				</li>
				<li className="row">
					<span className="col-sm-12 col-md-6">
						Buying Position:	
					</span>
					<span className="col-sm-12 col-md-6">
						{ positions.buying }	
					</span>
				</li>
				<li className="row">
					<span className="col-sm-12 col-md-6">
						Financial Position:	
					</span>
					<span className="col-sm-12 col-md-6">
						{ positions.financial }	
					</span>
				</li>
				<li className="row">
					<span className="col-sm-12 col-md-6">
						Timescale:
					</span>
					<span className="col-sm-12 col-md-6">
						{ timescale }	
					</span>
				</li>
			</ul>
		);

	}

	// Render Buyer Details Toggle Button
	renderBuyerDetailsToggle() {
		return (
			<Button 
				text={ this.state.buyerDetailsVisible ? 'Hide' : 'Show' } 
				cssClass={ this.state.buyerDetailsVisible ? 'icon-arrow-up' : 'icon-arrow-down' } 
				callBack={ this.toggleBuyerDetails } 
			/>
		);
	}

	// Render Buyer Details
	render() {
		return (
			<section className="buyer-details col-sm-12">
				<div className="top container">
					<h2>Buyer's Details</h2>
					{ this.renderBuyerDetailsToggle() }
				</div>
				{ this.state.buyerDetailsVisible ? this.renderDetails() : '' }
			</section>
		);
	}

}



BuyerDetails.propTypes = {
	buyerDetails : PropTypes.object.isRequired
}



export default BuyerDetails;