  //////////////////////////////////////////////
 // PROPERTY COMPONENT ////////////////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';



// <Property /> Component
class Property extends Component {

  constructor(props) {
    super(props)

    // Property State
    this.state = {
      offerPrice : 179000,
      offerSellerWillAccept : null,
      data : props.data
    }

    // onSubmitAcceptingOffer Bind
    this.onSubmitAcceptingOffer = this.onSubmitAcceptingOffer.bind(this);

  }

  onSubmitAcceptingOffer(e) {

  }

  render() {
    return (
      <section className="container property">
        Property
      </section>
    );
  }
}



export default Property;