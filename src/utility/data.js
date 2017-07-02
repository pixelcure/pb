  /////////////////////////////////////////
 // DATA /////////////////////////////////
/////////////////////////////////////////



// Buyer Details
export const buyerDetails = {
	name : 'Mr David Sheperd',
	positions : {
		buying : 'Property To Sell - 20 Weeks on the market',
		financial : 'Mortgage required - approved',
	},
	timescale : 'Would like to move in 10 weeks - no chain',
	language : 'en',
	currency : {
		type : 'GBP',
		symbol : '£'
	}
}

// Property Details
export const propertyDetails = {
	id : 0,
	status : 'Withdrawn',
	title : 'The property',
	houseName : 'Eddington House',
	street : '16 Wigginton Road',
	town : 'Tamworth',
	postalCode : 'B79 8PB',
	image : '/images/property.jpg',
	extras : [],
	askingPrice : 189950,
	language : 'en',
	currency : {
		type : 'GBP',
		symbol : '£'
	}
}

// Comments Data
export const comments = {
	response : [],
	buyerOffer : [],
	negotiation : []
}

// Concatonated data object
const data = {
	buyerDetails,
	propertyDetails,
	comments
}



export default data;