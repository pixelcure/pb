  //////////////////////////////////////////////
 // TEXTFIELD COMPONENT ///////////////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// CSS
import './TextField.css';



// <TextField /> Component
class TextField extends Component {

  // Render Text Field
  render() {
    return (
      <input 
        type="text"
        id={ this.props.id }
        name={ this.props.name }
        onChange={ this.props.onChange }
        value={ this.props.value }
        placeholder={ this.props.placeholder }
      />
    );
  }

}



TextField.propTypes = {
  id : PropTypes.string.isRequired,
  name : PropTypes.string.isRequired,
  value : PropTypes.string,
  placeholder : PropTypes.string,
  onChange : PropTypes.func.isRequired
}



export default TextField;