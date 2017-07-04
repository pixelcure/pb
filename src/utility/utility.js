  /////////////////////////////////////////
 // HELPER FUNCTIONS /////////////////////
/////////////////////////////////////////



// Is string a number test
export const isStringTrueInt = (string) => {
	// If string is truely a string and defined, test to make sure it's a whole integer, 
	// no decimals or unwanted chars with the exception of the comma
	return string !== undefined && typeof string === 'string' ? /^[0-9,]*$/.test(string) : false;
}

// Turn string to integer
export const numberStringToInt = (string) => {
	// if the string being passed is truely a number, replace any commas and return an integer
	if(string !== undefined && typeof string === 'string' && /^[0-9,]*$/.test(string))
	return parseInt(string.replace(/,/g, ''), 10)
}

// Detect Internet Explorer (based off of https://codepen.io/gapcode/pen/vEJNZN)
/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
export const detectIE = () => {
  let ua = window.navigator.userAgent;
  // IE10 or lower
  let msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }
  // IE 11
  let trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    let rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }
  // Edge
  let edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }
  // Not IE
  return false;
}