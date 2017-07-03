  //////////////////////////////////////////////
 // PROPERTY COMPONENT ////////////////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// CSS
import './Property.css';

// Components
import PropertyStatusBar from '../PropertyStatusBar/PropertyStatusBar';
import PropertyDetails from '../PropertyDetails/PropertyDetails';
import BuyerDetails from '../BuyerDetails/BuyerDetails';
import BuyerOffer from '../BuyerOffer/BuyerOffer';
import PropertySellerResponse from '../PropertySellerResponse/PropertySellerResponse';
import PropertyNegotiation from '../PropertyNegotiation/PropertyNegotiation';



// <Property /> Component
class Property extends Component {

  constructor(props) {
    super(props)

    // Property State
    this.state = {
      offerPrice : 179000,
      offerSellerWillAccept : null,
      buyerDetails : props.data.buyerDetails,
      propertyDetails : props.data.propertyDetails,
      comments : props.data.comments
    }

    // updateofferSellerWillAccept Bind Context
    this.updateofferSellerWillAccept = this.updateofferSellerWillAccept.bind(this);

  }

  // Update Offer Seller Will Accept
  updateofferSellerWillAccept(offerSellerWillAccept) {

    // Update Property State, Dump contents of price into console
    this.setState({
      offerSellerWillAccept
    }, () => {
      console.info('Offer Seller Will Accept:', this.state.offerSellerWillAccept)
      console.info('Property State:', this.state)
    })

  }

  // View Comments
  viewComments(e) {
    alert('view comments')
  }

  // Add Comments
  addComments(e) {
    alert('add comments')
  }

  // Render Property View
  render() {
    return (
      <section className="property-overview container content">
        <PropertyStatusBar 
          propertyStatus={ this.state.propertyDetails.status } 
        />
        <PropertyDetails 
          propertyDetails={ this.state.propertyDetails } 
        />
        <BuyerDetails 
          buyerDetails={ this.state.buyerDetails } 
        />
        <section className="container negotiation-process">
          <BuyerOffer 
            offerPrice={ this.state.offerPrice } 
            comments={ this.state.comments }
            viewComments={ this.viewComments }
            language={ this.state.buyerDetails.language }
            currencySymbol={ this.state.buyerDetails.currency.symbol }
          />
          <PropertySellerResponse 
            propertyStatus={ this.state.propertyDetails.status }
            comments={ this.state.comments }
            viewComments={ this.viewComments }
          />
        </section>
        <PropertyNegotiation 
          updateofferSellerWillAccept={ this.updateofferSellerWillAccept }
          comments={ this.state.comments }
          addComments={ this.addComments }
          currencySymbol={ this.state.propertyDetails.currency.symbol }
        />
      </section>
    );
  }

}



// <Property /> expected propTypes
Property.propTypes = {
  data: PropTypes.object.isRequired
}



export default Property;