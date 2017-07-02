  /////////////////////////////////////////////////////
 // PROPERTYS DETAIL COMPONENT ///////////////////////
/////////////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';

// Components
import Button from '../Button/Button';



// <PropertyDetails /> Element
class PropertyDetails extends Component {

	render() {
		return (
			<section className="property-details col-sm-12">
				Property Detail
				<Button 
					text="View Extras Included" 
					cssClass="view-extras" 
				/>
			</section>
		);
	}

}



export default PropertyDetails;