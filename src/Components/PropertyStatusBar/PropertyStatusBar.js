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
		return (
			<section className={ `container property-status-bar ${this.props.propertyStatus.replace(' ', '-').toLowerCase()}` }>
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