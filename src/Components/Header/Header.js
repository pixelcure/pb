  ////////////////////////////////////////////
 // HEADER ELEMENT //////////////////////////
////////////////////////////////////////////

// Dependencies
import React from 'react';

// Logo Image
import Logo from './images/ezie-system-welcome.jpg';



// <Header /> Element
const Header = () => {

    return (
      <header>
      	<div className="container">
	      	<figure className="logo col-xs-6">
	        	<img src={ Logo } alt="Welcome to the eZie system" />
	      	</figure>
	      	<h1 className="security-level col-xs-6">
	      		Secure negotiation centre
	      	</h1>
      	</div>
      </header>
    );

}



export default Header;