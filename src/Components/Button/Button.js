  ////////////////////////////////////////////
 // BUTTON ELEMENT //////////////////////////
////////////////////////////////////////////

// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './Button.css';



// <Button /> Element
const Button = (props) => {
    
	// Test Callback Prop
	let isFunction = props.callBack !== undefined && typeof props.callBack === 'function'

    return (
      <button
      	className={ `button ${props.cssClass}` } 
        title={ props.text }
      	onClick={ isFunction ? props.callBack : '' }
      >
        { props.text }
      </button>
    );

}



// <Button /> propTypes
Button.propTypes = {
  cssClass : PropTypes.string,
  text : PropTypes.string.isRequired,
  callBack : PropTypes.func
}



export default Button;