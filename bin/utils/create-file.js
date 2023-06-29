import fs from "fs";
import { logger } from "./logger.js";
import { FILE_EXTENSION_CONST } from "./const.js";

export function createBarrelIndex(camelFileName, pathTo, type) {
	const tsStream = fs.createWriteStream(`${pathTo}index.${type}`, 'utf8');

	tsStream.once('open', function() {
		tsStream.write(`export { ${camelFileName} } from "./${camelFileName}";\n`);
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

	logger(`${camelFileName}.${type} created`);
}

export function createDirectoryByPath(pathTo) {
	fs.mkdirSync(pathTo,{ recursive: true });
}


export function createTestFile(camelFileName, pathTo, type) {
	const tsxStream = fs.createWriteStream(`${pathTo}${camelFileName}.test.${type}`, 'utf8');

	tsxStream.once('open', function () {
		tsxStream.write('import React from "react";\n');
		tsxStream.write('import { render, screen } from "@testing-library/react";\n');
		tsxStream.write('import renderer from "react-test-renderer";\n');
		tsxStream.write('\n');
		tsxStream.write(`import { ${camelFileName} } from "./${camelFileName}";`);
		tsxStream.write('\n');

		tsxStream.write(`
describe('${camelFileName} component', () => {
	test('it renders', () => {
		render(<${camelFileName} />);
	});
});
`);

		tsxStream.write(`
test("it renders a correct snapshot", () => {
	const tree = renderer.create(<${camelFileName} />).toJSON();
	expect(tree).toMatchSnapshot();
});
		`);

		tsxStream.end();
	});

	logger(`${camelFileName}.test.${type} created`);
}
