  //////////////////////////////////////////////
 // PROPERTY STATUSBAR COMPONENT //////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// CSS
import './PropertyStyleBar.css';



// <PropertyStatusBar /> Component
class PropertyStatusBar extends Component {

	render() {
		return (
			<section className={ `container inner property-status-bar ${this.props.propertyStatus.replace(' ', '-').toLowerCase()}` }>
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