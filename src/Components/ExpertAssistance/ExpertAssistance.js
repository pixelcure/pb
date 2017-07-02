  /////////////////////////////////////////////////////
 // EXPERT ASSISTANCE COMPONENT //////////////////////
/////////////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';

// Components
import Button from '../Button/Button';



// <ExpertAssistance /> Element
class ExpertAssistance extends Component {

	negotiateForMe(e) {
		console.log('negotiate for me');
	}

	render() {
		return (
			<div className="expert-assistance col-sm-12">
				Expert Assistance? Let us help!
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