/**
 * returns "hello".
 */
export const hello = () => "hello"; 


/**
 * adds two numbers
 *
 * @param {number} x first number to be added
 * @param {number} y second number to be added
 * @return {number} result of x + y
 */
export const add = (x , y) => {
	
	if(typeof x !== "number" || typeof y !== "number"){
		return null
	};

	return x + y;
}

/**
 * Removes all names starting with "s"
 *
 * @param {array} names, array of names to be filtered
 * @return {array} result of x + y
 */
export const removeSNames = names => {

	return names.filter((name) => name[0].toUpperCase() !== "S" );

};
