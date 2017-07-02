  //////////////////////////////////////////////
 // BUTTON COMPONENT //////////////////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';



// <Button /> Component
class Button extends Component {

  render() {
    return (
      <button 
      	className={`button ${this.props.cssClass}`} 
      	onClick={ this.props.callBack !== undefined ? this.props.callBack : '' }
      >
        { this.props.text }
      </button>
    );
  }

}



export default Button;