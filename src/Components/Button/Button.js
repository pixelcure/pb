  ////////////////////////////////////////////
 // BUTTON ELEMENT //////////////////////////
////////////////////////////////////////////

// Dependencies
import React from 'react';



// <Button /> Element
const Button = (props) => {
    
    return (
      <button 
      	className={`button ${props.cssClass}`} 
      	onClick={ props.callBack !== undefined && typeof props.callBack === 'function' ? props.callBack : '' }
      >
        { props.text }
      </button>
    );

}



export default Button;