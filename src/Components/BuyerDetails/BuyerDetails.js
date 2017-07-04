  //////////////////////////////////////////////////
 // BUYER DETAILS COMPONENT ///////////////////////
//////////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// CSS
import './BuyerDetails.css';



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
		
		// Detail Type Grid Classes
		let detailTypeGridCssClasses = 'col-xs-12 col-sm-3'
		
		// Detail Content Grid Classes
		let detailContentGridCssClasses = 'col-xs-12 col-sm-9'

		return (
			<ul className="details lower clean">
				<li className="detail row">
					<span className={ `detail-type ${detailTypeGridCssClasses}` }>
						Name:	
					</span>
					<span className={ `detail-content ${detailContentGridCssClasses}` }>
						{ name }	
					</span>
				</li>
				<li className="detail row">
					<span className={ `detail-type ${detailTypeGridCssClasses}` }>
						Buying Position:	
					</span>
					<span className={ `detail-content ${detailContentGridCssClasses}` }>
						{ positions.buying }	
					</span>
				</li>
				<li className="detail row">
					<span className={ `detail-type ${detailTypeGridCssClasses}` }>
						Financial Position:	
					</span>
					<span className={ `detail-content ${detailContentGridCssClasses}` }>
						{ positions.financial }	
					</span>
				</li>
				<li className="detail row">
					<span className={ `detail-type ${detailTypeGridCssClasses}` }>
						Timescale:
					</span>
					<span className={ `detail-content ${detailContentGridCssClasses}` }>
						{ timescale }	
					</span>
				</li>
			</ul>
		);

	}

	// Render Buyer Details Toggle Button
	renderBuyerDetailsToggle() {
		
		// Set icon class based off local state
		let iconType = this.state.buyerDetailsVisible ? 'icon-arrow-up' : 'icon-arrow-down'
		// Set text
		let text = this.state.buyerDetailsVisible ? 'Hide' : 'Show';

		return (
			<button className="buyer-details-trigger" title={ text }>
				{ text }
				<span className={ `icon ${iconType}` }></span>
			</button>
		);

	}

	// Render Buyer Details
	render() {
		return (
			<section className="buyer-details container dashboard-module">
				<div className="title-container" onClick={ this.toggleBuyerDetails }>
					<h2>
						Buyer's details
						{ this.renderBuyerDetailsToggle() }
					</h2>
				</div>
				{ this.state.buyerDetailsVisible ? this.renderDetails() : '' }
			</section>
		);
	}

}



// <BuyerDetails /> expected propTypes
BuyerDetails.propTypes = {
	buyerDetails : PropTypes.object.isRequired
}



export default BuyerDetails;