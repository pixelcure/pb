  /////////////////////////////////////////////////////
 // PROPERTYS DETAIL COMPONENT ///////////////////////
/////////////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// CSS
import './PropertyDetails.css';

// Components
import Button from '../Button/Button';

// Image
import PropertyPlaceholder from './images/PropertyPlaceholder.jpg';



// <PropertyDetails /> Component
class PropertyDetails extends Component {


	// Render Property Image
	renderPropertyImage() {
		return (
			<figure className="property-image col-sm-12 col-md-2">
				<img src={ PropertyPlaceholder } alt={ this.props.propertyDetails.title } />
			</figure>
		);
	}

	// Render Property Address
	renderPropertyAddress() {

		// Deconstructing the pieces of data for location
		const { houseName, street, town, postalCode } = this.props.propertyDetails

		return (
			<div className="property-address col-sm-12 col-md-6">
				<strong>
					{ `${houseName}, ${street}, ${town} ${postalCode}` }
				</strong>
			</div>
		);

	}

	// Render Property Asking Price
	renderAskingPrice () {

		// Deconstructing the pieces of data needed for asking price
		const { askingPrice, currency, language } = this.props.propertyDetails

		return (
			<div className="asking-price col-sm-12 col-md-4">
				<span>Asking price:</span>
				<strong>
					{ currency.symbol }
					{ askingPrice.toLocaleString(language) }
				</strong>
				<Button 
					text="View Extras Included"
					callBack={ this.viewExtrasIncluded }
				/>
			</div>
		);

	}

	// View Extras
	viewExtrasIncluded(e) {
		alert('view extras included')
	}

	// Render Property Details
	render() {

		// Dashboard Styles
		let dashboardStyles = 'container dashboard-module'

		return (
			<section className={ `property-details ${dashboardStyles}` }>
				<div className="title-container">
					<h2>
						{ this.props.propertyDetails.title }
					</h2>
				</div>
				<div className="property-info lower">
					{ this.renderPropertyImage() }
					{ this.renderPropertyAddress() }
					{ this.renderAskingPrice() }
				</div>
			</section>
		);
	}

}



// <PropertyDetails /> expected propTypes
PropertyDetails.propTypes = {
	propertyDetails : PropTypes.object.isRequired
}



export default PropertyDetails;