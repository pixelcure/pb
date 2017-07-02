  //////////////////////////////////////////////
 // TEXTFIELD COMPONENT ///////////////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';



// <TextField /> Component
class TextField extends Component {

  render() {
    return (
      <input 
        type="text"
        name={ this.props.name }
        defaultValue={ this.props.value }
        onChange={ this.props.onChange }
        placeholder={ this.props.placeholder }
      />
    );
  }

}



export default TextField;