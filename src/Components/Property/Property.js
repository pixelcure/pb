  //////////////////////////////////////////////
 // PROPERTY COMPONENT ////////////////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';

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

    // onSubmitAcceptingOffer Bind Context
    this.onSubmitAcceptingOffer = this.onSubmitAcceptingOffer.bind(this);

  }

  // Handles seller counter offer and updates state
  onSubmitAcceptingOffer(e) {

    // Prevent default form behavior
    e.preventDefault();

    console.log(e.currentTarget.value);

  }

  // View Comments
  viewComments(e) {
    console.log('view comments');
  }

  // Add Comments
  addComments(e) {
    console.log('add comments');
  }

  // Render Property View
  render() {
    return (
      <section className="container property-overview">
        <PropertyStatusBar 
          propertyStatus={ this.state.buyerDetails.status } 
        />
        <PropertyDetails 
          propertyDetails={ this.state.propertyDetails } 
        />
        <BuyerDetails 
          buyerDetails={ this.state.propertyDetails } 
        />
        <BuyerOffer 
          offerPrice={ this.state.propertyDetails } 
          comments={this.state.comments}
          viewComments={this.viewComments}
        />
        <PropertySellerResponse 
          offerPrice={ this.state.propertyDetails } 
          comments={ this.state.comments }
          viewComments={this.viewComments}
        />
        <PropertyNegotiation 
          onSubmitAcceptingOffer={ this.onSubmitAcceptingOffer }
          comments={ this.state.comments }
          addComments={this.viewComments}
        />
      </section>
    );
  }

}



export default Property;