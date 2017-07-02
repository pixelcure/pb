  //////////////////////////////////////////////
 // PROPERTY STATUSBAR COMPONENT //////////////
//////////////////////////////////////////////

// Dependencies
import React from 'react';



// <PropertyStatusBar /> Element
const PropertyStatusBar = (props) => {

	return (
		<section className={ `property-status-bar ${props.propertyStatus.replace('-', ' ').toLowerCase()}` }>
			<strong>Status</strong>
			<span className="status">
			  { props.propertyStatus }
			</span>
		</section>
    );

}



export default PropertyStatusBar;