  /////////////////////////////////////////////////////
 // EXPERT ASSISTANCE COMPONENT //////////////////////
/////////////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';

// Components
import Button from '../Button/Button';



// <ExpertAssistance /> Element
class ExpertAssistance extends Component {

	negotiateForMe() {
		alert('negotiate for me');
	}

	render() {
		return (
			<div className="expert-assistance col-sm-12">
				<p>Would you like your Expert, Robert White, to negotiate on your behalf? It’s completely free!</p>
				<Button 
					text="Negotiate For Me" 
					cssClass="negotiate-for-me" 
					callBack={ this.negotiateForMe }
				/>
			</div>
		);
	}

}



export default ExpertAssistance;