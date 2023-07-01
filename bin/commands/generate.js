import { snakeToCamel } from "../utils/to-string.js";
import {
	createStyleFile,
	createBarrelIndex,
	createJSXFile,
	createDirectoryByPath, createTestFile, createStorybookFile,
} from "../utils/create-file.js";
import { FILE_EXTENSION_CONST } from "../utils/const.js";

export function generate(pathTo, filename, options) {
	const styleExtension = options[FILE_EXTENSION_CONST.STYLE];
	const languageExtension = options[FILE_EXTENSION_CONST.LANGUAGE];
	const isTest = options[FILE_EXTENSION_CONST.TEST];
	const isStorybook = options[FILE_EXTENSION_CONST.STORYBOOK]

	const camelFilename = snakeToCamel(filename, true);
	// const notCapitalizeCamelFilename = snakeToCamel(filename, false);
	const rootPath = `./src/${pathTo}/${filename}/`;

	createDirectoryByPath(rootPath);
	createStyleFile(camelFilename, rootPath, styleExtension);
	createJSXFile(camelFilename, rootPath, `${languageExtension}x`, styleExtension);
	createBarrelIndex(camelFilename, rootPath, languageExtension);

	if (isTest) {
		createTestFile(camelFilename, rootPath, `${languageExtension}x`);
	}

	if (isStorybook) {
		createStorybookFile(rootPath, languageExtension, camelFilename);
	}
}
