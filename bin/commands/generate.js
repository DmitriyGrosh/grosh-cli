const { FILE_EXTENSION_CONST } = require("../utils/file-extension");
const { snakeToCamel } = require("../utils/to-string");
const {
	createStyleFile,
	createBarrelIndex,
	createJSXFile,
	createDirectoryByPath,
} = require("../utils/create-file");

function generate(pathTo, filename, options) {
	const styleExtension = options[FILE_EXTENSION_CONST.STYLE];
	const languageExtension = options[FILE_EXTENSION_CONST.LANGUAGE];

	const camelFilename = snakeToCamel(filename);
	const rootPath = `./src/${pathTo}/${filename}/`;

	createDirectoryByPath(rootPath);
	createStyleFile(camelFilename, rootPath, styleExtension);
	createJSXFile(camelFilename, rootPath, `${languageExtension}x`, styleExtension);
	createBarrelIndex(camelFilename, rootPath, languageExtension);
}

module.exports = { generate };
