  //////////////////////////////////////////////
 // PROPERTY STATUSBAR COMPONENT //////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// CSS
import './PropertyStatusBar.css';



// <PropertyStatusBar /> Component
class PropertyStatusBar extends Component {

	// Render Status Bar
	render() {

		// Status
		let status = this.props.propertyStatus.replace(' ', '-').toLowerCase()

		// Dashboard CSS Classes
		let dashboardCssClasses = 'container dashboard-module'

		return (
			<section className={ `property-status-bar ${status} ${dashboardCssClasses}` }>
				<strong>Status:</strong> { this.props.propertyStatus }
			</section>
	    );
	}

}



// <PropertyStatusBar /> expected propTypes
PropertyStatusBar.propTypes = {
	propertyStatus : PropTypes.string.isRequired
}



export default PropertyStatusBar;