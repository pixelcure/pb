  ////////////////////////////////////////////
 // BUTTON ELEMENT //////////////////////////
////////////////////////////////////////////

// Dependencies
import React from 'react';

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



export default Button;