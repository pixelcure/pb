  //////////////////////////////////////////////////
 // BUYER DETAILS COMPONENT ///////////////////////
//////////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// CSS
import './BuyerDetails.css';

// Components
import DashboardTitleHeader from '../DashboardTitleHeader/DashboardTitleHeader';



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
		
		// Detail Type Classes
		let typeGridCssClasses = `detail-type col-xs-12 col-sm-3`
		
		// Detail Content Classes
		let contentGridCssClasses = `detail-content col-xs-12 col-sm-9`

		return (
			<ul className="details lower clean">
				<li className="detail row">
					<span className={ typeGridCssClasses }>Name:</span>
					<span className={ contentGridCssClasses }>{ name }</span>
				</li>
				<li className="detail row">
					<span className={ typeGridCssClasses }>Buying Position:</span>
					<span className={ contentGridCssClasses }>{ positions.buying }</span>
				</li>
				<li className="detail row">
					<span className={ typeGridCssClasses }>Financial Position:</span>
					<span className={ contentGridCssClasses }>{ positions.financial }</span>
				</li>
				<li className="detail row">
					<span className={ typeGridCssClasses }>Timescale:</span>
					<span className={ contentGridCssClasses }>{ timescale }</span>
				</li>
			</ul>
		);

	}

	// Render Buyer Details
	render() {
		return (
			<section className="buyer-details container dashboard-module">
				<DashboardTitleHeader 
					title="Buyer's offer"
					tabStyle={ true }
					tabVisible={ this.state.buyerDetailsVisible }
					onTabClick={ this.toggleBuyerDetails }
					buttonCssClass="buyer-details-trigger"
				/>
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