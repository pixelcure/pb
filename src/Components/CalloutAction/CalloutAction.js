  /////////////////////////////////////////////////////
 // CALLOUT CTA COMPONENT ////////////////////////////
/////////////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// CSS
import './CalloutAction.css';

// Components
import Button from '../Button/Button';



// <CalloutAction /> Element
class CalloutAction extends Component {

	// Render Callout
	render() {
		return (
			<div className={ `callout-action ${this.props.calloutCssClass} container inner` }>
				<p>
					{ this.props.calloutText }
				</p>
				<Button 
					text={ this.props.buttonText } 
					cssClass={ `callout-trigger ${this.props.buttonCssClass}` }
					callBack={ this.props.callBack }
				/>
			</div>
		);
	}

}



// <CalloutAction /> Expected propTypes
CalloutAction.propTypes = {
	callBack : PropTypes.func.isRequired,
	buttonText : PropTypes.string.isRequired,
	calloutCssClass : PropTypes.string,
	calloutText : PropTypes.string.isRequired
}



export default CalloutAction;