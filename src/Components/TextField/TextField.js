  //////////////////////////////////////////////
 // TEXTFIELD COMPONENT ///////////////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';



// <TextField /> Component
class TextField extends Component {

  render() {
    return (
      <input 
        type="text"
        id={ this.props.id }
        name={ this.props.name }
        defaultValue={ this.props.value }
        onChange={ this.props.onChange }
        placeholder={ this.props.placeholder }
      />
    );
  }

}



TextField.propTypes = {
  id : PropTypes.string.isRequired,
  name : PropTypes.string.isRequired,
  defaultValue : PropTypes.string,
  placeholder : PropTypes.string,
  onChange : PropTypes.func.isRequired
}



export default TextField;