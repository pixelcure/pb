  ////////////////////////////////////////////
 // FOOTER ELEMENT //////////////////////////
////////////////////////////////////////////

// Dependencies
import React from 'react';

// Footer data
import { navItems, socialMediaItems } from './footerData';



// <Footer /> Element
const Footer = () => {

	// Render Items
	let renderItems = (data, index) => {

		// Render icon if it exists
		let handleIcon = (data) => <span className={ data.iconClass }></span>

		// Render nav item
		return (
			<li key={index}>
				<a 
					href={ data.href } 
					title={ data.title } 
					target={ data.iconClass ? '_blank' : ''  }
				>
					{ data.iconClass !== undefined ? handleIcon(data) : data.title }
				</a>
			</li>
		);

	}

	// Render Footer
    return (
      <footer>
      	<div className="container">
      		<ul className="utility-nav col-xs-8">
      			{ navItems.map(renderItems) }
      		</ul>
      		<ul className="social-media col-xs-4">
      			{ socialMediaItems.map(renderItems) }
      		</ul>
      	</div>
      </footer>
    );

}



export default Footer;