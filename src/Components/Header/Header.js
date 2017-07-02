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
	      	<figure className="logo col-sm-6">
	        	<img src={Logo} alt="Welcome to the eZie system" />
	      	</figure>
	      	<span className="security-level col-sm-6">
	      		Secure negotiation centre
	      	</span>
      	</div>
      </header>
    );
}



export default Header;