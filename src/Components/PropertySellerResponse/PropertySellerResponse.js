  /////////////////////////////////////////////////////////
 // PROPERTY SELLER RESPONSE COMPONENT ///////////////////
/////////////////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';

// Components
import Button from '../Button/Button';



// <PropertySellerResponse /> Element
class PropertySellerResponse extends Component {

	render() {
		return (
			<section className="property-seller-response col-sm-12 col-md-6">
				Property Seller Response
				<Button 
					text="View Comments" 
					cssClass="view-comments" 
					callBack={ this.props.viewComments }
				/>
			</section>
		);
	}

}



export default PropertySellerResponse;