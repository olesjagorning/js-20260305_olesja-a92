/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
	if (typeof obj !== 'object' || obj === null) throw new Error('Передан неверный объект!');
	
	const pickedObj = Object.fromEntries(
	  Object.entries(obj).filter(([key]) => fields.includes(key))
	);
	
	return pickedObj;
};