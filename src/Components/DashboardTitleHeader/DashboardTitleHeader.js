  ////////////////////////////////////////////
 // DASHBOARD TITLE HEADER ELEMENT //////////
////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// CSS
import './DashboardTitleHeader.css';



// <DashboardTitleHeader /> Component
class DashboardTitleHeader extends Component {
	
	// Render Tab Toggle
	renderTabToggle() {
		
		// Set icon class based off local state
		let iconType = this.props.tabVisible ? 'icon-arrow-up' : 'icon-arrow-down'

		// Set text
		let text = this.props.tabVisible ? 'Hide' : 'Show';

		return (
			<button className={ this.props.buttonCssClass } title={ text }>
				{ text }
				<span className={ `icon ${iconType}` }></span>
			</button>
		);

	}

	// Render Header
	render() {

		// On tab click based off condition of prop
		let onTabClick = this.props.onTabClick !== undefined ? this.props.onTabClick : null

	    return (
			<div className="title-container" onClick={ onTabClick }>
				<h2>
					{ this.props.title }
					{ this.props.tabStyle ? this.renderTabToggle() : '' }
				</h2>
			</div>
	    );

	}

}



// <DashboardTitleHeader /> propTypes
DashboardTitleHeader.propTypes = {
  buttonCssClass : PropTypes.string,
  title : PropTypes.string.isRequired,
  tabStyle : PropTypes.bool.isRequired,
  tabVisible : PropTypes.bool,
  onTabClick : PropTypes.func
}



export default DashboardTitleHeader;