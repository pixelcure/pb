  /////////////////////////////////////////
 // HELPER FUNCTIONS /////////////////////
/////////////////////////////////////////



// Is string a number test
export const isStringTrueInt = (string) => {
	// If string is truely a string and defined, test to make sure it's a whole integer, 
	// no decimals or unwanted chars with the exception of the comma
	return string !== undefined && typeof string === 'string' ? /^[0-9,.]*$/.test(string) : false;
}

// Turn string to integer
export const numberStringToInt = (string) => {
	// if the string being passed is truely a number, replace any commas and return an integer
	if(string !== undefined && typeof string === 'string' && /^[0-9,.]*$/.test(string))
	return parseInt(string.replace(',',''), 10)
}