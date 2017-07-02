  /////////////////////////////////////////
 // DATA /////////////////////////////////
/////////////////////////////////////////


// Buyer Details
export const buyerDetails = {
	name : 'Mr Sheperd',
	positions : {
		buying : 'Property To Sell - 20 Weeks on the market',
		financial : 'Mortgage required - approved',
	},
	timescale : 'Would like to move in 10 weeks - no chain',
	status : 'Withdrawn'
}

// Property Details
export const propertyDetails = {
	id : 0,
	title : 'The property',
	county : 'Tamworth',
	postalCode : 'B79 8PB',
	image : '/images/property.jpg',
	extras : [],
	askingPrice : 189950
}

// Comments Data
export const comments = {
	response : [],
	buyerOffer : [],
	negotiation : []
}

// Concatonated data object
export const data = {
	buyerDetails,
	propertyDetails,
	comments
}



export default data;