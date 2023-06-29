function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function snakeToCamel(str){
	const capitalLetter = capitalizeFirstLetter(str);

	return capitalLetter.replace(
	  /(?!^)-(.)/g,
	  (_, char) => char.toUpperCase()
	);
}

module.exports = { snakeToCamel };
