function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function snakeToCamel(str, isCapitalize){
	const capitalLetter =  isCapitalize ? capitalizeFirstLetter(str) : str;

	return capitalLetter.replace(
	  /(?!^)-(.)/g,
	  (_, char) => char.toUpperCase()
	);
}
