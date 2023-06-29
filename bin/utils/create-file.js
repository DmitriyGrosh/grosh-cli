import fs from "fs";
import { logger } from "./logger.js";
import { FILE_EXTENSION_CONST } from "./const.js";

export function createBarrelIndex(camelFileName, pathTo, type) {
	const tsStream = fs.createWriteStream(`${pathTo}index.${type}`, 'utf8');

	tsStream.once('open', function() {
		tsStream.write(`export { ${camelFileName} } from "./${camelFileName}"\n`);
		tsStream.end();
	});

	logger(`index.${type} created`);
}

export function createStyleFile(camelFileName, pathTo, type) {
	fs.writeFileSync(`${pathTo}${camelFileName}.${type}`, '');

	logger(`${camelFileName}.${type} created`);
}


export function createJSXFile(camelFileName, pathTo, type, styleType = FILE_EXTENSION_CONST.SCSS) {
	const tsxStream = fs.createWriteStream(`${pathTo}${camelFileName}.${type}`, 'utf8');

	tsxStream.once('open', function() {
		tsxStream.write('import React from "react";\n');
		tsxStream.write('\n');

		if (styleType.includes('module')) {
			tsxStream.write(`import styles from "./${camelFileName}.${styleType}";\n`);
		} else {
			tsxStream.write(`import "./${camelFileName}.${styleType}";\n`);
		}

		tsxStream.write('\n');
		tsxStream.write(`export const ${camelFileName} = () => (<></>);\n`);
		tsxStream.end();
	});

	logger(`${camelFileName}.${styleType} created`);
}

export function createDirectoryByPath(pathTo) {
	fs.mkdirSync(pathTo,{ recursive: true });
}
